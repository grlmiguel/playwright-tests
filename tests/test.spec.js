import { test } from "@playwright/test";

const juegoId = "f2bd059c-a644-4654-96d1-40c997";

for (let i = 1; i <= 50; i++) {
  test(`Test simultáneo #${i}`, async ({ page }) => {
    await page.goto(`https://app.xploragames.com/game/${juegoId}`, {
      waitUntil: "networkidle",
    });

    await page.setViewportSize({ width: 1936, height: 1056 });

    await page.waitForSelector(
      "xpath=//button[contains(@class, 'btn-siguiente')]"
    );
    await page.click("xpath=//button[contains(@class, 'btn-siguiente')]");

    await page.locator("label.group").nth(1).locator("span").nth(1).click();

    await page.click("xpath=//button[contains(@class, 'btn-guardar-captura')]");

    await page.waitForTimeout(5000);
  });
}
