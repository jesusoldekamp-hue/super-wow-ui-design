import { expect, test } from "@playwright/test"

test("navega por la experiencia principal", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { name: "Diseña a la velocidad de tus ideas." })).toBeVisible()
  await page.getByRole("link", { name: /Ver los 40 recursos/ }).click()
  await expect(page).toHaveURL(/\/recursos/)
  await page.getByLabel("Buscar recursos").fill("Motion")
  await expect(page).toHaveURL(/q=Motion/)
  await expect(page.getByRole("link", { name: "Motion" }).first()).toBeVisible()
})

test("el marco del navbar refleja el progreso de scroll", async ({ page }) => {
  await page.goto("/")
  const progress = page.getByTestId("nav-scroll-progress")

  const initialOffset = await progress.evaluate((element) =>
    Number.parseFloat(getComputedStyle(element).strokeDashoffset),
  )

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
    .toBeLessThan(initialOffset)
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
