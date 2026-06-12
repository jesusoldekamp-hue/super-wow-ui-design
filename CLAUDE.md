# Awesome Modern UI para Claude Code

Lee y sigue primero `AGENTS.md`. Después consulta:

- `docs/AI_WORKFLOW.md`: proceso desde brief hasta verificación.
- `docs/STACK.md`: capacidades instaladas e imports correctos.
- `docs/QUALITY_BAR.md`: criterios visuales, accesibilidad y rendimiento.
- `docs/WEB_QUALITY_SKILLS.md`: auditorías instaladas de Addy Osmani.
- `/plantillas/cinematic`: referencia ejecutable de una experiencia premium.

## Al recibir una petición de sitio

1. Convierte la petición en un brief concreto: audiencia, objetivo, mensaje, secciones, tono visual, contenido y CTA.
2. Elige la plantilla más cercana y conserva los paquetes compartidos.
3. Propón una dirección visual original en 3-5 principios, no una copia de otra web.
4. Implementa la experiencia completa y responsiva.
5. Usa Motion como motor habitual; reserva GSAP/Three.js para momentos que aporten narrativa.
6. Aplica `web-quality-audit` y las skills especializadas relevantes.
7. Ejecuta `corepack pnpm ready` y corrige cualquier fallo.

Los comandos `/create-modern-site` y `/audit-web-quality` contienen los flujos reutilizables.
