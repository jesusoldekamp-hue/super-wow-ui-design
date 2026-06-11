# Contribuir

Buscamos calidad, no volumen. Un recurso debe estar mantenido, aportar una capacidad diferenciada y tener documentación y licencia claras.

## Proponer un recurso

1. Abre un issue con la plantilla de recurso.
2. Explica qué problema resuelve y por qué mejora la selección actual.
3. Indica URL oficial, licencia, precio y frameworks.
4. Evita recursos duplicados, abandonados o cuyo valor principal sea una colección premium cerrada.

## Desarrollo

```bash
pnpm install
pnpm catalog:validate
pnpm readme:generate
pnpm registry:generate
pnpm check
```

Edita `apps/web/lib/catalog.ts`; no modifiques manualmente las tablas generadas del README.
