import { mkdir, writeFile } from "node:fs/promises"
import { resolve } from "node:path"

import { categories, categoryLabels, resources, type Category } from "../lib/catalog"

const palettes: Record<Category, [string, string, string]> = {
  stack: ["#5b7cff", "#8d5cff", "#161b3b"],
  componentes: ["#ec4899", "#8b5cf6", "#301839"],
  animacion: ["#f97316", "#ef4444", "#3c1818"],
  "3d": ["#22d3ee", "#2563eb", "#0c2940"],
  rendimiento: ["#34d399", "#0ea5e9", "#0d302b"],
  accesibilidad: ["#facc15", "#22c55e", "#303016"],
  "seo-analitica": ["#38bdf8", "#6366f1", "#142a45"],
  patrones: ["#c084fc", "#f472b6", "#3b1c40"],
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;")
}

function wrap(value: string, maxLength: number, maxLines: number) {
  const words = value.split(/\s+/)
  const lines: string[] = []
  let line = ""

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word
    if (candidate.length <= maxLength) {
      line = candidate
      continue
    }

    if (line) lines.push(line)
    line = word
    if (lines.length === maxLines - 1) break
  }

  if (line && lines.length < maxLines) lines.push(line)
  if (lines.length === maxLines && words.join(" ").length > lines.join(" ").length) {
    const lastLine = lines[maxLines - 1]
    if (lastLine) lines[maxLines - 1] = `${lastLine.replace(/[.,;:]?$/, "")}...`
  }

  return lines
}

function hash(value: string) {
  return [...value].reduce((total, character) => total + character.charCodeAt(0), 0)
}

