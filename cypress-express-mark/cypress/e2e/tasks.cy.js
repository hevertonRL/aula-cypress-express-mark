/// <reference types="cypress" />
describe('tarefas', () => {


    it('displays two todo items by default', () => {

        cy.request({
            url:'http://localhost:3333/helper/tasks' , 
            method: 'DELETE', 
            body:{
                name: 'Ler Livro de Cypress.js'
            } 
        }).then(response => {
            expect(response.status).to.eq(204)
        })

        cy.visit('http://localhost:8080/')

        cy.get('#newTask').type('Ler Livro de Cypress.js')

        cy.contains('button', 'Create').click()
    })
})