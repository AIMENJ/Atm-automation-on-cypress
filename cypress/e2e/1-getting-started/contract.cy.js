/// <reference types="cypress" />
import { loginTest } from '../../support/loginTest';
import dayjs from 'dayjs'
describe('Contract ', () => {
    it('Add contract  ', () => {
    loginTest();
    cy.wait(6000);
    cy.get('[id="/contracts"]').scrollIntoView().should('be.visible').should('have.text', 'Contracts').click().invoke('css', 'color').should('eq', 'rgb(22, 119, 255)')
    cy.wait(1000);
    // header jobs
    cy.get('#heading-navbar').should('be.visible').should('have.text', 'Contracts')
    cy.wait(500);
   
    

  // CotractList()
//contractform()
// Update()
//  cy.wait(6000)
// Delete();  
cy.wait(6000)
SettingButton()
}); 
});
//  })
export const CotractList = () => {
  //List 
      //contract ID
      cy.get('.ant-table-thead > tr > :nth-child(1)').should('have.text', 'Contract ID')
      cy.wait(200);
      //Customer 
      cy.get('.ant-table-thead > tr > :nth-child(2)').should('have.text', 'Customer')
      cy.wait(200);
       //Sale Rep
      cy.get('.ant-table-thead > tr > :nth-child(3)').should('have.text', 'Sales Rep')
      cy.wait(200);
       //Payment Term
      cy.get('.ant-table-thead > tr > :nth-child(4)').should('have.text', 'Payment Term')
      cy.wait(200);
       //Section
      cy.get('.ant-table-thead > tr > :nth-child(5)').should('have.text', 'Section')
      cy.wait(200);
       //Description 
      cy.get('.ant-table-thead > tr > :nth-child(6)').should('have.text', 'Description')
      cy.wait(200);
       //Status 
      cy.get('.ant-table-thead > tr > [style="text-align: center;"]').should('have.text', 'Status')
      cy.wait(200);
      //Filter button 
      cy.get('[style="position: relative;"] > .ant-btn').should('be.visible')
      cy.wait(200);
      //Add contract button 
      cy.get('#Add_Button').should('be.visible')
      cy.wait(200);
}
export const contractform = () => {
cy.getCurrentDate().then((currentDate) => {
cy.getDateSixDaysLater().then((dateSixDaysLater) => {
cy.wait(500)
cy.get('#Add_Button > span').click()
cy.wait(1000);
//Customer 
cy.get('#ant_design_form_customer').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
cy.wait(500);
cy.get('#ant_design_form_customer_list_0 .ant-select-item-option-content').first().click({force: true})
cy.wait(500);

 //Sales Rep
cy.get('#ant_design_form_sales_rep').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
cy.wait(500);
cy.get('#ant_design_form_sales_rep_list_0 .ant-select-item-option-content').first().click({force: true})
cy.wait(500);
 cy.wait(200);
 //Payment Term 
cy.get('#ant_design_form_payment_term').should('exist').should('be.empty').click()
cy.wait(500);
cy.get('#ant_design_form_payment_term_list_0 .ant-select-item-option-content').first().click({force: true})
cy.wait(200);
//Term from 
cy.get('#term_from').should('exist').should('be.empty').type(currentDate)
cy.wait(200);
//Term To
cy.get('#term_to').should('exist').should('be.empty').type(dateSixDaysLater)
 cy.wait(200);
 //Section
 cy.get('#ant_design_form_section').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
 cy.wait(500);
 cy.get('#ant_design_form_section_list_0 .ant-select-item-option-content').first().click({force: true})
 
cy.wait(500);
 //At company 
cy.get('#at_company').should('exist').should('be.empty').click()
cy.wait(500);
cy.get('#at_company_list_0 .ant-select-item-option-content').first().click({force: true})

cy.wait(1000);
// //Checklist 
 cy.get(':nth-child(8) > label').should('exist')
cy.wait(200);
//Standarized contract
cy.get('#standarized_contract').should('exist').check( {force: true} )
cy.wait(500);
//High water provision 
cy.get('#high_water_provision').should('exist').check()
cy.wait(500);
//Fuel Escalator
cy.get('#fuel_escalator').should('exist').check()
 cy.wait(200);
 //Max demurrage rate
 cy.get('#max_demurrage_rate').scrollIntoView().should('exist').check()
 cy.wait(200);
 //Description 
 cy.get('#description').should('exist').should('be.empty').type('Read contract before add carefull')
 cy.wait(200);
// //Status 
 cy.get('#ant_design_form_status').should('exist').should('be.empty').should('be.empty').type('Active').type('{enter}')
 cy.wait(200);
 cy.get('#ant_design_form_status_list_0 .ant-select-item-option-content').first().click({force: true})
 cy.wait(500);
//  //Cancel button 
 cy.get('.ant-modal-footer > .ant-btn-default').should('exist').should('have.text', 'Cancel')
 cy.wait(200);
 //Add button 
 cy.get('.ant-modal-footer > .ant-btn-primary').should('exist').click()
cy.wait(6000);
})
})
 }
 function checkRecordExist(){
  
    return new Cypress.Promise((resolve, reject) => {
    cy.document().then((doc) => {
    const elementExist = doc.querySelector(".ant-empty-description") !== null
    cy.log(elementExist)
    resolve(!elementExist)
 })
})  
}