function createResourceImage(resource: (typeof resources)[number]) {
  const [primary, secondary, surface] = palettes[resource.category]
  const title = wrap(resource.name, 18, 2)
  const description = wrap(resource.description, 48, 2)
  const domain = new URL(resource.url).hostname.replace(/^www\./, "")
  const seed = hash(resource.slug)
  const bars = [0, 1, 2, 3, 4].map((index) => 58 + ((seed * (index + 3)) % 125))
  const categoryLabel = categoryLabels[resource.category].toUpperCase()
  const categoryWidth = Math.max(170, categoryLabel.length * 11 + 44)

  return `<svg width="1200" height="675" viewBox="0 0 1200 675" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title description">
  <title id="title">${escapeXml(resource.imageAlt)}</title>
  <desc id="description">${escapeXml(resource.description)}</desc>
  <defs>
    <linearGradient id="background" x1="80" y1="30" x2="1120" y2="645" gradientUnits="userSpaceOnUse">
      <stop stop-color="${surface}"/>
      <stop offset="0.52" stop-color="#090D19"/>
      <stop offset="1" stop-color="#05070D"/>
    </linearGradient>
    <linearGradient id="accent" x1="130" y1="90" x2="1050" y2="600" gradientUnits="userSpaceOnUse">
      <stop stop-color="${primary}"/>
      <stop offset="1" stop-color="${secondary}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientTransform="translate(925 120) rotate(133) scale(420 430)" gradientUnits="userSpaceOnUse">
      <stop stop-color="${primary}" stop-opacity=".55"/>
      <stop offset="1" stop-color="${primary}" stop-opacity="0"/>
    </radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="160%">
      <feDropShadow dx="0" dy="28" stdDeviation="36" flood-color="#000" flood-opacity=".42"/>
    </filter>
  </defs>
  <rect width="1200" height="675" rx="40" fill="url(#background)"/>
  <rect width="1200" height="675" rx="40" fill="url(#glow)"/>
  <path d="M0 525C200 425 310 660 525 545C735 432 880 620 1200 435V675H0V525Z" fill="url(#accent)" opacity=".13"/>
  <g opacity=".14">
    <path d="M0 120H1200M0 240H1200M0 360H1200M0 480H1200M0 600H1200" stroke="#fff"/>
    <path d="M120 0V675M240 0V675M360 0V675M480 0V675M600 0V675M720 0V675M840 0V675M960 0V675M1080 0V675" stroke="#fff"/>
  </g>

  <g filter="url(#shadow)">
    <rect x="70" y="66" width="1060" height="543" rx="30" fill="#0C101D" fill-opacity=".93" stroke="#fff" stroke-opacity=".16" stroke-width="2"/>
    <path d="M70 126H1130" stroke="#fff" stroke-opacity=".12" stroke-width="2"/>
    <circle cx="108" cy="96" r="7" fill="#FF6577"/>
    <circle cx="134" cy="96" r="7" fill="#F7C95C"/>
    <circle cx="160" cy="96" r="7" fill="#5BD18A"/>
    <rect x="210" y="82" width="375" height="28" rx="14" fill="#fff" fill-opacity=".06"/>
    <text x="232" y="101" fill="#AAB4CC" font-family="ui-monospace, SFMono-Regular, monospace" font-size="13">${escapeXml(domain)}</text>
  </g>

  <rect x="110" y="166" width="${categoryWidth}" height="34" rx="17" fill="${primary}" fill-opacity=".15" stroke="${primary}" stroke-opacity=".45"/>
  <text x="${110 + categoryWidth / 2}" y="188" text-anchor="middle" fill="${primary}" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="1.5">${escapeXml(categoryLabel)}</text>

  <text x="110" y="276" fill="#F8FAFF" font-family="Inter, Arial, sans-serif" font-size="70" font-weight="760" letter-spacing="-3">
    ${title.map((line, index) => `<tspan x="110" dy="${index === 0 ? 0 : 76}">${escapeXml(line)}</tspan>`).join("")}
  </text>
  <text x="112" y="${title.length > 1 ? 430 : 354}" fill="#AAB4CC" font-family="Inter, Arial, sans-serif" font-size="24">
    ${description.map((line, index) => `<tspan x="112" dy="${index === 0 ? 0 : 34}">${escapeXml(line)}</tspan>`).join("")}
  </text>

  <g transform="translate(790 174)">
    <rect width="286" height="330" rx="28" fill="#fff" fill-opacity=".055" stroke="#fff" stroke-opacity=".12"/>
    <rect x="28" y="30" width="82" height="82" rx="24" fill="url(#accent)"/>
    <text x="69" y="85" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="38" font-weight="800">${escapeXml(resource.name.slice(0, 1).toUpperCase())}</text>
    <rect x="28" y="138" width="172" height="14" rx="7" fill="#fff" fill-opacity=".82"/>
    <rect x="28" y="166" width="112" height="10" rx="5" fill="#fff" fill-opacity=".22"/>
    ${bars.map((height, index) => `<rect x="${32 + index * 45}" y="${288 - height}" width="25" height="${height}" rx="12.5" fill="${index % 2 ? secondary : primary}" fill-opacity="${0.55 + index * 0.08}"/>`).join("")}
  </g>

  <g transform="translate(110 ${title.length > 1 ? 540 : 500})">
    ${resource.tags.slice(0, 3).map((tag, index) => {
      const x = index * 150
      return `<rect x="${x}" width="132" height="36" rx="18" fill="#fff" fill-opacity=".06" stroke="#fff" stroke-opacity=".12"/>
      <text x="${x + 66}" y="23" text-anchor="middle" fill="#D7DDF0" font-family="Inter, Arial, sans-serif" font-size="14">${escapeXml(tag)}</text>`
    }).join("")}
  </g>
</svg>`
}

const outputDirectory = resolve(process.cwd(), "public/resources")
await mkdir(outputDirectory, { recursive: true })

await Promise.all(
  resources.map((resource) =>
    writeFile(resolve(outputDirectory, `${resource.slug}.svg`), createResourceImage(resource))
  )
)

