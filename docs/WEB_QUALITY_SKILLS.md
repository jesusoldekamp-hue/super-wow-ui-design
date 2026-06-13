# Web Quality Skills

Super Wow UI Design incluye seis Agent Skills de
[Addy Osmani](https://github.com/addyosmani/web-quality-skills) bajo licencia
MIT. Están fijadas al commit
`7b59d48aaf1f793935002f4998dfccc656f40839`.

## Skills incluidas

| Skill | Uso |
| --- | --- |
| `web-quality-audit` | Auditoría integral y priorización de hallazgos. |
| `performance` | Red de carga, JavaScript, CSS, imágenes, fuentes y caché. |
| `core-web-vitals` | LCP, INP y CLS. |
| `accessibility` | WCAG 2.2, semántica, teclado, contraste y lectores de pantalla. |
| `seo` | Crawlability, metadatos, contenido, sitemap y JSON-LD. |
| `best-practices` | Seguridad, APIs modernas, compatibilidad y consola. |

## Ubicación

- Codex: `.codex/skills/<skill>/SKILL.md`
- Claude Code: `.claude/skills/<skill>/SKILL.md`

Las dos copias deben permanecer idénticas. `corepack pnpm doctor` verifica esa
condición.

## Flujo recomendado

1. Construye usando `modern-ui`.
2. Ejecuta `web-quality-audit`.
3. Aplica únicamente las skills especializadas relacionadas con hallazgos.
4. Corrige los problemas reproducibles.
5. Ejecuta `corepack pnpm ready`.

## Actualización

Para sincronizar la versión más reciente desde el repositorio original:

```bash
corepack pnpm quality:skills:update
```

Puedes fijar otra referencia:

```bash
WEB_QUALITY_SKILLS_REF=<commit-o-tag> corepack pnpm quality:skills:update
```

El script actualiza ambas carpetas, la licencia y
`third_party/web-quality-skills/source.json`.

Estas skills son una colección no oficial basada en Lighthouse, Core Web
Vitals, WCAG y prácticas modernas. No son un sustituto de mediciones reales ni
un producto oficial de Google.
