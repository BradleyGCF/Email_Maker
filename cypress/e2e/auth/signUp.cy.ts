/// <reference types="cypress" />
describe('conjunto de pruebas Registrarse', () => {
  it('validar registro', () => {
    cy.visit('http://localhost:3000/sign-up')
    cy.get('.text-5xl').should('be.visible').contains('LOGO')
    cy.get('.text-xl').should('be.visible').contains('Crear cuenta')
    cy.get(':nth-child(1) > span').should('be.visible').contains('Nombre y Apellido')
    cy.get('.gap-4 > :nth-child(1) > span').should('be.visible').type('Nombre y Apellido')
    cy.get(':nth-child(2) > span').should('be.visible').contains('Correo')
    cy.get('input[name="email"]').should('be.visible').type('email@gmail.com')
    cy.get(':nth-child(4) > span').should('be.visible').contains('Contraseña')
    cy.get('input[name="password"]').should('be.visible').type('Prueba123@')
  })
})
