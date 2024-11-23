import { test, expect } from '@playwright/test'

test('Assertions', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
    if (await page.getByRole('heading', { name: 'The Kitchen' })) {
        await page.locator('text = The Kitchen').click()
    }

    //Check element Visible / Hidden
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()
    //Check element  Enabled/Disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()
    
})