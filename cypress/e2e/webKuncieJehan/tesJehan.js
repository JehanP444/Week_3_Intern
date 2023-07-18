import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

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
  cy.get("[data-type='free']").click()
  cy.wait(5000)
  cy.get("[href='https://www.kuncie.com/premium/kelas/tingkatkan-profit-dengan-mengelola-keuangan-bisnismu/']").click()
  cy.wait(4000)
});