Audita la implementación web actual antes de entregarla.

Entrada opcional del usuario: `$ARGUMENTS`

1. Usa `web-quality-audit` para revisar el alcance completo.
2. Usa las skills `performance`, `core-web-vitals`, `accessibility`, `seo` y
   `best-practices` donde corresponda.
3. Prioriza problemas medibles o reproducibles; no hagas refactors cosméticos.
4. Corrige los hallazgos críticos y altos que estén dentro del alcance.
5. Comprueba escritorio, móvil, teclado y `prefers-reduced-motion`.
6. Ejecuta `corepack pnpm ready`.
7. Reporta métricas, correcciones y riesgos restantes.
