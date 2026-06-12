Construye una experiencia web completa usando este repositorio.

Entrada del usuario: `$ARGUMENTS`

Proceso obligatorio:

1. Lee `AGENTS.md`, `docs/AI_WORKFLOW.md`, `docs/STACK.md` y `docs/QUALITY_BAR.md`.
2. Inspecciona `/plantillas/landing`, `/plantillas/dashboard`, `/plantillas/portfolio` y `/plantillas/cinematic`; elige la base más cercana.
3. Resume el brief y define una dirección visual original antes de editar.
4. Implementa todas las secciones necesarias con contenido específico, estados responsive y navegación funcional.
5. Usa componentes de `@workspace/ui` y efectos de `@workspace/effects`; no instales alternativas duplicadas.
6. Añade movimiento solo donde mejore jerarquía, continuidad o explicación.
7. Verifica teclado, contraste, `prefers-reduced-motion`, móvil y ausencia de overflow.
8. Aplica la skill `web-quality-audit` y corrige los hallazgos relevantes con
   `performance`, `core-web-vitals`, `accessibility`, `seo` o `best-practices`.
9. Ejecuta `corepack pnpm ready`. No termines con errores conocidos.

Entrega al usuario un resumen breve de archivos, decisiones visuales y resultados de verificación.