const docsImageDirectory = resolve(process.cwd(), "../../docs/images")
await mkdir(docsImageDirectory, { recursive: true })
await writeFile(
  resolve(docsImageDirectory, "super-wow-ui-design-cover.svg"),
  `<svg width="1600" height="900" viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title description">
  <title id="title">Super Wow UI Design</title>
  <desc id="description">Directorio visual de recursos para diseñar páginas web y aplicaciones modernas.</desc>
  <defs>
    <linearGradient id="bg" x1="120" y1="40" x2="1480" y2="860" gradientUnits="userSpaceOnUse">
      <stop stop-color="#202A67"/>
      <stop offset=".48" stop-color="#0A0E1A"/>
      <stop offset="1" stop-color="#180C2D"/>
    </linearGradient>
    <linearGradient id="accent" x1="250" y1="140" x2="1330" y2="760" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6479FF"/>
      <stop offset=".5" stop-color="#9B5CFF"/>
      <stop offset="1" stop-color="#22D3EE"/>
    </linearGradient>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%">
      <feDropShadow dx="0" dy="30" stdDeviation="40" flood-color="#000" flood-opacity=".48"/>
    </filter>
  </defs>
  <rect width="1600" height="900" rx="48" fill="url(#bg)"/>
  <circle cx="1370" cy="80" r="410" fill="#6D5DFC" fill-opacity=".2"/>
  <circle cx="230" cy="870" r="390" fill="#22D3EE" fill-opacity=".12"/>
  <g opacity=".1">
    <path d="M0 150H1600M0 300H1600M0 450H1600M0 600H1600M0 750H1600" stroke="#fff"/>
    <path d="M160 0V900M320 0V900M480 0V900M640 0V900M800 0V900M960 0V900M1120 0V900M1280 0V900M1440 0V900" stroke="#fff"/>
  </g>
  <text x="120" y="150" fill="#9EA9FF" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="750" letter-spacing="4">AWESOME MODERN UI</text>
  <text x="120" y="260" fill="#F8FAFF" font-family="Inter, Arial, sans-serif" font-size="82" font-weight="800" letter-spacing="-4">
    <tspan x="120">Recursos para diseñar</tspan>
    <tspan x="120" dy="92">webs y apps modernas.</tspan>
  </text>
  <text x="124" y="485" fill="#B2BAD0" font-family="Inter, Arial, sans-serif" font-size="28">
    <tspan x="124">Componentes, animación, 3D, rendimiento e inspiración.</tspan>
    <tspan x="124" dy="42">Una selección visual, útil y mantenida por la comunidad.</tspan>
  </text>
  <g transform="translate(120 620)">
    <rect width="220" height="58" rx="29" fill="url(#accent)"/>
    <text x="110" y="37" text-anchor="middle" fill="white" font-family="Inter, Arial, sans-serif" font-size="19" font-weight="750">${resources.length} RECURSOS</text>
    <rect x="240" width="240" height="58" rx="29" fill="#fff" fill-opacity=".06" stroke="#fff" stroke-opacity=".16"/>
    <text x="360" y="37" text-anchor="middle" fill="#E9ECF8" font-family="Inter, Arial, sans-serif" font-size="19" font-weight="650">${categories.length} CATEGORÍAS</text>
  </g>
  <g transform="translate(1010 160)" filter="url(#shadow)">
    <g transform="rotate(8 210 240)">
      <rect width="420" height="510" rx="32" fill="#0D1222" stroke="#fff" stroke-opacity=".16" stroke-width="2"/>
      <rect x="28" y="28" width="364" height="220" rx="22" fill="url(#accent)" fill-opacity=".2"/>
      <rect x="58" y="68" width="92" height="92" rx="28" fill="url(#accent)"/>
      <rect x="58" y="180" width="250" height="18" rx="9" fill="#fff" fill-opacity=".85"/>
      <rect x="58" y="215" width="180" height="12" rx="6" fill="#fff" fill-opacity=".25"/>
      <rect x="28" y="278" width="172" height="190" rx="22" fill="#fff" fill-opacity=".055"/>
      <rect x="220" y="278" width="172" height="190" rx="22" fill="#fff" fill-opacity=".055"/>
      <path d="M58 420L92 365L126 392L170 325" stroke="#22D3EE" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="305" cy="370" r="54" stroke="#9B5CFF" stroke-width="22"/>
    </g>
  </g>
</svg>`
)

console.log(`Portadas generadas: ${resources.length} recursos.`)
