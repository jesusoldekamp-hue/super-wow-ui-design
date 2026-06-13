<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Super Wow UI Design Agent Contract

Este repositorio es una base operativa para que Codex, Claude Code y otros agentes construyan sitios de producto con alta dirección visual. No es solo una lista de enlaces.

## Objetivo

Construye experiencias originales con el nivel de claridad, narrativa y detalle de los mejores sitios de producto. Puedes aprender de Apple, Linear, Stripe o sitios editoriales, pero nunca copies su marca, textos, imágenes, assets ni composición exacta.

## Antes de editar

1. Lee `docs/AI_WORKFLOW.md`, `docs/STACK.md` y `docs/QUALITY_BAR.md`.
2. Busca componentes existentes en `packages/ui` y efectos en `packages/effects`.
3. Conserva Server Components por defecto. Añade `"use client"` solo en el límite interactivo.
4. Decide primero la historia, la jerarquía y el sistema visual; después elige animaciones.
5. Para cambios web sustanciales, aplica las skills locales de calidad antes de declarar terminado el trabajo.

## Selección técnica

- UI y layout: Tailwind CSS, tokens en `packages/ui/src/styles/globals.css`, shadcn/ui y Radix.
- Interacciones, gestos y layout animation: Motion.
- Timelines, texto, SVG y narrativa de scroll: GSAP, ScrollTrigger, SplitText y MorphSVG desde `@workspace/effects`.
- Scroll suave: `LenisProvider`, únicamente en experiencias que lo justifiquen.
- 3D/WebGL: `AmbientOrb` o una escena nueva con React Three Fiber. Siempre carga dinámica y fallback DOM/CSS.
- Transiciones simples: CSS y View Transitions antes de añadir JavaScript.

No instales una segunda biblioteca para una capacidad que el repositorio ya resuelve.

## Reglas no negociables

- Respeta `prefers-reduced-motion`; el contenido y las acciones deben seguir presentes.
- Evita animar propiedades que disparen layout cuando `transform` y `opacity` resuelvan el efecto.
- Usa `next/image` para imágenes de contenido y `next/font` para tipografía.
- Mantén navegación por teclado, foco visible, contraste y HTML semántico.
- No escondas contenido crítico hasta que JavaScript se ejecute.
- Las escenas pesadas deben ser opcionales, cargadas por ruta y con DPR limitado.
- No uses imágenes de stock genéricas, gradientes arbitrarios ni glassmorphism en todas las superficies.
- No afirmes que una página está terminada hasta ejecutar `pnpm ready`.

## Skills de calidad web

El repositorio incluye las seis skills MIT de
[addyosmani/web-quality-skills](https://github.com/addyosmani/web-quality-skills)
para Claude Code y Codex:

- `web-quality-audit`: revisión integral y orquestación.
- `performance`: carga, recursos y ejecución.
- `core-web-vitals`: LCP, INP y CLS.
- `accessibility`: WCAG 2.2, teclado y tecnologías asistivas.
- `seo`: indexabilidad, metadatos, contenido y datos estructurados.
- `best-practices`: seguridad, compatibilidad y calidad técnica.

Antes de una entrega web, usa `web-quality-audit` como puerta de entrada y
aplica las skills especializadas cuando existan hallazgos. Las instrucciones
están disponibles en `.codex/skills/` y `.claude/skills/`.

## Rutas de referencia

- `/plantillas/landing`: marketing y SaaS.
- `/plantillas/dashboard`: producto y datos.
- `/plantillas/portfolio`: dirección editorial.
- `/plantillas/cinematic`: Motion + GSAP + Lenis + MorphSVG + React Three Fiber.

## Comandos

```bash
corepack pnpm install
corepack pnpm dev
corepack pnpm doctor
corepack pnpm check
corepack pnpm test:e2e
corepack pnpm ready
corepack pnpm quality:skills:update
```

Cuando recibas un brief, modifica una plantilla existente o crea una nueva ruta; no conviertas la galería principal en el proyecto del usuario.
