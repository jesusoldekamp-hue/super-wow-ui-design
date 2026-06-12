import { access, readFile } from "node:fs/promises"

const requiredFiles = [
  "AGENTS.md",
  "CLAUDE.md",
  ".claude/commands/create-modern-site.md",
  ".codex/skills/modern-ui/SKILL.md",
  "docs/AI_WORKFLOW.md",
  "docs/STACK.md",
  "docs/QUALITY_BAR.md",
  "registry.json",
  "apps/web/components/cinematic-demo.tsx",
  "packages/effects/src/ambient-orb.tsx",
  "packages/effects/src/lenis-provider.tsx",
  "packages/effects/src/morphing-symbol.tsx",
  "packages/effects/src/scroll-story.tsx",
  "packages/effects/src/split-text-reveal.tsx",
  "packages/ui/src/components/liquid-glass.tsx",
  "docs/WEB_QUALITY_SKILLS.md",
  "THIRD_PARTY_NOTICES.md",
  "third_party/web-quality-skills/LICENSE",
  "third_party/web-quality-skills/source.json",
]

const qualitySkills = [
  "web-quality-audit",
  "performance",
  "core-web-vitals",
  "accessibility",
  "seo",
  "best-practices",
]

for (const skill of qualitySkills) {
  requiredFiles.push(
    `.codex/skills/${skill}/SKILL.md`,
    `.claude/skills/${skill}/SKILL.md`,
  )
}

const qualitySource = JSON.parse(
  await readFile("third_party/web-quality-skills/source.json", "utf8"),
)

for (const sourcePath of qualitySource.files ?? []) {
  const relativePath = sourcePath.replace(/^skills\//, "")
  requiredFiles.push(
    `.codex/skills/${relativePath}`,
    `.claude/skills/${relativePath}`,
  )
}

const requiredDependencies = [
  "@gsap/react",
  "@react-three/drei",
  "@react-three/fiber",
  "gsap",
  "lenis",
  "motion",
  "three",
]

const effectsPackage = JSON.parse(await readFile("packages/effects/package.json", "utf8"))
const missingDependencies = requiredDependencies.filter(
  (dependency) => !effectsPackage.dependencies?.[dependency],
)

const missingFiles = []
for (const file of requiredFiles) {
  try {
    await access(file)
  } catch {
    missingFiles.push(file)
  }
}

if (missingFiles.length || missingDependencies.length) {
  if (missingFiles.length) console.error(`Archivos faltantes:\n- ${missingFiles.join("\n- ")}`)
  if (missingDependencies.length) {
    console.error(`Dependencias faltantes:\n- ${missingDependencies.join("\n- ")}`)
  }
  process.exit(1)
}

const divergentSkills = []
for (const sourcePath of qualitySource.files ?? []) {
  const relativePath = sourcePath.replace(/^skills\//, "")
  const [codexSkill, claudeSkill] = await Promise.all([
    readFile(`.codex/skills/${relativePath}`, "utf8"),
    readFile(`.claude/skills/${relativePath}`, "utf8"),
  ])

  if (codexSkill !== claudeSkill) divergentSkills.push(relativePath)
}

if (divergentSkills.length) {
  console.error(
    `Skills distintas entre Codex y Claude:\n- ${divergentSkills.join("\n- ")}`,
  )
  process.exit(1)
}

console.log(
  `Starter listo para agentes: ${requiredFiles.length} archivos, ${requiredDependencies.length} capacidades avanzadas y ${qualitySkills.length} skills de calidad verificadas.`,
)
