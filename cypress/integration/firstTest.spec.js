describe('React app', function () {
    it('success case', function () {
        cy.visit('/');
        cy.title().should('eq', 'React App');
        cy.get('button').click();
        cy.get('[data-testid="text-input-input-1"]').should('be.visible');
        cy.get('[data-testid="text-input-input-1"]').type('text 1 test data');
        cy.get('input[data-testid="text-input-input-3"]').type('text 3 test data')
        cy.get('input[value=""]').type('text 2 success data');
        cy.get('select[data-testid="select-input"]').select('coconut');
        cy.get('input[data-testid="checkbox-input"]').check();
        cy.get('button').click();




    })
})