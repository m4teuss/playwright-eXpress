import {test, expect} from '@playwright/test'

test('deve poder cadastrar uma nova tarefa', async ({page}) => {

   await page.goto('http://192.168.0.43:8080/')
  
   // elemento via id (#id)
   await page.fill('#newTask', 'Ler um livro de JS')

})