function checkRecordExistindawer() {
return new Cypress.Promise((resolve, reject) => {
cy.document().then((doc) => {
cy.get('.ant-drawer-body').within(($drawer) => {
const elementExist = $drawer[0].querySelector(".ant-empty-description") !== null;
cy.log(elementExist);
resolve(!elementExist);
});
});
});
}
export const Delete = () => {
let result;
checkRecordExist().then((exists) => {
cy.log("element exist:", exists)
if(exists){
let tableData = [];
cy.get('.ant-table-tbody')
.find('tr')
.each(($row) => {
 // Get data from each row and store it in the array
const rowData = [];
cy.wrap($row)
.find('td')
.each(($cell) => {
// Get text from each cell and store it in the array
rowData.push();
 })
 .then(() => {
  tableData.push(rowData);
  });
})
.then(() => {
 cy.wait(200);
 cy.get('.table-dropdown').first().click()
cy.wait(200);
cy.get('#delete_button').click({force: true} )
cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click({force: true} )
 });
}
else{
  cy.log('recode not found ')
 }
})  
 }
 export const Update = () => {
  cy.getCurrentDate().then((currentDate) => {
  cy.getDateSixDaysLater().then((dateSixDaysLater) => {
  cy.wait(500)
   let result;
  checkRecordExist().then((exists) => {
  cy.log("element exist:", exists)
  cy.document().then((doc) => {
  if(exists){
  let tableData = [];
  cy.get('.ant-table-tbody')
   .find('tr')
  .each(($row) => {
    // Get data from each row and store it in the array
  const rowData = [];
  cy.wrap($row)
  .find('td')
  .each(($cell) => {
  // Get text from each cell and store it in the array
  rowData.push();
 })
.then(() => {
tableData.push(rowData);
});
})
.then(() => {
cy.get('#menu-0').click()
// cy.get('.table-dropdown').first().click()
 cy.wait(5000);
cy.get('#Form_Update_Button').click({force: true})
cy.wait(1000);
 //customer
cy.get('#ant_design_form_customer').should('exist').click({force: true})//.type('Plains',{force: true}).type('{enter}')
cy.wait(500);
cy.get('#ant_design_form_customer_list_1 .ant-select-item-option-content').first().click({force: true})
cy.wait(500);
 //Sales Rep
cy.get('#ant_design_form_sales_rep').should('exist').click({force: true} )//.type('Plains',{force: true}).type('{enter}')
cy.wait(500);
cy.get('#ant_design_form_sales_rep_list_1 .ant-select-item-option-content').first().click({force: true})
cy.wait(500);
 cy.wait(200);
 //Payment Term 
cy.get('#ant_design_form_payment_term').should('exist').click({force: true} )
cy.wait(500);
cy.get('#ant_design_form_payment_term_list_1 .ant-select-item-option-content').first().click({force: true})
cy.wait(200);
//Term from 
cy.get('#term_from').should('exist').clear({force: true}).type(currentDate)
cy.wait(200);
//Term To
cy.get('#term_to').should('exist').clear({force: true}).type(dateSixDaysLater)
 cy.wait(200);
 //Section
 cy.get('#ant_design_form_section').should('exist').click({force: true} )//.type('Plains',{force: true}).type('{enter}')
 cy.wait(500);
 cy.get('#ant_design_form_section_list_1 .ant-select-item-option-content').first().click({force: true})
cy.wait(500);
 //At company 
cy.get('#at_company').should('exist').click({force: true} )
cy.wait(500);
cy.get('#at_company_list_1 .ant-select-item-option-content').first().click({force: true})
// //Checklist 
 cy.get(':nth-child(8) > label').should('exist')
cy.wait(200);
//Standarized contract
cy.get('#standarized_contract').should('exist').check({force: true})
cy.wait(500);
//High water provision 
cy.get('#high_water_provision').should('exist').check( {force: true} )
cy.wait(500);
//Fuel Escalator
cy.get('#fuel_escalator').should('exist').check({force: true} )
 cy.wait(200);
 //Max demurrage rate
 cy.get('#max_demurrage_rate').scrollIntoView().should('exist').check({force: true} )
 cy.wait(200);
 //Description 
 cy.get('#description').should('exist').clear({force: true}).type('Read contract before add',{force: true} )
 cy.wait(200);
// //Status 
 cy.get('#ant_design_form_status').should('exist').should('be.empty').click({force: true} )//.type('Plains',{force: true}).type('{enter}')
 cy.wait(500);
 cy.get('#ant_design_form_status_list_1 .ant-select-item-option-content').first().click({force: true})
 //Cancel button 
 cy.get('.ant-modal-footer > .ant-btn-default').should('exist').should('have.text', 'Cancel')
 cy.wait(200);
 //Add button 
 cy.get('.ant-modal-footer > .ant-btn-primary').should('exist').click()
 cy.wait(500);
});
}else{
            cy.log('recode not found ')
}})
    })  
  })  
})  
 }
 export const SettingButton = () => {
  //cy.get('[data-row-key="01713"] > :nth-child(1)').click() //open throgh recode 
 Opendawer()
 //Details()
//  stevedoeingRate()
//  cy.wait(1000)
 stevedoeingRateUpdate()
// stevedoeingRateDelete()
 //StorageRates()
 //StorageRatesUpdate()
// // StorageRatesDelete()
//GuaranteeAmount()
// GuaranteeAmountUpdate()
// // GuaranteeAmountDelete()
// //Contract()
// ContractUpdate()
//  ContractDelete()
 }
 function Details(){
  
  cy.get('.ant-tabs-tab-active').click()
  cy.wait(6000)
  // cy.get('#rc-tabs-1-tab-Details').click()
  // cy.wait(6000)
  cy.get(':nth-child(1) > .label').should('be.visible').should('have.text','Term From - To')
  cy.wait(200);
  cy.get(':nth-child(2) > .label').should('be.visible').should('have.text','Sales Rep')
  cy.wait(200);
  cy.get(':nth-child(3) > .label').should('be.visible').should('have.text','At Company')
  cy.wait(200);
  cy.get(':nth-child(4) > .label').should('be.visible').should('have.text','Payment Term')
  cy.wait(200);
  //contract status coment
  cy.get('[style="margin-left: -15px; margin-right: -15px;"] > :nth-child(1) > h5').should('be.visible').should('have.text','Contract Status Comment')
  cy.wait(200);
  //contract status coment box
  cy.get('.ant-input').should('be.visible')
  cy.wait(200);
  //checklist
  cy.get(':nth-child(2) > h5').should('be.visible').should('have.text','Checklist')
  cy.wait(200);
  cy.get(':nth-child(1) > :nth-child(1) > label').should('be.visible').should('have.text','  Standarized Contract')
  cy.wait(200);
  cy.get(':nth-child(1) > :nth-child(2) > label').should('be.visible').should('have.text','  High Water Provision')
  cy.wait(200);
  cy.get('.check-list > :nth-child(2) > :nth-child(1) > label').should('be.visible').should('have.text','  Fuel Escalator')
  cy.wait(200);
  cy.get('.check-list > :nth-child(2) > :nth-child(2) > label').should('be.visible').should('have.text', '  Max Demurrage Rate')
  cy.wait(200);
  cy.get(':nth-child(4) > .ant-col > .card-light').scrollIntoView().should('be.visible')
  cy.wait(200);
  cy.get(':nth-child(5) > .ant-col > .card-light').should('be.visible')//Sub Group Description
  cy.wait(200);
    }
