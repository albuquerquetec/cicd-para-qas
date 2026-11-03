const { test, expect } = require('@playwright/test');

test('a pagina de exemplo abre @smoke', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example DDomain/);
});
