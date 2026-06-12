import { mkdir, rm, writeFile } from "node:fs/promises"
import { dirname } from "node:path"

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
const treeResponse = await fetch(
  `https://api.github.com/repos/${repository}/git/trees/${sha}?recursive=1`,
  { headers: { "User-Agent": "awesome-modern-ui-skill-sync" } },
)

if (!treeResponse.ok) {
  throw new Error(`No se pudo leer el árbol de ${sha}: ${treeResponse.status}`)
}

const { tree } = await treeResponse.json()
const skillFiles = tree
  .filter(
    (item) =>
      item.type === "blob" &&
      skills.some((skill) => item.path.startsWith(`skills/${skill}/`)),
  )
  .map((item) => item.path)
  .sort()

for (const root of [".codex/skills", ".claude/skills"]) {
  for (const skill of skills) {
    await rm(`${root}/${skill}`, { recursive: true, force: true })
  }

  for (const sourcePath of skillFiles) {
    const targetPath = `${root}/${sourcePath.replace(/^skills\//, "")}`
    await mkdir(dirname(targetPath), { recursive: true })
    await writeFile(targetPath, await fetchText(`${rawBase}/${sourcePath}`))
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
      files: skillFiles,
    },
    null,
    2,
  )}\n`,
)

console.log(`Web Quality Skills sincronizadas en ${sha}.`)
