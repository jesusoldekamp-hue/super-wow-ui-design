# Security Policy

## Scope

Super Wow UI Design is a public design system, gallery, and shadcn-compatible registry. The project is intended to run as a mostly static Next.js site and does not require application secrets for local development.

## Reporting A Vulnerability

If you find a security issue, report it through GitHub Security Advisories when available. If private reporting is not available, open a GitHub issue with a minimal reproduction and avoid posting real credentials, private tokens, or sensitive user data.

## Secret Handling

- Do not commit `.env`, `.env.local`, Vercel project metadata, private keys, tokens, or credentials.
- Local environment files are ignored by `.gitignore`.
- Registry blocks must not include third-party premium code, private assets, or credentials.

## Dependency Hygiene

Before publishing a release, run:

```bash
corepack pnpm audit --audit-level moderate
corepack pnpm ready
```

High or critical findings should be fixed before sharing the repository publicly.
