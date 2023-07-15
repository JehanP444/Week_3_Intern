import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";


Given(/^Budi memilih smartphone$/, () => {
	cy.visit('https://www.demoblaze.com');
  cy.get('a.hrefch').contains('Samsung galaxy s7').click();
  cy.wait(1000);
  cy.get('h2.name').should('contain','Samsung galaxy s7');
      
});


When(/^Budi memasukan smartphone ke cart$/, () => {
  cy.get('a.btn.btn-success.btn-lg').click()
  cy.get('.btn-success').click()
  cy.wait(1000)
  cy.on("window:alert", (text) => {
      expect(text).to.contains("Product added");
    });
});

When(/^lalu Budi memastikan barang yang di beli$/, () => {
	cy.get('a.nav-link').contains('Cart').click()
  cy.get('tbody#tbodyid').children('.success').children()
        .next('td').should('contain', 'Samsung galaxy s7')
//cy.get('h3#totalp').should('contain', '800')
});


When(/^memasukan data untuk melakukan pembelian Mobile$/, () => {
	cy.get('.btn-success').click()
  cy.get('#name.form-control').type('Budi')
  cy.get('#country.form-control').type('Indonesia')
  cy.get('#city.form-control').type('sumedang')
  cy.get('#card.form-control').type('IE3331234')
  cy.get('#month.form-control').type('January')
  cy.get('#year.form-control').type('1997')
	cy.get("[onclick='purchaseOrder()']").click()

});


Then(/^Budi selesai melakukan pembelian$/, () => {
	return true;
});
