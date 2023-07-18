import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";
import { when } from "cypress/types/jquery";

Given(/^Jehan login$/,() => {
  cy.visit('https://www.kuncie.com/premium/')

  cy.get("[class='login-header-menu btn']").click()

  cy.get("[class='login-username']").type('jehanpratama911@gmail.com')
  cy.get("[class='login-password']").type('Anaknusa404')

  cy.get("[class='login-submit']").click()
  cy.wait(5000)
});

When(/^Jehan melihat kelas yang tersedia$/, () => {
  cy.get("[data-id='a6ac833']").click()
  cy.wait(3000)
});

When(/^Jehan memilih kelas$/, () => { 
  cy.get("[class='course-button medium-btn']").eq(1).click()
});