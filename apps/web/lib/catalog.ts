export const categories = [
  "stack",
  "componentes",
  "animacion",
  "3d",
  "rendimiento",
  "accesibilidad",
  "seo-analitica",
  "patrones",
] as const

export type Category = (typeof categories)[number]
export type ResourceType =
  | "framework"
  | "libreria"
  | "plugin"
  | "api"
  | "plataforma"
  | "metrica"
  | "patron"
  | "feature"

export type Resource = {
  name: string
  slug: string
  url: string
  description: string
  reason: string
  category: Category
  type: ResourceType
  frameworks: string[]
  tags: string[]
  pricing: "gratis" | "freemium" | "pago"
  license: string
  maintained: boolean
  featured?: boolean
}

const r = (
  name: string,
  slug: string,
  url: string,
  description: string,
  reason: string,
  category: Category,
  type: ResourceType,
  frameworks: string[],
  tags: string[],
  license: string,
  pricing: Resource["pricing"] = "gratis",
  featured = false
): Resource => ({
  name,
  slug,
  url,
  description,
  reason,
  category,
  type,
  frameworks,
  tags,
  pricing,
  license,
  maintained: true,
  featured,
})

export const resources: Resource[] = [
  r("Next.js", "nextjs", "https://nextjs.org", "Framework React para aplicaciones web de producción.", "La base más completa para routing, rendimiento, imágenes y despliegue moderno.", "stack", "framework", ["React"], ["App Router", "RSC"], "MIT", "gratis", true),
  r("React", "react", "https://react.dev", "Biblioteca para construir interfaces por componentes.", "Ecosistema maduro, composición flexible y excelente tooling.", "stack", "libreria", ["React"], ["UI", "Componentes"], "MIT"),
  r("TypeScript", "typescript", "https://www.typescriptlang.org", "JavaScript con tipos para proyectos mantenibles.", "Reduce errores y documenta contratos reutilizables.", "stack", "libreria", ["Agnóstico"], ["DX", "Tipos"], "Apache-2.0"),
  r("Node.js", "nodejs", "https://nodejs.org", "Runtime JavaScript para tooling y servidor.", "Sostiene el ecosistema y el runtime de las aplicaciones Next.js.", "stack", "plataforma", ["Agnóstico"], ["Runtime", "Servidor"], "MIT"),
  r("Tailwind CSS", "tailwind-css", "https://tailwindcss.com", "Framework CSS utility-first para sistemas visuales.", "Acelera la iteración sin renunciar a tokens ni consistencia.", "stack", "framework", ["Agnóstico"], ["CSS", "Tokens"], "MIT", "gratis", true),
  r("shadcn/ui", "shadcn-ui", "https://ui.shadcn.com", "Componentes accesibles que pasan a ser parte de tu código.", "Combina velocidad, control visual y un registry reutilizable.", "componentes", "libreria", ["React", "Tailwind CSS"], ["Copy-paste", "Accesibilidad"], "MIT", "gratis", true),
  r("Radix UI", "radix-ui", "https://www.radix-ui.com", "Primitivos accesibles y sin estilos para React.", "Resuelve interacción, teclado y ARIA sin imponer diseño.", "componentes", "libreria", ["React"], ["Headless", "WAI-ARIA"], "MIT", "gratis", true),
  r("Base UI", "base-ui", "https://base-ui.com", "Primitivos React sin estilos y con accesibilidad.", "Alternativa moderna para sistemas de diseño propios.", "componentes", "libreria", ["React"], ["Headless", "Primitivos"], "MIT"),
  r("React Aria", "react-aria", "https://react-spectrum.adobe.com/react-aria", "Hooks y componentes accesibles de Adobe.", "Excelente para patrones complejos e internacionalización.", "componentes", "libreria", ["React"], ["Accesibilidad", "i18n"], "Apache-2.0"),
  r("Magic UI", "magic-ui", "https://magicui.design", "Bloques animados para productos y landings.", "Aporta acabados actuales sin empezar cada efecto desde cero.", "componentes", "libreria", ["React", "Tailwind CSS"], ["Marketing", "Copy-paste"], "MIT", "freemium"),
  r("React Bits", "react-bits", "https://reactbits.dev", "Componentes React creativos y animados.", "Buenas piezas de inspiración y efectos listos para adaptar.", "componentes", "libreria", ["React"], ["Creativo", "Animación"], "MIT"),
  r("GSAP", "gsap", "https://gsap.com", "Motor profesional de animación web.", "Control preciso de timelines, SVG, texto y secuencias complejas.", "animacion", "libreria", ["Agnóstico"], ["Timeline", "SVG"], "GSAP", "gratis", true),
  r("ScrollTrigger", "scrolltrigger", "https://gsap.com/docs/v3/Plugins/ScrollTrigger", "Plugin GSAP para animación vinculada al scroll.", "El estándar práctico para narrativa y pinning de alta calidad.", "animacion", "plugin", ["Agnóstico"], ["GSAP", "Scroll"], "GSAP"),
  r("SplitText", "splittext", "https://gsap.com/docs/v3/Plugins/SplitText", "Plugin GSAP para animar texto por líneas y caracteres.", "Tipografía cinética profesional con control granular.", "animacion", "plugin", ["Agnóstico"], ["GSAP", "Tipografía"], "GSAP"),
  r("MorphSVG", "morphsvg", "https://gsap.com/docs/v3/Plugins/MorphSVGPlugin", "Transformaciones fluidas entre formas SVG.", "Permite iconografía y transiciones orgánicas difíciles de lograr a mano.", "animacion", "plugin", ["Agnóstico"], ["GSAP", "SVG"], "GSAP"),
  r("Motion", "motion", "https://motion.dev", "Animación productiva para React y JavaScript.", "La opción principal para microinteracciones, layout y gestos.", "animacion", "libreria", ["React", "JavaScript"], ["Gestos", "Layout"], "MIT", "gratis", true),
  r("Lenis", "lenis", "https://lenis.darkroom.engineering", "Scroll suave accesible y ligero.", "Mejora experiencias editoriales sin reemplazar la mecánica nativa.", "animacion", "libreria", ["Agnóstico"], ["Scroll", "UX"], "MIT"),
  r("Rive", "rive", "https://rive.app", "Diseño y runtime para animación interactiva.", "Ideal para estados, onboarding y gráficos compactos.", "animacion", "plataforma", ["Web", "React"], ["Vector", "Interactivo"], "Propietaria", "freemium"),
  r("AutoAnimate", "auto-animate", "https://auto-animate.formkit.com", "Animaciones automáticas para cambios de layout.", "Añade movimiento útil con una integración mínima.", "animacion", "libreria", ["React", "Vue", "Svelte"], ["Layout", "Microinteracción"], "MIT"),
  r("CSS View Transitions API", "view-transitions-api", "https://developer.mozilla.org/docs/Web/API/View_Transition_API", "Transiciones nativas entre estados y documentos.", "Reduce JavaScript y aprovecha capacidades modernas del navegador.", "animacion", "api", ["Web"], ["CSS", "Nativo"], "Estándar web"),
  r("CSS Scroll-Driven Animations", "scroll-driven-animations", "https://developer.mozilla.org/docs/Web/CSS/CSS_scroll-driven_animations", "Animaciones CSS ligadas al progreso del scroll.", "Movimiento progresivo sin listeners ni loops de JavaScript.", "animacion", "api", ["Web"], ["CSS", "Scroll"], "Estándar web"),
  r("Three.js", "threejs", "https://threejs.org", "Motor 3D de referencia para la web.", "La base más capaz para WebGL y experiencias inmersivas.", "3d", "libreria", ["JavaScript"], ["WebGL", "3D"], "MIT", "gratis", true),
  r("React Three Fiber", "react-three-fiber", "https://r3f.docs.pmnd.rs", "Renderer React para Three.js.", "Lleva composición declarativa y el ecosistema React a escenas 3D.", "3d", "libreria", ["React"], ["Three.js", "WebGL"], "MIT"),
  r("Spline", "spline", "https://spline.design", "Editor colaborativo de diseño 3D para web.", "La vía rápida para prototipos 3D sin construir todo desde código.", "3d", "plataforma", ["Web", "React"], ["Editor", "3D"], "Propietaria", "freemium"),
  r("next/image", "next-image", "https://nextjs.org/docs/app/api-reference/components/image", "Optimización integrada de imágenes en Next.js.", "Dimensionado estable, formatos modernos y carga eficiente.", "rendimiento", "feature", ["Next.js"], ["Imágenes", "LCP"], "MIT"),
  r("next/font", "next-font", "https://nextjs.org/docs/app/getting-started/fonts", "Carga y autoalojamiento optimizado de fuentes.", "Evita solicitudes externas y reduce cambios de layout.", "rendimiento", "feature", ["Next.js"], ["Tipografía", "CLS"], "MIT"),
  r("Vercel", "vercel", "https://vercel.com", "Plataforma de despliegue optimizada para frontend.", "Preview deployments, CDN y observabilidad con configuración mínima.", "rendimiento", "plataforma", ["Next.js", "Web"], ["Deploy", "CDN"], "Propietaria", "freemium"),
  r("Core Web Vitals", "core-web-vitals", "https://web.dev/vitals", "Métricas de experiencia real: LCP, INP y CLS.", "Define objetivos medibles para que el diseño no sacrifique usabilidad.", "rendimiento", "metrica", ["Web"], ["LCP", "INP", "CLS"], "Estándar web"),
  r("prefers-reduced-motion", "prefers-reduced-motion", "https://developer.mozilla.org/docs/Web/CSS/@media/prefers-reduced-motion", "Preferencia del sistema para reducir movimiento.", "Hace que animaciones modernas sean inclusivas por defecto.", "accesibilidad", "feature", ["Web"], ["CSS", "Motion"], "Estándar web"),
  r("Lucide", "lucide", "https://lucide.dev", "Iconos SVG consistentes y personalizables.", "Cobertura amplia, peso visual coherente y buen soporte React.", "accesibilidad", "libreria", ["React", "Vue", "Svelte"], ["Iconos", "SVG"], "ISC"),
  r("Fontsource", "fontsource", "https://fontsource.org", "Fuentes open source empaquetadas para autoalojamiento.", "Controla privacidad, rendimiento y versiones tipográficas.", "accesibilidad", "libreria", ["Web"], ["Fuentes", "Privacidad"], "MIT"),
  r("Vercel Web Analytics", "vercel-analytics", "https://vercel.com/analytics", "Analítica web conectada al despliegue.", "Mide uso y rendimiento sin una integración pesada.", "seo-analitica", "plataforma", ["Next.js", "Web"], ["Analytics", "Vercel"], "Propietaria", "freemium"),
  r("Google Analytics 4", "ga4", "https://developers.google.com/analytics/devguides/collection/ga4", "Analítica avanzada y medición de campañas.", "Útil cuando marketing necesita atribución y eventos complejos.", "seo-analitica", "plataforma", ["Web"], ["Analytics", "Marketing"], "Propietaria"),
  r("JSON-LD", "json-ld", "https://json-ld.org", "Datos estructurados enlazados en JSON.", "Explica entidades y contenido a buscadores sin mezclar presentación.", "seo-analitica", "api", ["Web"], ["SEO", "Schema.org"], "Estándar web"),
  r("backdrop-filter", "backdrop-filter", "https://developer.mozilla.org/docs/Web/CSS/backdrop-filter", "Filtros detrás de superficies translúcidas.", "Base nativa para vidrio moderno con degradación controlada.", "patrones", "feature", ["Web"], ["CSS", "Blur"], "Estándar web"),
  r("Liquid Glass", "liquid-glass", "https://developer.apple.com/design/human-interface-guidelines/materials", "Dirección visual de superficies fluidas y estratificadas.", "Inspira profundidad cuando se adapta con moderación a la web.", "patrones", "patron", ["Web"], ["Material", "Vidrio"], "Patrón de diseño"),
  r("Glassmorphism", "glassmorphism", "https://www.smashingmagazine.com/2021/07/glassmorphism-css", "Paneles translúcidos con profundidad.", "Aporta capas modernas si mantiene contraste y legibilidad.", "patrones", "patron", ["Web"], ["CSS", "UI"], "Patrón de diseño"),
  r("Bento Grid", "bento-grid", "https://bentogrids.com", "Composición modular con jerarquía variable.", "Resume productos complejos con ritmo visual y buena respuesta.", "patrones", "patron", ["Web"], ["Layout", "Responsive"], "Patrón de diseño"),
  r("Mobbin", "mobbin", "https://mobbin.com", "Biblioteca de flujos reales de productos digitales.", "Permite estudiar UX completa, no solo capturas aisladas.", "patrones", "plataforma", ["Diseño"], ["Inspiración", "UX"], "Propietaria", "freemium"),
  r("Godly", "godly", "https://godly.website", "Curaduría de sitios con dirección visual actual.", "Referencia rápida para composición, tipografía y movimiento.", "patrones", "plataforma", ["Diseño"], ["Inspiración", "Web"], "Propietaria"),
]

export const categoryLabels: Record<Category, string> = {
  stack: "Stack moderno",
  componentes: "Componentes y UI",
  animacion: "Animación",
  "3d": "3D",
  rendimiento: "Rendimiento",
  accesibilidad: "Accesibilidad",
  "seo-analitica": "SEO y analítica",
  patrones: "Patrones e inspiración",
}

export function getResource(slug: string) {
  return resources.find((item) => item.slug === slug)
}

export function filterResources(filters: {
  q?: string
  category?: string
  framework?: string
  pricing?: string
}) {
  const query = filters.q?.trim().toLocaleLowerCase("es") ?? ""

  return resources.filter((item) => {
    const searchable = [
      item.name,
      item.description,
      item.reason,
      ...item.frameworks,
      ...item.tags,
    ]
      .join(" ")
      .toLocaleLowerCase("es")

    return (
      (!query || searchable.includes(query)) &&
      (!filters.category || item.category === filters.category) &&
      (!filters.framework || item.frameworks.includes(filters.framework)) &&
      (!filters.pricing || item.pricing === filters.pricing)
    )
  })
}
