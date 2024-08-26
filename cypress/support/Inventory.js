/// <reference types="cypress" />
import dayjs from 'dayjs'
import 'cypress-file-upload';
function checkRecordExistInDrawer(table_id) {
    return new Cypress.Promise((resolve) => {
      cy.get(table_id).within(($drawer) => {
        const elementExist = $drawer[0].querySelector(".ant-empty-description") !== null;
        cy.log(elementExist);
        resolve(!elementExist);
      });
    });
  }
export const InventoryList = () => {
    cy.get('#Inventory').should('be.visible').should('have.text', 'Inventory').click()
    cy.wait(500);
    cy.get('#cargo-details').should('exist')
    cy.wait(500).should('have.text', 'Cargo Details').click()
    cy.wait(500)
    cy.get('.ant-table-thead > tr > :nth-child(1)').should('exist').should('have.text', 'Cargo Against BL')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(2)').should('exist').should('have.text', 'Billing Customer')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(3)').should('exist').should('have.text', 'BL #')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(4)').should('exist').should('have.text', 'Job')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(5)').should('exist').should('have.text', 'Last Billed On')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(6)').should('exist').should('have.text', 'Manifest Cargo')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(7)').should('exist').should('have.text', 'Manifest Tons')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(8)').should('exist').should('have.text', 'Manifest Unit')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(9)').should('exist').should('have.text', 'Status')
    cy.wait(500);
    cy.get('#show-filters-main').should('exist')
    cy.wait(500);
    cy.get('.ant-btn-primary').should('exist').should('have.text','Create BL')//will change add button id

}
export const CreateBL = () => {
    cy.get('#Inventory').should('be.visible').should('have.text', 'Inventory').click()
    cy.wait(500);
    cy.get('#cargo-details').should('exist').should('have.text', 'Cargo Details').click()
    cy.wait(500)
    cy.get('.ant-btn-primary').should('exist').should('have.text','Create BL').click()//will change add button id
 cy.wait(500)
    cy.get('.ant-tabs-nav-list').should('exist').should('have.text', 'BL DetailsCargo Details')
    cy.wait(500)
    //add BL
    cy.get('#select_job').should('exist').click({force: true})
    cy.wait(500);
     
  checkRecordExistInDrawer('#select_job_list').then((exists) => {
  cy.log("element exist:", exists)
  if(exists){
    cy.get('#select_job_list_0 .ant-select-item-option-content').eq(0).click({force: true})
         cy.wait(500);
  }
  else{
  cy.log('dropdown not found ')
  }
  })
  cy.get('#input_bl').should('exist').type('54nnb')
    cy.wait(500);
    cy.get('#select_billing_customer').should('exist').click({force: true})
    cy.wait(500);
  checkRecordExistInDrawer('#select_billing_customer_list').then((exists) => {
  cy.log("element exist:", exists)
  if(exists){
    cy.get('#select_billing_customer_list_0 .ant-select-item-option-content').eq(0).click({force: true})
         cy.wait(500);
  }
  else{
  cy.log('dropdown not found ')
  }
  })
    cy.get('#select_notifying_customer').should('exist').click({force: true})
    cy.wait(500);
     
  checkRecordExistInDrawer('#select_notifying_customer_list').then((exists) => {
  cy.log("element exist:", exists)
  if(exists){
    cy.get('#select_notifying_customer_list_0 .ant-select-item-option-content').eq(0).click({force: true})
         cy.wait(500);
  }
  else{
  cy.log('dropdown not found ')
  }
  })
    cy.get('#amount_of_free_days').should('exist').type('2')

cy.get('.ant-modal-footer > .ant-btn-default').should('exist').should('have.text','Cancel')
cy.wait(500)
cy.get('[form="modal-form-1"]').should('exist').should('have.text','Next').click()
cy.wait(500)
cy.get('#manifest_cargo').should('exist').click()
cy.wait(500)
checkRecordExistInDrawer('#manifest_cargo_list').then((exists) => {
    cy.log("element exist:", exists)
    if(exists){
      cy.get('#manifest_cargo_list_0 .ant-select-item-option-content').eq(0).click({force: true})
           cy.wait(500);
    }
    else{
    cy.log('dropdown not found ')
    }
    })

cy.wait(500)
cy.get('#Cargo_0_manifest_tons').should('exist').type('78')
cy.wait(500)
cy.get('#Cargo_0_manifest_tons_unit').should('exist').click({force: true})
cy.wait(500)
// checkRecordExistInDrawer('#Cargo_0_manifest_tons_unit_list').then((exists) => {
//     cy.log("element exist:", exists)
//     if(exists){
//       cy.get('#Cargo_0_manifest_tons_unit_list_0 .ant-select-item-option-content').eq(0).click({force: true})
//            cy.wait(500);
//     }
//     else{
//     cy.log('dropdown not found ')
  
//     }
//     })
    cy.get('#Cargo_0_gross_tons').should('exist').type('56')
    cy.wait(500)
    cy.get('#Cargo_0_gross_tons_unit').should('exist')
    cy.wait(500)
    cy.get('#Cargo_0_manifest_unit').should('exist').type('65')
    cy.wait(500)
    cy.get('#Cargo_0_manifest_unit_unit').should('exist')
    cy.wait(500)
    cy.get('#description').should('exist').type('ytjythr')
    cy.wait(500)
    cy.get('#marks_1').should('exist').type('jjjjjjjjjjjjjjjjjj')
    cy.wait(500)
    cy.get('#length').should('exist').type('56')
    cy.wait(500)
    cy.get('#width').should('exist').type('4')
    cy.wait(500)
    cy.get('#height').should('exist').type('87')
    cy.wait(500)
    cy.get('#size_type').should('exist').click()
    cy.wait(500)
    checkRecordExistInDrawer('#size_type_list').then((exists) => {
        cy.log("element exist:", exists)
        if(exists){
          cy.get('#size_type_list_0 .ant-select-item-option-content').eq(0).click({force: true})
               cy.wait(500);
        }
        else{
        cy.log('dropdown not found ')
      
        }
        })
    cy.get('#hold_new').should('exist').type('5')
    cy.wait(500)
    cy.get('#intended_destination').should('exist').type('657hgbfghjj')
    cy.wait(500)
    cy.get('#intended_destination_note').should('exist').type('6656hgnfgb')
    cy.wait(500)
    cy.get('#exceptions').should('exist').type('kmjnhbgv')
    cy.wait(500)
    cy.get('#Cargo_0_outside_storage').should('exist').click({force: true})
    cy.wait(500)

    
    cy.get('#addCustomer').should('exist').click({force: true})
    cy.wait(500)

}