function stevedoeingRate(){
  
  cy.get('[id="rc-tabs-0-tab-Stevedoring Rates"]').click({force: true})
  cy.wait(200);
  //list
  cy.get('.data-info').should ('exist')
  cy.wait(200);
  cy.get('#Add_Button_Tab').should('be.visible').should('have.text','Add Stevedoring Rate')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('be.visible').should('have.text','Revenue Type')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('be.visible').should('have.text','Cargo')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('be.visible').should('have.text','Tons From')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('be.visible').should('have.text','Tons To')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(5)').should('be.visible').should('have.text','Tons Type')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(6)').should('be.visible').should('have.text','Market Rate')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(7)').scrollIntoView().should('be.visible').should('have.text','Rate')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(8)').should('be.visible').should('have.text','Rate Type')
  cy.wait(200);
  cy.get('.ant-table-thead > tr > :nth-child(9)').should('be.visible').should('have.text','Comment')
  cy.wait(200);
  //add form
  cy.get('#Add_Button_Tab').should('exist').should('have.text','Add Stevedoring Rate').click( {force: true})
  cy.wait(500);
  cy.get('#ant_design_form_revenue_type').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  cy.get('#ant_design_form_revenue_type_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
  cy.get('#ant_design_form_cargo').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  cy.get('#ant_design_form_cargo_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
  cy.get('#tons_from').should('exist').type('10')
  cy.wait(200);
  cy.get('#tons_to').should('exist').type('1000')
  cy.wait(200);
  cy.get('#ant_design_form_tons_type').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  cy.get('#ant_design_form_tons_type_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
  cy.get('#ant_design_form_market_rate').should('exist').type('1000')
  cy.wait(500);
  cy.get('#ant_design_form_rate').should('exist').type('1000')
  cy.wait(500);
  cy.get('#ant_design_form_rate_type').scrollIntoView().should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  cy.get('#ant_design_form_rate_type_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
  cy.get('#comment').should('exist').type('Read form before click on save button')
  cy.wait(500);
  //cancel button
  cy.get('.ant-modal-footer > .ant-btn-default').should('be.visible') 
  cy.wait(500);
  //add button
  cy.get('.ant-modal-footer > .ant-btn-primary').should('be.visible').click()   // .should('have.text','Add Stevedoring Rate')
  cy.wait(500);
//   cy.get('.ant-notification-notice').should('be.visible')
//   cy.wait(500);
// cy.get('.ant-notification-notice-close-x').should('be.visible')
// cy.wait(500);
}
function stevedoeingRateUpdate(){
  cy.get('[id="rc-tabs-0-tab-Stevedoring Rates"]').click({force: true})
  cy.wait(1500);
    checkRecordExistInDrawer('.ant-drawer-body').then
((exists) => {
      cy.log("element exist:", exists);
      if (exists) {
        const tableData = [];
        cy.get('.ant-table-tbody')
          .find('tr')
          .each(($row) => {
            const rowData = [];
            cy.wrap($row)
              .find('td')
              .each(($cell) => {
                rowData.push($cell.text());
              })
              .then(() => {
                tableData.push(rowData);
              });
          })
          .then(() => {
            cy.wait(500);
            cy.get('#Stevedoring_Rates-tab-menu-0').click();
            cy.wait(200);
            // Ensure correct document context
            cy.document().then((doc) => {
              const body = doc.querySelector('body');
              if (body) {
                cy.wrap(body).within(() => {
                  cy.get('#update_form_Stevedoring_Rates', { timeout: 20000 })
                    .should('exist')
                    .should('be.visible')
                    .click({ force: true });
                  cy.wait(200);
                  cy.get('#update_Stevedoring\ Rates').click()
                  //cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click();
                });
              } else {
                cy.log('Body element not found in the current document');
              }
            });
          });
      } else {
        cy.log('record not found');
      }
    });
  
}
function stevedoeingRateDelete(){
  cy.get('[id="rc-tabs-0-tab-Stevedoring Rates"]').click({force: true})
  cy.wait(1500);
    checkRecordExistInDrawer('.ant-drawer-body').then
((exists) => {
      cy.log("element exist:", exists);
      if (exists) {
        const tableData = [];
        cy.get('.ant-table-tbody')
          .find('tr')
          .each(($row) => {
            const rowData = [];
            cy.wrap($row)
              .find('td')
              .each(($cell) => {
                rowData.push($cell.text());
              })
              .then(() => {
                tableData.push(rowData);
              });
          })
          .then(() => {
            cy.wait(500);
            cy.get('#Stevedoring_Rates-tab-menu-0').click();
            cy.wait(200);
            // Ensure correct document context
            cy.document().then((doc) => {
              const body = doc.querySelector('body');
              if (body) {
                cy.wrap(body).within(() => {
                  cy.get('#delete_button_Stevedoring_Rates', { timeout: 20000 })
                    .should('exist')
                    .should('be.visible')
                    .click({ force: true });
                  cy.wait(200);
                  cy.get('#ok-button').click()
                  //cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click();
                });
              } else {
                cy.log('Body element not found in the current document');
              }
            });
          });
      } else {
        cy.log('record not found');
      }
    });
  
}

function Opendawer(){
  let result;
  checkRecordExist().then((exists) => {
      cy.log("element exist:", exists)
      if(exists){
          let tableData = [];
          cy.get('.ant-table-tbody')
          .find('tr')
          .each(($row) => {
            // Get data from each row and store it in the array
            const rowData = [];
            cy.wrap($row)
              .find('td')
              .each(($cell) => {
                // Get text from each cell and store it in the array
                rowData.push();
              })
              .then(() => {
                tableData.push(rowData);
              });
          })
          .then(() => {
            //cy.get('.table-dropdown').click()
            cy.get('[id="/contracts"]').click()
            cy.get('td[class="ant-table-cell"]').eq(0).click({ force: true });
            cy.wait(200); 
  //header
cy.get('.ant-tabs-nav').should('have.text','DetailsStevedoring RatesStorage RatesGuarantee AmountsContract Notes')   
          });
      }else{
          cy.log('recode not found ')

      }
  })  
}
function StorageRates(){

  cy.get('[id="rc-tabs-0-tab-StorageRates"]').click({force: true})
  cy.wait(200);
  //list
  cy.get('.data-info').should ('exist')
  cy.wait(200);
  cy.get('#Add_Button_Tab').should ('be.visible').should('have.text', 'Add Storage Rate')
 // cy.get('#Add_Button').should ('exist').should('have.text', 'Add')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('be.visible').should('have.text','Revenue Type')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('be.visible').should('have.text','Cargo')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('be.visible').should('have.text','Tons From')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('be.visible').should('have.text','Tons To')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(5)').should('be.visible').should('have.text','Tons Type')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(6)').should('be.visible').should('have.text','Market Rate')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(7)').scrollIntoView().should('be.visible').should('have.text','Rate')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(8)').scrollIntoView().should('be.visible').should('have.text','Rate Type')
  cy.wait(200);
  cy.get('.ant-table-thead > tr > :nth-child(9)').should('be.visible').should('have.text','Comment')
  cy.wait(200);
  //Add form storage rate
  cy.get('#Add_Button_Tab').click({force: true} )
  cy.wait(500);
  cy.get('#ant_design_form_revenue_type').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  cy.get('#ant_design_form_revenue_type_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
  cy.get('#ant_design_form_cargo').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  cy.get('#ant_design_form_cargo_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
  cy.get('#tons_from').should('exist').type('10')
  cy.wait(500);
  cy.get('#tons_to').should('exist').type('1000')
  cy.wait(500);
  cy.get('#ant_design_form_tons_type').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  cy.get('#ant_design_form_tons_type_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
  cy.get('#ant_design_form_market_rate').should('exist').type('55.50')
  cy.wait(500);
  cy.get('#ant_design_form_rate').should('exist').type('60.75')
  cy.wait(500);
  cy.get('#ant_design_form_rate_type').scrollIntoView().should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  cy.get('#ant_design_form_rate_type_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
  cy.get('#comment').should('exist').type('Read form before click on save button')

  cy.get('.ant-modal-footer > .ant-btn-default').should('be.visible')
  cy.wait(500);
  cy.get('.ant-modal-footer > .ant-btn-primary').should('be.visible').should('have.text', 'Add Storage Rate').click()
  cy.wait(500);
  cy.get('.ant-notification-notice').should('be.visible')
  cy.wait(500);
cy.get('.ant-notification-notice-close-x').should('be.visible')
cy.wait(500);
}
function StorageRatesUpdate(){
  cy.get('[id="rc-tabs-0-tab-StorageRates"]').click({force: true})
 let result;
 checkRecordExistInDrawer('.ant-drawer-body').then
((exists) => {
     cy.log("element exist:", exists)
     if(exists){
         let tableData = [];
         cy.get('.ant-table-tbody')
         .find('tr')
         .each(($row) => {
           // Get data from each row and store it in the array
           const rowData = [];
           cy.wrap($row)
             .find('td')
             .each(($cell) => {
               // Get text from each cell and store it in the array
               rowData.push();
             })
             .then(() => {
               tableData.push(rowData);
             });
         })
         .then(() => {
           cy.get('#tab-menu-0').click()
           //cy.get('.table-dropdown').eq(0).click({force: true} )
           cy.wait(6000);
           cy.get('#Form_Update_Button').click({force: true})
           cy.wait(200);
           cy.get('#ant_design_form_revenue_type').should('exist').clear({force: true}).type('Test',{ force: true }).type('{enter}')
           cy.wait(200);
           cy.get('#ant_design_form_cargo').clear({force: true}).should('exist').type('Rihan',{ force: true }).type('{enter}')
           cy.wait(200);
           cy.get('#tons_from').should('exist').clear({force: true}).type('130')
           cy.wait(200);
           cy.get('#tons_to').should('exist').clear({force: true}).type('5000')
           cy.wait(200);
           cy.get('#ant_design_form_tons_type').clear({force: true}).should('exist').type('MT',{ force: true }).type('{enter}')
           cy.wait(200);
           cy.get('#ant_design_form_market_rate').should('exist').clear({force: true}).type('34')
           cy.wait(200);
           cy.get('#ant_design_form_rate').should('exist').clear({force: true}).type('34')
           cy.wait(200);
           cy.get('#ant_design_form_rate_type').clear({force: true}).should('exist').type('ST',{ force: true }).type('{enter}')
           cy.wait(200);
           cy.get('#comment').should('exist').clear({force: true}).type('djl jdsala', { force: true })
           cy.wait(200);
           cy.get('.ant-modal-footer > .ant-btn-default').should('be.visible')
           cy.wait(200);
           cy.get('.ant-modal-footer > .ant-btn-primary').should('be.visible').click()//.should('have.text', 'Add Storage Rate').click()
           cy.wait(200);
           cy.get('.ant-notification-notice').should('be.visible')
           cy.wait(200);
         cy.get('.ant-notification-notice-close-x').should('be.visible')
         cy.wait(200);
          
          
         });
     }else{
         cy.log('recode not found ')

     }
 })  

}
function StorageRatesDelete(){
  cy.get('[id="rc-tabs-0-tab-StorageRates"]').click({force: true})
  let result;
  checkRecordExist().then((exists) => {
      cy.log("element exist:", exists)
      if(exists){
          let tableData = [];
          cy.get('.ant-table-tbody')
          .find('tr')
          .each(($row) => {
            // Get data from each row and store it in the array
            const rowData = [];
            cy.wrap($row)
              .find('td')
              .each(($cell) => {
                // Get text from each cell and store it in the array
                rowData.push();
              })
              .then(() => {
                tableData.push(rowData);
              });
          })
          .then(() => {
            cy.wait(200);
            cy.get('#tab-menu-0').click()
           // cy.get('.table-dropdown').first().click()
            cy.wait(200);
            cy.get('#delete_button').click({force: true} )
            cy.wait(200);
            cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
           
          });
      }else{
          cy.log('recode not found ')

      }
  })  
}

function GuaranteeAmount(){
  cy.get('#rc-tabs-0-tab-KEY23076').click()
  cy.wait(200);
  cy.get('.data-info').should('exist')
  cy.wait(200);
  cy.get('#Add_Button_Tab').should('be.visible').should('have.text','Add Guarantee Amount')
  cy.wait(200);
  //list
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('be.visible').should('have.text','Cargo')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('be.visible').should('have.text','Min')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('be.visible').should('have.text','Max')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('be.visible').should('have.text','Tons Type')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(5)').should('be.visible').should('have.text','Guarantee Amount')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(6)').should('be.visible').should('have.text','Contracts')
  cy.wait(200);
  //add form
  cy.get('#Add_Button_Tab').should('exist').should('have.text','Add Guarantee Amount').click( {force: true})
  cy.wait(200);
  cy.get('#ant_design_form_cargo').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  cy.get('#ant_design_form_cargo_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
  cy.get('#min').should('exist').type('10')
  cy.wait(200);
  cy.get('#max').should('exist').type('1000')
  cy.wait(200);
  cy.get('#ant_design_form_tons_type').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  cy.get('#ant_design_form_tons_type_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
  cy.get('#ant_design_form_guarantee_amount').should('exist').type('1000.67')
  cy.wait(200);
  cy.get('.ant-modal-footer > .ant-btn-default').should('be.visible')
  cy.wait(200);
  cy.get('.ant-modal-footer > .ant-btn-primary').should('be.visible').click() 
  cy.wait(200);
  cy.get('.ant-notification-notice').should('be.visible')
  cy.wait(200);
cy.get('.ant-notification-notice-close-x').should('be.visible')
cy.wait(200);
}
function GuaranteeAmountUpdate(){
  cy.get('#rc-tabs-0-tab-KEY23076').click({ force: true })
 let result;
 checkRecordExist().then((exists) => {
     cy.log("element exist:", exists)
     if(exists){
         let tableData = [];
         cy.get('.ant-table-tbody')
         .find('tr')
         .each(($row) => {
           // Get data from each row and store it in the array
           const rowData = [];
           cy.wrap($row)
             .find('td')
             .each(($cell) => {
               // Get text from each cell and store it in the array
               rowData.push();
             })
             .then(() => {
               tableData.push(rowData);
             });
         })
         .then(() => {
           cy.get('#tab-menu-0').click()
           //cy.get('.table-dropdown').eq(0).click({force: true} )
           cy.wait(6000);
           cy.get('#Form_Update_Button').click({force: true})
           cy.wait(200);
           cy.get('#ant_design_form_cargo').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
           cy.wait(500);
           cy.get('#ant_design_form_cargo_list_1 .ant-select-item-option-content').first().click({force: true})
  cy.get('#min').should('exist').clear({force: true}).type('20', {force: true} )
  cy.wait(200);
  cy.get('#max').should('exist').clear({force: true}).type('5000', {force: true} )
  cy.wait(200);
  cy.get('#ant_design_form_tons_type').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  cy.get('#ant_design_form_tons_type_list_1 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
  cy.get('#ant_design_form_guarantee_amount').should('exist').clear({force: true}).type('5000', {force: true} )
  cy.wait(200);
          
//  //Cancel button 
cy.get('.ant-modal-footer > .ant-btn-default').should('exist').should('have.text', 'Cancel')
cy.wait(200);
//Add button 
cy.get('.ant-modal-footer > .ant-btn-primary').should('exist').click()
cy.wait(200);
cy.get('.ant-notification-notice').should('be.visible')
cy.wait(200);
cy.get('.ant-notification-notice-close-x').should('be.visible')
cy.wait(200);
          
         });
     }else{
         cy.log('recode not found ')

     }
 })  

}

function GuaranteeAmountDelete(){
  cy.get('#rc-tabs-0-tab-KEY23076').click()
let result;
checkRecordExist().then((exists) => {
    cy.log("element exist:", exists)
    if(exists){
        let tableData = [];
        cy.get('.ant-table-tbody')
        .find('tr')
        .each(($row) => {
          // Get data from each row and store it in the array
          const rowData = [];
          cy.wrap($row)
            .find('td')
            .each(($cell) => {
              // Get text from each cell and store it in the array
              rowData.push();
            })
            .then(() => {
              tableData.push(rowData);
            });
        })
        .then(() => {
          cy.wait(200);
          cy.get('#tab-menu-0').click()
         // cy.get('.table-dropdown').first().click()
          cy.wait(200);
          cy.get('#delete_button').click({force: true} )
          cy.wait(200);
          cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
         
        });
    }else{
        cy.log('recode not found ')

    }
})  
}
function Contract(){
  cy.get('#rc-tabs-0-tab-KEY23077').click()
  cy.wait(200);
  cy.get('.data-info').should('exist')
  cy.wait(200);
  cy.get('#Add_Button_Tab ').should('be.visible').should('have.text','Add Contract Note')
  cy.wait(200);
  //list
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('be.visible').should('have.text','Note Type')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('be.visible').should('have.text','Note')
  cy.wait(200);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('be.visible').should('have.text',' Date Added')
  cy.wait(200);
  //add form
  cy.get('#Add_Button_Tab').should('exist').should('have.text','Add Contract Note').click( {force: true})
  cy.wait(200);
  cy.get('#ant_design_form_note_type').should('exist').click()
  cy.wait(500);
  cy.get('#ant_design_form_note_type_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
  cy.get('#note').should('exist').type('fdsjhs hdsbagkjsh')
  cy.wait(200);
  cy.get('.ant-modal-footer > .ant-btn-default').should('be.visible')
  cy.wait(200);
  cy.get('.ant-modal-footer > .ant-btn-primary').should('be.visible').click() 
  cy.wait(200);
  cy.get('.ant-notification-notice').should('be.visible')
  cy.wait(200);
cy.get('.ant-notification-notice-close-x').should('be.visible')
cy.wait(200);

  
}
function ContractUpdate(){
   cy.get('#rc-tabs-0-tab-KEY23077').click()
  let result;
  checkRecordExist().then((exists) => {
      cy.log("element exist:", exists)
      if(exists){
          let tableData = [];
          cy.get('.ant-table-tbody')
          .find('tr')
          .each(($row) => {
            // Get data from each row and store it in the array
            const rowData = [];
            cy.wrap($row)
              .find('td')
              .each(($cell) => {
                // Get text from each cell and store it in the array
                rowData.push();
              })
              .then(() => {
                tableData.push(rowData);
              });
          })
          .then(() => {
            cy.get('#tab-menu-0').click()
            //cy.get('.table-dropdown').eq(0).click({force: true} )
            cy.wait(6000);
            cy.get('#Form_Update_Button').click({force: true})
            cy.wait(200);
            cy.get('#ant_design_form_note_type').should('exist').clear({force: true}).type('Exclusions', { force: true }).type('{enter}')
            cy.wait(500);
            cy.get('#ant_design_form_note_type_list_1 .ant-select-item-option-content').first().click({force: true})
            cy.wait(200);
            cy.get('#note').should('exist').clear({force: true}).type('fdsag')
            cy.wait(200);
           
//  //Cancel button 
cy.get('.ant-modal-footer > .ant-btn-default').should('exist').should('have.text', 'Cancel')
cy.wait(200);
//Add button 
cy.get('.ant-modal-footer > .ant-btn-primary').should('exist').click()
cy.wait(200);
cy.get('.ant-notification-notice').should('be.visible')
cy.wait(200);
cy.get('.ant-notification-notice-close-x').should('be.visible')
 cy.wait(200);
           
          });
      }else{
          cy.log('recode not found ')

      }
  })  

}

function ContractDelete(){
  cy.get('#rc-tabs-0-tab-KEY23077').click()
  let result;
  checkRecordExist().then((exists) => {
      cy.log("element exist:", exists)
      if(exists){
          let tableData = [];
          cy.get('.ant-table-tbody')
          .find('tr')
          .each(($row) => {
            // Get data from each row and store it in the array
            const rowData = [];
            cy.wrap($row)
              .find('td')
              .each(($cell) => {
                // Get text from each cell and store it in the array
                rowData.push();
              })
              .then(() => {
                tableData.push(rowData);
              });
          })
          .then(() => {
            cy.wait(200);
            cy.get('#tab-menu-0').click()
           // cy.get('.table-dropdown').first().click()
            cy.wait(200);
            cy.get('#delete_button').click({force: true} )
            cy.wait(200);
            cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click()
           
          });
      }else{
          cy.log('recode not found ')

      }
  })  
}
Cypress.Commands.add('getCurrentDate', () => {
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
  return currentDate;
});
 
Cypress.Commands.add('getDateSixDaysLater', () => {
  const dateSixDaysLater = dayjs().add(6, 'day').format('YYYY-MM-DD HH:mm:ss');
  return dateSixDaysLater;
});