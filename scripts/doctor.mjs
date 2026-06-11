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
]

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

console.log(
  `Starter listo para agentes: ${requiredFiles.length} archivos y ${requiredDependencies.length} capacidades avanzadas verificadas.`,
)
