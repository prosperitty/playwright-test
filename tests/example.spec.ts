import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  // page.waitForURL('https://github.com/microsoft/playwright')
  console.log('naviagtion has gone to:', page.url())

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test.describe('Navigation links', () => {
  test.beforeEach(async ({ page }) => {
    // Before each test, go to the playwright homepage
    await page.goto('https://playwright.dev/')
  })

  test('API nav link', async ({ page }) => {
    // await page.click('a.navbar__item navbar__link')
    await page.getByRole('link', { name: 'API' }).click()
    console.log('naviagtion has gone to:', page.url())

    await expect(page.getByRole('heading', { name: 'Playwright Library' })).toBeVisible();
  })

  test('Community nav link', async ({ page }) => {
    // await page.click('a.navbar__item navbar__link')
    await page.getByRole('link', { name: 'Community' }).click()
    console.log('naviagtion has gone to:', page.url())

    await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
  })
})