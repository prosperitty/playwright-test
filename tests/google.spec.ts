import { test, expect } from '@playwright/test'

test.describe('Hero', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.google.com/')
  })

  test.describe('Search', () => {
    test('Google Search Button', async ({ page }) => {
      const googleSearchBtn = page.getByRole('button', { name: "Google Search" })
      await expect(googleSearchBtn).toBeVisible()
      await googleSearchBtn.click()
    })

    test('Search with Query and submit', async ({ page }) => {
      const googleSearchBtn = page.getByRole('button', { name: "Google Search" })
      const searchInput = page.getByLabel('Search', { exact: true })
      await expect(googleSearchBtn).toBeVisible()
      await expect(searchInput).toBeVisible()
      await expect(searchInput).toBeEmpty()
      await searchInput.fill('google')
      await expect(searchInput).toHaveValue('google')
      await page.keyboard.press('Enter')
      await expect(page.getByRole('link', { name: 'Advertising' })).not.toBeVisible()
      await expect(googleSearchBtn).not.toBeVisible()
      await expect(page.getByRole('combobox', { name: 'Search' })).toBeVisible()
      console.log('naviagtion has gone to:', page.url())
    })
  })
})

test.describe('Footer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.google.com/')
  })

  test('Advertising Link', async ({ page }) => {
    const advertisingLink = page.getByRole('link', { name: 'Advertising' })
    await expect(advertisingLink).toContainText('Advertising')
    await expect(advertisingLink).toBeVisible()
    await advertisingLink.click()
    await expect(page.locator('#main-page-content').getByLabel('Start now')).toBeVisible()
    await expect(advertisingLink).not.toBeVisible()
    await expect(page.getByRole('heading', { name: 'Google Ads gives you many ways to be seen with Performance Max' })).toBeVisible()
    console.log('navigation has gone to:', page.url())
    const offerCheckbox = page.locator('#main-page-content').getByLabel('Start now')
    await expect(offerCheckbox).toBeVisible()
  })

  test('Business Link', async ({ page }) => {
    const businessLink = page.getByRole('link', { name: 'Business' })
    expect(businessLink).toBeDefined()
    await expect(businessLink).toContainText('Business')
    await expect(businessLink).toBeVisible()
    await businessLink.click()
    await expect(businessLink).not.toBeVisible()

    console.log('navigation has gone to:', page.url())
    const headingBusiness = page.getByRole('heading', { name: 'Succeed online with help from Google' })
    await expect(headingBusiness).toBeVisible()
    expect(headingBusiness).toBeDefined()

  })
})