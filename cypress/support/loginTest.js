/// <reference types="cypress" /> 

    export const loginTest = () => { 
        
        cy.fixture('example.json').then((credentials) => {
        // Access individual properties
        const url = credentials.url;
        const username = credentials.login_email;
        const password = credentials.login_password;
        // Perform your test actions, e.g., visit the URL and login
        //url
        cy.visit(url);
        cy.url().should('include', 'dashboard/login')
        cy.wait(6000);
        //login form text 
        cy.get('h1').should('be.visible').should('have.text','Login ' )
        cy.wait(500);
        //username
        cy.get('.ant-btn').should('be.visible')
        cy.wait(500);
        //cy.get('#normal_login_username').invoke('attr', 'placeholder').should('contain', 'Email')
        cy.wait(500);
        cy.get('#normal_login_username').should('be.visible').should('be.empty').type(username);
        cy.wait(500);
        //password
        cy.get('#normal_login_password').should('be.visible').should('be.empty').type(password);
        cy.wait(500);
       // cy.get('.ant-input-prefix').should('be.visible')
       cy.wait(500);
        cy.get('.ant-input-suffix').should('be.visible')
        cy.wait(500);
        cy.intercept('POST', '/api/method/login').as('loginRequest');
         //login button
         cy.get('button[type="submit"]').click();
       // cy.get('.ant-btn').should('be.enabled').should('have.text','Login').click()
       
        cy.wait('@loginRequest', { timeout: 10000 }).then((interception) => {
          const statusCode = interception.response.statusCode;
          if (statusCode === 401) {
            cy.get('.ant-message-custom-content').should('have.text','Invalid login credentials')
            cy.log('Invalid login credentials');
          }
       
           else {
            cy.log(`Login failed, status code ${statusCode}`);
            cy.log('Response body:', interception.response.body);
            
          }
          
         // expect(statusCode).to.equal(200);
        });
          //side menu botton close
        //   cy.get('.trigger').should('be.visible')   
        //   cy.wait(500);
        //   //logo
        //   cy.get('.logo').should('be.visible')
        //   cy.wait(500);
        //   //job
        //   cy.get('[id="/jobs"]').should('be.visible').should('have.text', 'Jobs').invoke('css', 'color').should('eq', 'rgb(22, 119, 255)'); 
        //   cy.wait(500);
        //   //header jobs
        //   cy.get('#heading-navbar').should('be.visible').should('have.text', 'Jobs')
        //   cy.wait(500);
        // //  add job button
        //   cy.get('.header-actions > div > .ant-btn').should('be.visible').should('have.text', 'Add')//.click()
        //   cy.wait(500);   
        //   //production
        //   cy.get('[id="/production"]').should('be.visible').should('have.text', 'Production')
        //  //  cy.get('[d= "M12.0098 11.916H12V11.9258H12.0098V11.916Z"]').should('be.visible')
        //  cy.wait(500);
        //   //Stow Plan
        //   cy.get('[id="/stowplan"]').should('be.visible').should('have.text', 'Stow Plan')
        // //   cy.get('[d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V8H2V5Z"]').should('be.visible').should('be.visible')///.click({force: true})
        // cy.wait(500);
        //    // Crane Planner
        //    cy.get('[id="/planner"]').should('be.visible').should('have.text', 'Crane Planner')
        // //   cy.get('[d="M2 10H22"]').should('be.visible')//.click({force: true}) 
        // cy.wait(500);
        //   //inventory 
        //   cy.get('[id="/inventory"]').should('be.visible').should('have.text', 'Inventory')
        // //   cy.get('[d="M16 3H22C22.5523 3 23 3.44772 23 4V20C23 20.5523 22.5523 21 22 21H16V3Z"]').should('be.visible') //.click({force: true})
        // cy.wait(500);
        //   // Trucking
        //   cy.get('[id="/trucking"]').should('be.visible').should('have.text', 'Trucking')
        // //   cy.get('[d="M16 7V6.25C15.5858 6.25 15.25 6.58579 15.25 7H16ZM16 19H15.25C15.25 19.4142 15.5858 19.75 16 19.75V19ZM18.563 19V19.75C18.9052 19.75 19.204 19.5184 19.2893 19.1869L18.563 19ZM22.437 19L21.7107 19.1869C21.796 19.5184 22.0948 19.75 22.437 19.75V19ZM25 13H25.75C25.75 12.8836 25.7229 12.7687 25.6708 12.6646L25 13ZM22.2764 7.55279L22.9472 7.21738V7.21738L22.2764 7.55279ZM16 7.75H21.382V6.25H16V7.75ZM16.75 19V7H15.25V19H16.75ZM18.563 18.25H16V19.75H18.563V18.25ZM19.2893 19.1869C19.4281 18.6476 19.9186 18.25 20.5 18.25V16.75C19.2176 16.75 18.1419 17.6271 17.8367 18.8131L19.2893 19.1869ZM20.5 18.25C21.0814 18.25 21.5719 18.6476 21.7107 19.1869L23.1633 18.8131C22.8581 17.6271 21.7824 16.75 20.5 16.75V18.25ZM24 18.25H22.437V19.75H24V18.25ZM24.25 18C24.25 18.1381 24.1381 18.25 24 18.25V19.75C24.9665 19.75 25.75 18.9665 25.75 18H24.25ZM24.25 13V18H25.75V13H24.25ZM21.6056 7.8882L24.3292 13.3354L25.6708 12.6646L22.9472 7.21738L21.6056 7.8882ZM21.382 7.75C21.4767 7.75 21.5632 7.8035 21.6056 7.8882L22.9472 7.21738C22.6508 6.6245 22.0448 6.25 21.382 6.25V7.75Z"]').should('be.visible') //.click({force: true}) 
        //    cy.wait(500);
        //  //Mooring
        //  cy.get('[id="/mooring"]').should('be.visible').should('have.text', 'Mooring')
        // //   cy.get('[d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V9L20.2155 9.35689C18.3458 9.73083 17 11.3725 17 13.2792V22H7V13.2792C7 11.3725 5.65416 9.73083 3.78447 9.35689L2 9V6Z"]').should('be.visible')//.click({force: true}) 
        // cy.wait(500);
        //    //Contracts
        //    cy.get('[id="/contracts"]').should('be.visible').should('have.text', 'Contracts')
        // //   cy.get('[d="M3 3C3 1.89543 3.89543 1 5 1H15L21 7V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3Z"]').should('be.visible')//.click({force: true})
        // cy.wait(500);
        //  // Scrolldown side menu 
        //   cy.get('.ant-menu').scrollTo('bottom')
        //   cy.wait(500);
        //    //Accounting
        //    cy.get('[id="/accounting"]').should('be.visible').should('have.text', 'Accounting')
        // //   cy.get('[d="M12 6V7.49975M9 15.182L9.879 15.841C11.05 16.72 12.949 16.72 14.121 15.841C15.293 14.962 15.293 13.538 14.121 12.659C13.536 12.219 12.768 12 12 12C11.275 12 10.55 11.78 9.997 11.341C8.891 10.462 8.891 9.038 9.997 8.159C11.103 7.28 12.897 7.28 14.003 8.159L14.418 8.489M12 16.5002V18"]').should('be.visible')//.click()
        // cy.wait(500);
        //   //Report
        //   cy.get('[id="/reports"]').should('be.visible').should('have.text', 'Reports')
        // //   cy.get('[d="M2.69231 3V16.5C2.69231 17.163 2.95975 17.7989 3.43581 18.2678C3.91186 18.7366 4.55753 19 5.23077 19H7.76923M2.69231 3H1M2.69231 3H21.3077M7.76923 19H16.2308M7.76923 19L6.07692 23M21.3077 3H23M21.3077 3V16.5C21.3077 17.163 21.0402 17.7989 20.5642 18.2678C20.0881 18.7366 19.4425 19 18.7692 19H16.2308M16.2308 19L17.9231 23M6.92308 14L10.3077 10.6667L12.7311 13.0533C13.8697 11.4437 15.5 9.5 17.0769 8.11667"]').should('be.visible')//.click()
        // cy.wait(500);
        //   //Setting
        //   cy.get('[id="/settings"]').should('be.visible').should('have.text', 'Settings')
        // //   cy.get('[d="M9.06246 2.14889C9.17246 1.48644 9.7469 1 10.4191 1H13.5883C14.2606 1 14.835 1.48644 14.945 2.14889L15.2053 3.71456C15.2823 4.17167 15.5879 4.553 15.9937 4.77789C16.0841 4.82678 16.1733 4.87933 16.2626 4.93311C16.6586 5.17267 17.1426 5.24722 17.5765 5.08467L19.0639 4.52733C19.3687 4.4127 19.7043 4.40997 20.011 4.51965C20.3176 4.62932 20.5754 4.84427 20.7383 5.12622L22.3223 7.87256C22.485 8.15453 22.5423 8.48505 22.4841 8.80531C22.4259 9.12558 22.256 9.41481 22.0046 9.62156L20.7787 10.6323C20.4206 10.9257 20.2433 11.3816 20.2519 11.8448C20.2539 11.9487 20.2539 12.0526 20.2519 12.1564C20.2433 12.6184 20.4206 13.0731 20.7775 13.3664L22.0058 14.3784C22.524 14.8062 22.6585 15.5444 22.3236 16.1262L20.7371 18.8726C20.5744 19.1544 20.3169 19.3695 20.0105 19.4793C19.7041 19.5892 19.3687 19.5869 19.0639 19.4727L17.5765 18.9153C17.1426 18.7528 16.6598 18.8273 16.2613 19.0669C16.1727 19.1208 16.0831 19.1729 15.9925 19.2233C15.5879 19.447 15.2823 19.8283 15.2053 20.2854L14.945 21.8499C14.835 22.5136 14.2606 23 13.5883 23H10.4179C9.74568 23 9.17124 22.5136 9.06124 21.8511L8.8009 20.2854C8.72513 19.8283 8.41957 19.447 8.01379 19.2221C7.92316 19.1721 7.83352 19.1204 7.7449 19.0669C7.34768 18.8273 6.8649 18.7528 6.42979 18.9153L4.94235 19.4727C4.63768 19.587 4.30235 19.5895 3.99598 19.4799C3.68961 19.3702 3.43206 19.1555 3.26913 18.8738L1.6839 16.1274C1.52128 15.8455 1.46396 15.5149 1.52215 15.1947C1.58034 14.8744 1.75026 14.5852 2.00168 14.3784L3.22879 13.3677C3.58568 13.0743 3.7629 12.6184 3.75435 12.1552C3.75244 12.0513 3.75244 11.9474 3.75435 11.8436C3.7629 11.3816 3.58568 10.9269 3.22879 10.6336L2.00168 9.62156C1.75056 9.41487 1.58084 9.12586 1.52266 8.80587C1.46448 8.48588 1.52161 8.15563 1.6839 7.87378L3.26913 5.12744C3.43191 4.84528 3.68959 4.63007 3.99624 4.52017C4.3029 4.41026 4.63861 4.4128 4.94357 4.52733L6.42979 5.08467C6.8649 5.24722 7.34768 5.17267 7.7449 4.93311C7.8329 4.87933 7.92335 4.82678 8.01379 4.77667C8.41957 4.553 8.72513 4.17167 8.8009 3.71456L9.06246 2.14889V2.14889Z"]').should('be.visible')//.click({force: true}) 
        // cy.wait(500);
        //   //Notification
        //   // cy.get('.bottom-nav-item > :nth-child(1)').should('be.visible').should('have.text', 'Notificaion') 
        // cy.get('[d="M15.6699 12.0007C15.6699 12.9731 15.2836 13.9057 14.5959 14.5934C13.9083 15.281 12.9757 15.6673 12.0032 15.6673C11.0308 15.6673 10.0981 15.281 9.41049 14.5934C8.72286 13.9057 8.33655 12.9731 8.33655 12.0007C8.33655 11.0282 8.72286 10.0956 9.41049 9.40793C10.0981 8.72029 11.0308 8.33398 12.0032 8.33398C12.9757 8.33398 13.9083 8.72029 14.5959 9.40793C15.2836 10.0956 15.6699 11.0282 15.6699 12.0007V12.0007Z"]').should('be.visible')//.click({force: true}) 
        // cy.wait(500);
        //    //droupdown button for logout & profile
        //   cy.get('#Path').should('be.visible')//.click({force: true}) 
        //   cy.wait(500);
        //   //username
        //  cy.get('.username').should('be.visible')//.click({force: true}) 
        //  cy.wait(500);
        //    //user image
        //   cy.get('.ant-avatar-string').should('be.visible')//.click({force: true}) 
        //   cy.wait(500);
        });
         // check button Color  after click  
         //cy.get('li.ant-menu-item-selected:nth-child(1) > span:nth-child(1) > a:nth-child(1)').invoke('css', 'color').should('eq', '#0000FF');
        
    
    };
       
 
    