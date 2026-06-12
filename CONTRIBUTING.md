# Contribuir a Awesome Modern UI

Buscamos calidad, no volumen. Un recurso debe estar mantenido, aportar una capacidad diferenciada y tener documentación, licencia y precio claros.

La regla principal: si no ayuda a construir interfaces web o apps más modernas, no entra.

## Proponer un recurso

1. Abre un issue con la plantilla de recurso.
2. Explica qué problema resuelve y por qué mejora la selección actual.
3. Indica URL oficial, licencia, precio y frameworks.
4. Evita recursos duplicados, abandonados o cuyo valor principal sea una colección premium cerrada.

## Criterios de entrada

- Debe tener documentación pública y señales de mantenimiento activo.
- Debe aportar algo distinto frente a los recursos existentes.
- Debe ser útil para UI, motion, 3D, performance, accesibilidad, SEO o patrones visuales.
- Debe respetar licencias compatibles con un catálogo público.

## Desarrollo

```bash
corepack enable
pnpm install
pnpm resources:images
pnpm catalog:validate
pnpm readme:generate
pnpm registry:generate
pnpm check
```

Edita `apps/web/lib/catalog.ts`; no modifiques manualmente las tablas generadas del README.
