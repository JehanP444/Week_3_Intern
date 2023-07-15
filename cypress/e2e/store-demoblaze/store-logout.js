import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

Given(/^John selesai melakukan pencarian di website demoblaze$/,() => {
    cy.visit('https://www.demoblaze.com');

          //click link text login
    cy.get("[data-target='#logInModal']").click()
    cy.get("[onclick='logIn()']").should('be.visible')
    cy.wait(1000)
    //cy.screenshot();
    
          // fill username and password
    cy.get("#loginusername").type('wibowo.bullseye').should('have.value','wibowo.bullseye')
    cy.get("#loginpassword").type('bullseye').should('have.value','bullseye')
    //cy.screenshot();
    
          //click login button
    cy.get("[onclick='logIn()']").click()
    //cy.screenshot();
    
          //assert homescreen
    cy.get('#nameofuser').should('contain', 'wibowo.bullseye')
    //cy.screenshot();
});
When(/^John lalu memilih menu logout$/, () => {
    cy.get("[onclick='logOut()']").click()
    //cy.screenshot();
});
Then(/^akun John terlogout dari demoblaze$/, () => {
    cy.get('#nameofuser').should('contain', '')
    cy.wait(2000)
    //cy.screenshot();
});
