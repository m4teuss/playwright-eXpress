import { test, expect } from '@playwright/test'

test('deve poder cadastrar uma nova tarefa', async ({ page }) => {

    await page.goto('http://192.168.0.43:8080/')

    // definição de um objeto 
    const InputNewTask = page.locator('input[class*="InputNewTask"]')
    await InputNewTask.fill('Ler um livro em JS')
    await page.click('css=button >> text=Create')


})