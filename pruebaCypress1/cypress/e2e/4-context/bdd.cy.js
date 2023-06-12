/// <reference types="cypress" />

const url = 'https://cursos.trainingit.es/';

describe(`GIVEN: the url ${url}`, () => { 
    context (`WHEN: I visit it`, ()=>{
        before(()=> cy.visit(url));
        const expected = 'formación';
        it(`THEN: should have _${expected}_ on this title`, ()=>{
            cy.title().should('include', expected)
        })
    })
 })