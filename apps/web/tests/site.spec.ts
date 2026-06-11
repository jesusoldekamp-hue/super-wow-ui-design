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

test("abre las tres plantillas", async ({ page }) => {
  for (const slug of ["landing", "dashboard", "portfolio"]) {
    await page.goto(`/plantillas/${slug}`)
    await expect(page.getByRole("heading", { name: slug, exact: true })).toBeVisible()
  }
})

test("respeta reducción de movimiento", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" })
  const page = await context.newPage()
  await page.goto("/")
  await expect(page.getByRole("heading", { name: "Diseña a la velocidad de tus ideas." })).toBeVisible()
  await context.close()
})
