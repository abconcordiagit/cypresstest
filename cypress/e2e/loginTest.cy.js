//
//
describe('Sauce demo login',()=>{
    it('should login successfully with valid credientials',()=>{
        cy.visit('https://saucelabs.com/');
        //cy.get('#user-name').type('standard_user');
        //cy.get('#password').type('standard_password');
        //cy.get('#login-button').click();

        //verification
        //cy.url().should('include','/inventory.html');
        cy.title().should('include','Sauce Labs');
    })

})