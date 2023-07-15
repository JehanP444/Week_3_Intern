require('dotenv').config()
describe('Kuncie Premium login scenario', () => {
    it('Successfully login using correct credentials', () => {
      cy.visit('https://www.https://www.kuncie.com/premium/')
      cy.screenshot();
      
      //click link text login
      cy.get("//a[.='Masuk']").click()
      //cy.get("[onclick='logIn()']").should('be.visible')
      cy.wait(1000)
      cy.screenshot();//input[@id='elumine_login_username']

      // fill username and password
      cy.get("#elumine_login_username").type(process.env.username).should('have.value','jehanpratama911@gmail.com')
      cy.get("#elumine_login_password").type(process.env.password)
      cy.screenshot();

      //click login button
      cy.get("#elumine_login_submit").click()
      cy.screenshot();

      //choose item
      cy.get(`.menu-item-78713 > [href='https://www.kuncie.com/premium/kategori-kelas/bisnis/']`).click()
      cy.screenshot();
      //adding classes item example
      cy.get(`.course-button[href='https://www.kuncie.com/premium/kelas/sukses-berbisinis-e-commerce/']`).click()
      cy.wait(2000)
      cy.screenshot();
      //move page to
      cy.get(`#btn-join`).click()
      //go to card page to make sure product is added

      cy.wait(2000)
      cy.screenshot();

      //back to main page
      cy.get(`.elumine-site-logo [alt='Dark site-logo']`).click()

      //log out

      // cy.get("[onclick='logOut()']").click()
      // cy.screenshot();
      // cy.get('#nameofuser').should('contain', '')
      // cy.wait(2000)
      // cy.screenshot();
      })

})