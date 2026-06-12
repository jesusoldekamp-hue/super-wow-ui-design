import { resources } from "../lib/catalog"

type LinkTarget = {
  label: string
  url: string
}

type LinkResult =
  | {
      target: LinkTarget
      status: "ok" | "warn"
      statusCode: number
      finalUrl: string
      message?: string
    }
  | {
      target: LinkTarget
      status: "fail"
      message: string
    }

const timeoutMs = Number(process.env.LINK_CHECK_TIMEOUT_MS ?? 10_000)
const concurrency = Number(process.env.LINK_CHECK_CONCURRENCY ?? 6)
const warnOnlyStatuses = new Set([401, 403, 429])

const targets = Array.from(
  new Map(resources.map((resource) => [resource.url, { label: resource.name, url: resource.url }])).values()
).sort((a, b) => a.label.localeCompare(b.label, "es"))

async function checkLink(target: LinkTarget): Promise<LinkResult> {
  try {
    const response = await fetch(target.url, {
      redirect: "follow",
      signal: AbortSignal.timeout(timeoutMs),
      headers: {
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "user-agent":
          "AwesomeModernUI-LinkChecker/1.0 (+https://github.com/jesusoldekamp-hue/awesome-modern-ui)",
      },
    })

    if (response.status < 400) {
      return {
        target,
        status: "ok",
        statusCode: response.status,
        finalUrl: response.url,
      }
    }

    if (warnOnlyStatuses.has(response.status)) {
      return {
        target,
        status: "warn",
        statusCode: response.status,
        finalUrl: response.url,
        message: "El servidor bloqueó o limitó la verificación automática.",
      }
    }

    return {
      target,
      status: "fail",
      message: `HTTP ${response.status} en ${response.url}`,
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    return {
      target,
      status: "fail",
      message,
    }
  }
}

async function mapWithConcurrency<T, R>(
  items: T[],
  limit: number,
  mapper: (item: T) => Promise<R>
) {
  const results: R[] = []
  let index = 0

  async function worker() {
    while (index < items.length) {
      const current = items[index]
      index += 1
      if (current) results.push(await mapper(current))
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker))
  return results
}

const results = await mapWithConcurrency(targets, concurrency, checkLink)
const failures = results.filter((result) => result.status === "fail")
const warnings = results.filter((result) => result.status === "warn")

for (const result of results) {
  if (result.status === "ok") {
    console.log(`ok   ${result.target.label} -> ${result.statusCode}`)
    continue
  }

  if (result.status === "warn") {
    console.warn(`warn ${result.target.label} -> ${result.statusCode}: ${result.message}`)
    continue
  }

  console.error(`fail ${result.target.label}: ${result.message}`)
}

if (failures.length > 0) {
  throw new Error(`Link check falló: ${failures.length} enlace(s) roto(s).`)
}

console.log(
  `Link check válido: ${results.length} enlaces, ${warnings.length} warning(s), ${failures.length} fallos.`
)
