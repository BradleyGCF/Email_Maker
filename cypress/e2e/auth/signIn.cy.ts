describe('conjunto de pruebas iniciar sesión', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/log-in')
  })

  it('validar ruta', () => {
    cy.get('.text-5xl').should('be.visible').contains('LOGO')
    cy.get('.text-xl').should('be.visible').contains('Iniciar sesión')
    cy.get('.gap-4 > :nth-child(1) > span').should('be.visible').contains('Correo')
    cy.get('input[name="email"]').should('be.visible').type('email@gmail.com')
    cy.get(':nth-child(2) > span').should('be.visible').contains('Password')
    cy.get('input[name="password"]').should('be.visible').type('Prueba123@')
    cy.get('.underline').should('be.visible').contains('Crear cuenta')
    cy.get('.inline-flex').should('be.visible').contains('Ingresar').click()
  })
})
