import { mkdir, writeFile } from "node:fs/promises"

const repository = "addyosmani/web-quality-skills"
const requestedRef = process.env.WEB_QUALITY_SKILLS_REF ?? "main"
const skills = [
  "web-quality-audit",
  "performance",
  "core-web-vitals",
  "accessibility",
  "seo",
  "best-practices",
]

async function fetchText(url) {
  const response = await fetch(url, {
    headers: { "User-Agent": "awesome-modern-ui-skill-sync" },
  })

  if (!response.ok) {
    throw new Error(`No se pudo descargar ${url}: ${response.status}`)
  }

  return response.text()
}

const commitResponse = await fetch(
  `https://api.github.com/repos/${repository}/commits/${requestedRef}`,
  { headers: { "User-Agent": "awesome-modern-ui-skill-sync" } },
)

if (!commitResponse.ok) {
  throw new Error(`No se pudo resolver ${requestedRef}: ${commitResponse.status}`)
}

const { sha } = await commitResponse.json()
const rawBase = `https://raw.githubusercontent.com/${repository}/${sha}`

for (const skill of skills) {
  const contents = await fetchText(`${rawBase}/skills/${skill}/SKILL.md`)

  for (const root of [".codex/skills", ".claude/skills"]) {
    const directory = `${root}/${skill}`
    await mkdir(directory, { recursive: true })
    await writeFile(`${directory}/SKILL.md`, contents)
  }
}

const license = await fetchText(`${rawBase}/LICENSE`)
await mkdir("third_party/web-quality-skills", { recursive: true })
await writeFile("third_party/web-quality-skills/LICENSE", license)
await writeFile(
  "third_party/web-quality-skills/source.json",
  `${JSON.stringify(
    {
      name: "web-quality-skills",
      repository: `https://github.com/${repository}`,
      ref: sha,
      license: "MIT",
      author: "Addy Osmani",
      syncedAt: new Date().toISOString().slice(0, 10),
    },
    null,
    2,
  )}\n`,
)

console.log(`Web Quality Skills sincronizadas en ${sha}.`)
