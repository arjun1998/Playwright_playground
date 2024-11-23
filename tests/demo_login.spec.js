import { test, expect } from '@playwright/test'

test('Login test', async({page}) => {
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.getByPlaceholder('Enter your username').fill('Arj');
    await page.getByPlaceholder('Enter your password').fill('Arj');

    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.locator('text=ACME').isVisible();
})