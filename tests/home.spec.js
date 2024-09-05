import {test, expect} from '@playwright/test'

// declaração assincrona para usar o await
test('webapp deve estar online', async ({page}) => {
    await page.goto('http://192.168.0.43:8080/')

    // validando titulo
    await expect(page).toHaveTitle('Gerencie suas tarefas com Mark L')
})

