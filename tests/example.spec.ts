import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  //await page.goto('https://playwright.dev/');
  await page.goto('localhost:3000/');

  // Expect a title "to contain" a substring.
  // nextjsのデフォルトページのタイトルをテストする
  await expect(page).toHaveTitle(/Create Next App Test/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
