const credentials = require('../../fixtures/example.json')
/// <reference types="cypress" />
describe('Associate terminal', function(){
           
   beforeEach(() => {
      
       fillURL();
       fillEmail();
        fillPassword();
     clickSubmit();
     cy.wait(5000);
     });
           it('side menu botton close', function(){   
            cy.get('.trigger').should('be.visible')  
            cy.wait(200);
            cy.get('[id="/jobs"]').should('be.visible').should('have.text', 'Jobs').invoke('css', 'color').should('eq', 'rgb(22, 119, 255)'); 
           cy.wait(200);
     
         });
         it('open job form  ', function(){
          cy.wait(5000);
                 cy.get('#Add_Button').click({force: true})
            
            })
 
  //  });
      
      
  


        // Access individual properties
        const url = credentials.url;
        const url2 = credentials.url;
        const username = credentials.login_email;
        const password = credentials.login_password;
        
        function fillURL() {
            // Function body
            cy.wait(200);
            cy.visit(url);
          cy.url().should('include', 'dashboard/login')
            return this
          }
          function fillURL2() {
            // Function body
            cy.wait(200);
            cy.visit(url2);
          cy.url().should('include', 'dashboard/login')
            return this
          }
         

    function fillEmail() {
        //login form text 
       cy.get('._heading_1krgq_24').should('have.text', 'Login Form').should('be.visible')
        cy.wait(200);
       //username
        cy.get('.ant-btn').should('be.visible')
        cy.wait(200);
        cy.get('#normal_login_username').should('be.visible').should('be.empty').should('have.attr', 'placeholder', 'Username').type(username);
        return this
      }
      function fillPassword(){
        
        cy.get('#normal_login_password').should('be.visible').should('be.empty').should('have.attr', 'placeholder', 'Password').type(password);
       // .should('be.visible').should('be.empty').should('have.attr', 'placeholder', 'Password')
        cy.wait(200);
     cy.get('.ant-input-prefix').should('be.visible')
    cy.wait(200);
   cy.get('.ant-input-suffix').should('be.visible')
     cy.wait(200);
        return this
    }
    function clickSubmit(){
      cy.get('.ant-btn').click()
   // .should('be.enabled').should('be.visible')
        //         // button.click()
        //         // cy.screenshot()
        //         return this
        //         // cy.contains('Invalid Login').should('not.exist')
           // cy.url.should('eq', 'http://172.104.180.223:4002/#/dashboard')
         }
        
    
    

});

//export default LoginPage;
