const{hello, hello_world} = require('./demo/helo')

hello_world();

const{test, expect} = require('@playwright/test')

test('first test', async ({page}) => {
await page.goto('https://google.com')
await expect(page).toHaveTitle('Google')
})

test('second test', async ({page}) => {
    await page.goto('https://youtube.com')
    await expect(page).toHaveTitle('YouTube')
})