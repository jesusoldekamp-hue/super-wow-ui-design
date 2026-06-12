import { expect, test } from "@playwright/test"

test("navega por la experiencia principal", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { name: "Diseña a la velocidad de tus ideas." })).toBeVisible()
  await page.getByRole("link", { name: /Ver los 41 recursos/ }).click()
  await expect(page).toHaveURL(/\/recursos/)
  await page.getByLabel("Buscar recursos").fill("Motion")
  await expect(page).toHaveURL(/q=Motion/)
  await expect(page.getByRole("link", { name: "Motion" }).first()).toBeVisible()
})

test("el marco del navbar refleja el progreso de scroll", async ({ page }) => {
  await page.goto("/")
  await page.evaluate(() => window.scrollTo(0, 0))

  const progress = page.getByTestId("nav-scroll-progress")

  await expect
    .poll(() =>
      progress.evaluate((element) =>
        Number.parseFloat(getComputedStyle(element).strokeDashoffset),
      ),
    )
    .toBeGreaterThan(0.99)

  const alignment = await progress.evaluate((element) => {
    if (!(element instanceof SVGPathElement)) return null

    const outline = element.ownerSVGElement
    const shell = outline?.parentElement
    if (!outline || !shell) return null

    const shellBox = shell.getBoundingClientRect()
    const outlineBox = outline.getBoundingClientRect()
    const start = element.getPointAtLength(0)
    const afterStart = element.getPointAtLength(element.getTotalLength() * 0.02)
    const end = element.getPointAtLength(element.getTotalLength())

    return {
      outline: {
        x: outlineBox.x - shellBox.x,
        y: outlineBox.y - shellBox.y,
        width: outlineBox.width - shellBox.width,
        height: outlineBox.height - shellBox.height,
      },
      start: { x: start.x, y: start.y },
      afterStart: { movesRight: afterStart.x > start.x, y: afterStart.y },
      end: { x: end.x, y: end.y },
    }
  })

  expect(alignment).toEqual({
    outline: { x: 0, y: 0, width: 0, height: 0 },
    start: { x: 42, y: 1 },
    afterStart: { movesRight: true, y: 1 },
    end: { x: 42, y: 1 },
  })

  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = "auto"
    window.scrollTo(0, document.documentElement.scrollHeight)
  })

  await expect
    .poll(() =>
      progress.evaluate((element) =>
        Number.parseFloat(getComputedStyle(element).strokeDashoffset),
      ),
    )
    .toBeLessThan(0.01)
})

test("abre las cuatro plantillas", async ({ page }) => {
  const templates = {
    landing: "No lances una página. Lanza una señal.",
    dashboard: "Controla el sistema. No persigas los datos.",
    portfolio: "Trabajo que deja una impresión.",
    cinematic: "Construye lo que todavía no existe.",
  }

  for (const [slug, heading] of Object.entries(templates)) {
    await page.goto(`/plantillas/${slug}`)
    await expect(page.getByRole("heading", { name: slug, exact: true })).toBeVisible()
    await expect(page.getByRole("heading", { name: heading })).toBeVisible()
  }
})

test("renderiza la experiencia cinematográfica completa", async ({ page }, testInfo) => {
  const runtimeErrors: string[] = []
  page.on("console", (message) => {
    if (message.type() === "error") runtimeErrors.push(message.text())
  })

  await page.goto("/plantillas/cinematic")

  await expect(page.getByRole("heading", { name: "Construye lo que todavía no existe." })).toBeVisible()
  await expect(page.getByTestId("ambient-orb")).toBeVisible()
  if (testInfo.project.name === "chromium") {
    await expect(page.locator("canvas")).toBeVisible()
  }
  await expect(page.getByText("Una idea fuerte antes que cien efectos.")).toBeVisible()

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  )

  expect(hasHorizontalOverflow).toBe(false)
  expect(runtimeErrors).toEqual([])
})

test("respeta reducción de movimiento", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" })
  const page = await context.newPage()
  await page.goto("/plantillas/cinematic")
  await expect(page.getByRole("heading", { name: "Construye lo que todavía no existe." })).toBeVisible()
  await expect(page.getByText("3D progresivo, nunca obligatorio.")).toBeVisible()
  await context.close()
})
