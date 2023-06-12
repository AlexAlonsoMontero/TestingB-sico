/// <reference types ="Cypress" />

describe('Visiting the url https://cursos.trainingit.es/',()=>{
    it('should have _bitAdemy_ on its title', ()=>{
        cy.visit('https://cursos.trainingit.es/');
        cy.title().should('include', 'formación');
    })
})