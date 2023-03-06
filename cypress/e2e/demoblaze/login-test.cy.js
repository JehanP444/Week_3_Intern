describe('Demoblaze app login scenario', () => {
    it('Successfully login using correct credentials', () => {
      cy.visit('https://www.demoblaze.com/index.html')
      cy.screenshot();
      
      //click link text login
      cy.get("[data-target='#logInModal']").click()
      cy.get("[onclick='logIn()']").should('be.visible')
      cy.wait(1000)
      cy.screenshot();

      // fill username and password
      cy.get("#loginusername").type('wibowo.bullseye').should('have.value','wibowo.bullseye')
      cy.get("#loginpassword").type('bullseye').should('have.value','bullseye')
      cy.screenshot();

      //click login button
      cy.get("[onclick='logIn()']").click()
      cy.screenshot();

      //assert homescreen
      cy.get('#nameofuser').should('contain', 'wibowo.bullseye')
      cy.screenshot();
      
      //choose item
      cy.get('#tbodyid > div:nth-of-type(4) .hrefch').click()
      cy.screenshot();
      //adding Samsung galaxy s7 item example
      cy.get('.btn-success').click()
      cy.wait(2000)
      cy.screenshot();
      //alert pop up
      cy.on('window:confirm',(txt)=>{
      //verify text on pop-up
      expect(txt).to.equal('Product added.');
      cy.screenshot();
      })
      //go to card page to make sure product is added

      cy.get("#cartur").click()
      //cy.contains('#tbodyid > div:nth-of-type(4) .hrefch').should('be.visible');
      cy.wait(2000)
      cy.screenshot();

      //log out

      cy.get("[onclick='logOut()']").click()
      cy.screenshot();
      cy.get('#nameofuser').should('contain', '')
      cy.wait(2000)
      cy.screenshot();
      })

})

