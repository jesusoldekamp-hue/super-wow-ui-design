export const guides = [
  {
    slug: "animacion-moderna",
    title: "Animación moderna sin sacrificar accesibilidad",
    description: "Cómo elegir entre Motion, GSAP, CSS y scroll nativo.",
    sections: [
      ["Empieza por CSS", "Usa transiciones y Scroll-Driven Animations cuando el efecto sea simple. El navegador puede optimizarlas sin ejecutar lógica por cada frame."],
      ["Motion para producto", "Motion es la opción principal para estados, gestos y cambios de layout en React. Mantén los componentes cliente en las hojas del árbol."],
      ["GSAP para dirección creativa", "Usa GSAP, ScrollTrigger, SplitText y MorphSVG cuando una timeline compleja o una narrativa precisa justifiquen el peso adicional."],
      ["Reducción de movimiento", "Toda animación debe tener una salida mediante prefers-reduced-motion. Conserva el cambio de estado, pero elimina desplazamientos y escalas innecesarias."],
    ],
  },
  {
    slug: "rendimiento-nextjs",
    title: "Imágenes, fuentes y Core Web Vitals en Next.js",
    description: "Una base práctica para LCP, INP y CLS saludables.",
    sections: [
      ["Estabilidad visual", "Define dimensiones de medios, reserva espacio y usa next/image para evitar saltos de layout."],
      ["Fuentes propias", "Carga tipografías mediante next/font o Fontsource. Limita pesos y subconjuntos para no bloquear el primer render."],
      ["JavaScript con intención", "Mantén Server Components por defecto y carga Three.js, GSAP o Rive solo en rutas que realmente los necesitan."],
      ["Mide usuarios reales", "Combina Lighthouse en CI con Speed Insights y datos reales. Optimiza el percentil 75, no solo tu laptop."],
    ],
  },
  {
    slug: "sistema-diseno",
    title: "Elegir y escalar un sistema de UI moderno",
    description: "shadcn/ui, Radix y tokens sin convertir el proyecto en una mezcla.",
    sections: [
      ["Una sola base", "Elige primitives accesibles y una capa visual principal. No mezcles cinco bibliotecas completas en la misma aplicación."],
      ["Tokens semánticos", "Nombra colores por función, no por tonalidad. background, foreground, muted y destructive sobreviven mejor a cambios de marca."],
      ["Bloques, no páginas rígidas", "Compón heroes, tablas y formularios como piezas con contratos claros. Las plantillas deben demostrar ensamblaje, no crear dependencias ocultas."],
      ["Curación continua", "Elimina recursos abandonados, registra licencias y revisa enlaces. Una lista pequeña y mantenida gana a un directorio enorme."],
    ],
  },
] as const

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug)
}
