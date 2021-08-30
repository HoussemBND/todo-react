/// <reference types="cypress" />

// Welcome to Cypress!


describe('example to-do app', () => {
  beforeEach(() => {
    
    cy.visit('http://localhost:3000/')
  })

  it('Add new item', () => {
    cy.percySnapshot("before")
    cy.get('#new-todo-input').type("Groceries")
    cy.get(".btn__lg").click()
    cy.percySnapshot("After")

  })


  
})
