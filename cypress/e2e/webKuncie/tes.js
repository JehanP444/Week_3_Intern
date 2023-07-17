import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

Given(/^Jehan login$/,() => {
  cy.visit('https://www.kuncie.com/premium/')

  cy.get("[class='login-header-menu btn']").click()
});