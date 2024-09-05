import { test, expect } from '@playwright/test'

test('deve poder cadastrar uma nova tarefa', async ({ page }) => {

    await page.goto('http://192.168.0.43:8080/')

    // mapeando elemento pela propriedade class usando expressão regular
    await page.fill('input[class*="InputNewTask"]', 'Ler um livro de JS')
})