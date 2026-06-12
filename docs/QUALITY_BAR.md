# Barra de calidad

## Diseño

- El primer viewport comunica producto, beneficio y acción.
- La jerarquía se entiende sin animación.
- Cada sección cambia ritmo o escala con intención.
- El contenido es específico y no parece una plantilla genérica.
- Los patrones glass, bento y gradientes se usan con moderación.

## Interacción

- No hay animaciones que bloqueen lectura o navegación.
- Hover, foco, carga, vacío y error tienen tratamiento.
- `prefers-reduced-motion` conserva contenido y estado final.
- Scroll suave, pinning y WebGL se prueban con trackpad, rueda y teclado.

## Ingeniería

- Server Components por defecto.
- Imágenes con dimensiones, formatos modernos y `next/image`.
- Fuentes con `next/font`.
- No se cargan GSAP, Lenis o Three.js en rutas que no los importan.
- No hay errores de TypeScript, lint, hidratación ni consola.

## Objetivos

- Lighthouse performance >= 90.
- Accesibilidad = 100.
- SEO y buenas prácticas >= 95.
- LCP <= 2.5 s, INP <= 200 ms y CLS <= 0.1 en el percentil 75.
- Navegación completa con teclado.
- Sin overflow horizontal a 375 px.

## Auditoría del agente

Antes de entregar cambios web sustanciales:

1. Ejecuta la skill `web-quality-audit`.
2. Aplica las skills especializadas indicadas por sus hallazgos.
3. Ejecuta `corepack pnpm ready`.
4. No sustituyas mediciones reales por una afirmación del agente.
