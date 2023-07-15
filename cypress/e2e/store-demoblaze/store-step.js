import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

Given(/^Ali view samsung Galaxy S6 phone information detail$/,() => {
    cy.visit('https://www.demoblaze.com');
    cy.get('a.hrefch').contains('Samsung galaxy s6').click();
    cy.wait(1000);
    cy.get('h2.name').should('contain','Samsung galaxy s6');
});

When(/^Ali likes it, He add the phone to the cart$/, () => {
    cy.get('a.btn.btn-success.btn-lg').click()
    cy.get('.btn-success').click()
    cy.wait(1000)
    cy.on("window:alert", (text) => {
        expect(text).to.contains("Product added");
});
});


Then(/^He can see the goods in the cart$/, () => {
    cy.get('a.nav-link').contains('Cart').click()
    cy.get('tbody#tbodyid').children('.success').children()
        .next('td').should('contain', 'Samsung galaxy s6')
    //cy.get('h3#totalp').should('contain', '360')
});

