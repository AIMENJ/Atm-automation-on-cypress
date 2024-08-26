/// <reference types="cypress" />
import dayjs from 'dayjs'

export const contractList = () => {
  //List 
  cy.get('#Contracts').should('be.visible').should('have.text', 'Contracts').click()
      //contract ID
      cy.get('.ant-table-thead > tr > :nth-child(1)').should('have.text', 'Contract ID')
      cy.wait(500);
      //Customer 
      cy.get('.ant-table-thead > tr > :nth-child(2)').should('have.text', 'Customer')
      cy.wait(500);
       //Sale Rep
      cy.get('.ant-table-thead > tr > :nth-child(3)').should('have.text', 'Sales Rep')
      cy.wait(500);
       //Payment Term
      cy.get('.ant-table-thead > tr > :nth-child(4)').should('have.text', 'Payment Term')
      cy.wait(500);
       //Section
      cy.get('.ant-table-thead > tr > :nth-child(5)').should('have.text', 'Section')
      cy.wait(500);
       //Description 
      cy.get('.ant-table-thead > tr > :nth-child(6)').should('have.text', 'Description')
      cy.wait(500);
       //Status 
      cy.get('.ant-table-thead > tr > [style="text-align: center;"]').should('have.text', 'Status')
      cy.wait(500);
      //Filter button 
      cy.get('[style="position: relative;"] > .ant-btn').should('be.visible')
      cy.wait(500);
      //Add contract button 
      cy.get('#Add_Button_Contracts').should('be.visible')
      cy.wait(500);
}
export const Addcontractform = () => {
    cy.wait(500)
cy.get('#Contracts').should('be.visible').should('have.text', 'Contracts').click()
cy.wait(6000);
cy.getCurrentDate().then((currentDate) => {
cy.getDateSixDaysLater().then((dateSixDaysLater) => {
  cy.wait(500);
  cy.get('#Add_Button_Contracts').click({force: true})
cy.wait(1000);
//Customer 
    cy.wait(500);
    cy.get('#customer').should('exist').click()
        cy.wait(500);
        checkRecordExist().then((exists) => {
        cy.log("element exist:", exists)
          if(exists){ 
          cy.get('#customer_list_0 .ant-select-item-option-content').first().click({force: true})
          cy.wait(500);
     }
     else{
          cy.log('Dropdown not found')
      
     }
     })
 //Sales Rep
cy.wait(500);
cy.get('#sales_rep').should('exist').click()
cy.wait(500);
checkRecordExist().then((exists) => {
cy.log("element exist:", exists)
  if(exists){
  cy.get('#sales_rep_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
}
else{
  cy.log('Dropdown not found')

}
})
  
 
 //Payment Term 
cy.wait(500);
cy.get('#payment_term').should('exist').click()
cy.wait(500);
checkRecordExist().then((exists) => {
cy.log("element exist:", exists)
  if(exists){
  cy.get('#payment_term_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
}
else{
  cy.log('Dropdown not found')
}
})
  cy.wait(500);
//Term from 
cy.get('#term_from').should('exist').type(currentDate)
cy.wait(500);
//Term To
cy.get('#term_to').should('exist').type(dateSixDaysLater)
 cy.wait(500);
 //Section
cy.get('#section').should('exist').click()
cy.wait(500);
checkRecordExist().then((exists) => {
cy.log("element exist:", exists)
  if(exists){
  cy.get('#section_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
}
else{
  cy.log('Dropdown not found')
}
})
  cy.wait(500);

 //At company 
cy.get('#at_company').should('exist').click( {force: true} )
cy.wait(500);
checkRecordExist().then((exists) => {
cy.log("element exist:", exists)
  if(exists){ 
  cy.get('#at_company_list_0 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
}
else{
  cy.log('Dropdown not found')
}
})
cy.wait(1000);
// //Checklist 
 cy.get(':nth-child(8) > label').should('exist')
cy.wait(200);
//Standarized contract
cy.get('#standarized_contract').should('exist').check( {force: true} )
cy.wait(500);
//High water provision 
cy.get('#high_water_provision').should('exist').check({force: true})
cy.wait(500);
//Fuel Escalator
cy.get('#fuel_escalator').should('exist').check()
 cy.wait(200);
 //Max demurrage rate
 cy.get('#max_demurrage_rate').scrollIntoView().should('exist').check()
 cy.wait(200);
 //Description 
 cy.get('#description').should('exist').type('Read contract before add carefull')
 cy.wait(200);
// //Status 
cy.get('#status').should('exist').click({force: true})
    cy.wait(500);
    checkRecordExist().then((exists) => {
    cy.log("element exist:", exists)
      if(exists){
      cy.get('#status_list_0 .ant-select-item-option-content').first().click({force: true})
      cy.wait(500);
 }
 else{
      cy.log('Dropdown not found')
 }
 })
      cy.wait(500);
//  //Cancel button 
cy.get('#cancel_Contracts').should('exist').should('have.text', 'Cancel')
 cy.wait(500);
 //Add button 
 cy.get('#add_Contracts').should('exist').click()
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
function checkRecordExistInDrawer(table_id) {
  return new Cypress.Promise((resolve) => {
    cy.get(table_id).within(($drawer) => {
      const elementExist = $drawer[0].querySelector(".ant-empty-description") !== null;
      cy.log(elementExist);
      resolve(!elementExist);
    });
  });
}
export const DeleteContract = () => {
    cy.get('#Contracts').should('be.visible').should('have.text', 'Contracts').click()
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
     cy.get('#Contracts-menu-0').click()
cy.wait(200);
cy.get('#delete_button_Contracts').click({force: true} )
cy.get('#ok-button').click({force: true} )
cy.get('#cancel-button').should('exist')
 });
}
else{
  cy.log('recode not found ')
 }
})  
 })
}
 export const UpdateContract = () => {
    cy.wait(500)
    cy.get('#Contracts').should('be.visible').should('have.text', 'Contracts').click()
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
    cy.get('#Contracts-menu-0').click()
// cy.get('.table-dropdown').first().click()
 cy.wait(5000);
 cy.get('#update_form_Contracts').click({force: true})
cy.wait(1000);
 //customer
 cy.get('#customer').should('exist').click({force: true})
 cy.wait(500);
 checkRecordExist().then((exists) => {
 cy.log("element exist:", exists)
   if(exists){ 
   cy.get('#customer_list_1 .ant-select-item-option-content').first().click({force: true})
   cy.wait(500);
}
else{
   cy.log('Dropdown not found')

}
})
//Sales Rep
cy.wait(500);
cy.get('#sales_rep').should('exist').click({force: true})
cy.wait(500);
checkRecordExist().then((exists) => {
cy.log("element exist:", exists)
if(exists){
cy.get('#sales_rep_list_1 .ant-select-item-option-content').first().click({force: true})
cy.wait(500);
}
else{
cy.log('Dropdown not found')

}
})


//Payment Term 
cy.wait(500);
cy.get('#payment_term').should('exist').click({force: true})
cy.wait(500);
checkRecordExist().then((exists) => {
cy.log("element exist:", exists)
if(exists){
cy.get('#payment_term_list_1 .ant-select-item-option-content').first().click({force: true})
cy.wait(500);
}
else{
cy.log('Dropdown not found')
}
})

//Term from 
cy.get('#term_from').should('exist').clear({force: true}).type(currentDate)
cy.wait(200);
//Term To
cy.get('#term_to').should('exist').clear({force: true}).type(dateSixDaysLater)
 cy.wait(200);
 //Section
 cy.get('#section').should('exist').click({force: true})
cy.wait(500);
checkRecordExist().then((exists) => {
cy.log("element exist:", exists)
  if(exists){
  cy.get('#section_list_1 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
}
else{
  cy.log('Dropdown not found')
}
})
  cy.wait(500);

 //At company 
cy.get('#at_company').should('exist').click( {force: true} )
cy.wait(500);
checkRecordExist().then((exists) => {
cy.log("element exist:", exists)
  if(exists){ 
  cy.get('#at_company_list_1 .ant-select-item-option-content').first().click({force: true})
  cy.wait(500);
}
else{
  cy.log('Dropdown not found')
}
})

// //Checklist 
 cy.get(':nth-child(8) > label').should('exist')
cy.wait(200);
//Standarized contract
cy.get('#standarized_contract').should('exist').uncheck({force: true})
cy.wait(500);
//High water provision 
cy.get('#high_water_provision').should('exist').uncheck( {force: true} )
cy.wait(500);
//Fuel Escalator
cy.get('#fuel_escalator').should('exist').uncheck({force: true} )
 cy.wait(200);
 //Max demurrage rate
 cy.get('#max_demurrage_rate').scrollIntoView().should('exist').uncheck({force: true} )
 cy.wait(200);
 //Description 
 cy.get('#description').should('exist').clear({force: true}).type('Read contract before add',{force: true} )
 cy.wait(200);
// //Status 
cy.get('#status').should('exist').click({force: true})
    cy.wait(500);
    checkRecordExist().then((exists) => {
    cy.log("element exist:", exists)
      if(exists){
      cy.get('#status_list_1 .ant-select-item-option-content').first().click({force: true})
      cy.wait(500);
 }
 else{
      cy.log('Dropdown not found')
 }
 })
 //Cancel button 
 cy.get('#cancel_Contracts').should('exist').should('have.text', 'Cancel')
 cy.wait(200);
 //Add button 
 cy.get('#update_Contracts').should('exist').click({force: true})
 cy.wait(500);
});
}else{
            cy.log('recode not found ')
}})
    })  
  })  
})  
 }
  export const contractDetails = () => {
  cy.wait(500)
  cy.get('#rc-tabs-0-tab-Details').click()
   cy.wait(500)
  cy.get(':nth-child(1) > .label').should('be.visible').should('have.text','Term From - To')
  cy.wait(500);
  cy.get(':nth-child(2) > .label').should('be.visible').should('have.text','Sales Rep')
  cy.wait(500);
  cy.get(':nth-child(3) > .label').should('be.visible').should('have.text','At Company')
  cy.wait(500);
  cy.get(':nth-child(4) > .label').should('be.visible').should('have.text','Payment Term')
  cy.wait(500);
  //contract status coment
  cy.get('[style="margin-left: -15px; margin-right: -15px;"] > :nth-child(1) > h5').should('be.visible').should('have.text','Contract Status Comment')
  cy.wait(500);
  //contract status coment box
  cy.get('.ant-input').should('be.visible')
  cy.wait(500);
  //checklist
  cy.get(':nth-child(2) > h5').should('be.visible').should('have.text','Checklist')
  cy.wait(500);
  cy.get(':nth-child(1) > :nth-child(1) > label').should('be.visible').should('have.text','  Standarized Contract')
  cy.wait(500);
  cy.get(':nth-child(1) > :nth-child(2) > label').should('be.visible').should('have.text','  High Water Provision')
  cy.wait(500);
  cy.get('uncheck-list > :nth-child(2) > :nth-child(1) > label').should('be.visible').should('have.text','  Fuel Escalator')
  cy.wait(500);
  cy.get('.check-list > :nth-child(2) > :nth-child(2) > label').should('be.visible').should('have.text', '  Max Demurrage Rate')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-col > .card-light').scrollIntoView().should('be.visible')
  cy.wait(500);
  cy.get(':nth-child(5) > .ant-col > .card-light').should('be.visible')//Sub Group Description
  cy.wait(500);
    }
  export const  stevedoeingRate = () => {
  cy.get('[id="rc-tabs-0-tab-Stevedoring Rates"]').click({force: true})
  cy.wait(500);
  //list
  cy.get('.data-info').should ('exist')
  cy.wait(500);
  cy.get('#Add_Button_Tab_Stevedoring_Rates').should('be.visible').should('have.text','Add Stevedoring Rate')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('be.visible').should('have.text','Revenue Type')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('be.visible').should('have.text','Cargo')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('be.visible').should('have.text','Tons From')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('be.visible').should('have.text','Tons To')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(5)').should('be.visible').should('have.text','Tons Type')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(6)').should('be.visible').should('have.text','Market Rate')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(7)').scrollIntoView().should('be.visible').should('have.text','Rate')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(8)').should('be.visible').should('have.text','Rate Type')
  cy.wait(500);
  cy.get('.ant-table-thead > tr > :nth-child(9)').should('be.visible').should('have.text','Comment')
  cy.wait(1000);
  //add form
  cy.get('#Add_Button_Tab_Stevedoring_Rates').should('exist').should('have.text','Add Stevedoring Rate').click( {force: true})
  cy.wait(1000);
  cy.get('#revenue_type').should('exist').click()
  cy.wait(500);
  checkRecordExistInDrawer('#revenue_type_list').then((exists) => {
  cy.log("element exist:", exists)
    if(exists){
      cy.wait(500);
    cy.get('#revenue_type_list_0 .ant-select-item-option-content').eq(0).click({force: true})
    cy.wait(500);
}
else{
    cy.log('Dropdown not found')
}
})
cy.get('#cargo').should('exist').click({force: true})
cy.wait(500);
checkRecordExistInDrawer('#cargo_list').then((exists) => {
cy.log("element exist:", exists)
  if(exists){
    cy.wait(500);
  cy.get('#cargo_list_0 .ant-select-item-option-content').eq(0).click({force: true})
  cy.wait(500);
}
else{
  cy.log('Dropdown not found')

}
})
  cy.wait(500);
  cy.get('#tons_from').should('exist').type('10', {force: true})
  cy.wait(500);
  cy.get('#tons_to').should('exist').type('1000')
  cy.wait(500);
  cy.get('#tons_type').should('exist').click()
  cy.wait(500);
  checkRecordExistInDrawer('#tons_type_list').then((exists) => {
  cy.log("element exist:", exists)
    if(exists){
      cy.wait(500);
    cy.get('#tons_type_list_0 .ant-select-item-option-content').eq(0).click({force: true})
    cy.wait(500);
  }
  else{
    cy.log('Dropdown not found')

  }
  })
    cy.wait(500);
  cy.get('#market_rate').should('exist').type('1000', {force: true})
  cy.wait(500);
  cy.get('#rate').should('exist').type('1000', {force: true})
  cy.wait(500);
  cy.get('#rate_type').should('exist').click({force: true})//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  checkRecordExistInDrawer('#rate_type_list').then((exists) => {
  cy.log("element exist:", exists)
    if(exists){
      cy.wait(500);
    cy.get('#rate_type_list_0 .ant-select-item-option-content').eq(0).click({force: true})
    cy.wait(500);
  }
  else{
    cy.log('Dropdown not found')
  
  }
  })
  cy.wait(500);
  cy.get('#comment').should('exist').type('Read form before click on save button',{force: true})
  cy.wait(500);
  //cancel button
  cy.get('#cancel_Stevedoring_Rates').should('exist') 
  cy.wait(500);
  //add button
  cy.get('#add_Stevedoring_Rates').should('have.text','Add Stevedoring Rate')
  .should('exist').click()
    cy.wait(500);

}
  export const  stevedoeingRateUpdate = () => {
  cy.get('[id="rc-tabs-0-tab-Stevedoring Rates"]').click({force: true})
  cy.wait(1500);
    checkRecordExistInDrawer('#Stevedoring_Rates_table').then
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
            cy.wait(500);
            // Ensure correct document context
            cy.document().then((doc) => {
              const body = doc.querySelector('body');
              if (body) {
                cy.wrap(body).within(() => {
                  cy.get('#update_form_Stevedoring_Rates', { timeout: 50000 })
                    .should('exist')
                    .should('be.visible')
                    .click({ force: true });

                    cy.get('#revenue_type').should('exist').click({force: true} )
                    cy.wait(500);
                    checkRecordExistInDrawer('#revenue_type_list').then((exists) => {
                    cy.log("element exist:", exists)
                      if(exists){
                          
                      cy.get('#revenue_type_list_1 .ant-select-item-option-content').first().click({force: true})
                      cy.wait(500);
                  }
                  else{
                      cy.log('Dropdown not found')
                  }
                  })
                  cy.get('#cargo').should('exist').click({force: true})//.type('Plains',{force: true}).type('{enter}')
                  cy.wait(500);
                  checkRecordExistInDrawer('#cargo_list').then((exists) => {
                  cy.log("element exist:", exists)
                    if(exists){
                        
                    cy.get('#cargo_list_1 .ant-select-item-option-content').first().click({force: true})
                    cy.wait(500);
                  }
                  else{
                    cy.log('Dropdown not found')
                  
                  }
                  })
                    cy.wait(500);
                    cy.get('#tons_from').should('exist').clear().type('103', {force: true})
                    cy.wait(500);
                    cy.get('#tons_to').should('exist').clear().type('5000')
                    cy.wait(500);
                    cy.get('#tons_type').should('exist').clear({force: true} ).click({force: true} )
                    cy.wait(500);
                    checkRecordExistInDrawer('#tons_type_list').then((exists) => {
                    cy.log("element exist:", exists)
                      if(exists){
                      cy.get('#tons_type_list_1 .ant-select-item-option-content').first().click({force: true})
                      cy.wait(500);
                    }
                    else{
                      cy.log('Dropdown not found')
                  
                    }
                    })
                      cy.wait(500);
                    cy.get('#market_rate').should('exist').clear().type('10430', {force: true})
                    cy.wait(500);
                    cy.get('#rate').should('exist').clear().type('145', {force: true})
                    cy.wait(500);
                    cy.get('#rate_type').should('exist').click({force: true})//.type('Plains',{force: true}).type('{enter}')
                    cy.wait(500);
                    checkRecordExistInDrawer('#rate_type_list').then((exists) => {
                    cy.log("element exist:", exists)
                      if(exists){
                          
                      cy.get('#rate_type_list_1 .ant-select-item-option-content').first().click({force: true})
                      cy.wait(500);
                    }
                    else{
                      cy.log('Dropdown not found')
                    
                    }
                    })
                    cy.wait(500);
                    cy.get('#comment').should('exist').clear().type('Read carefull form before click on save button',{force: true})
                  cy.wait(500);
                  cy.get('#cancel_Stevedoring_Rates').should('exist')
                  cy.wait(500);
                  cy.get('#update_Stevedoring_Rates').click()
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
  export const stevedoeingRateDelete = () => {
  cy.get('[id="rc-tabs-0-tab-Stevedoring Rates"]').click({force: true})
  cy.wait(1500);
    checkRecordExistInDrawer('#Stevedoring_Rates_table').then
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
            cy.wait(500);
            // Ensure correct document context
            cy.document().then((doc) => {
              const body = doc.querySelector('body');
              if (body) {
                cy.wrap(body).within(() => {
                  cy.get('#delete_button_Stevedoring_Rates', { timeout: 50000 })
                    .should('exist')
                    .should('be.visible')
                    .click({ force: true });
                  cy.wait(500);
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
export const ContractOpenDawer = () => {
  cy.wait(1000)
  cy.get('#Contracts').should('be.visible').should('have.text', 'Contracts').click()
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
 cy.get('td[class="ant-table-cell"]').eq(0).click({ force: true });
  });
 }
 else{
   cy.log('recode not found ')
  }
 })  
})
}
export const StorageRates = () => {


  cy.get('[id="rc-tabs-0-tab-StorageRates"]').click({force: true})
  cy.wait(500);
  //list
  cy.get('.data-info').should ('exist')
  cy.wait(500);
  cy.get('#Add_Button_Tab_Storage_Rates').should ('be.visible').should('have.text', 'Add Storage Rate')
 // cy.get('#Add_Button').should ('exist').should('have.text', 'Add')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('be.visible').should('have.text','Revenue Type')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('be.visible').should('have.text','Cargo')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('be.visible').should('have.text','Tons From')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('be.visible').should('have.text','Tons To')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(5)').should('be.visible').should('have.text','Tons Type')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(6)').should('be.visible').should('have.text','Market Rate')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(7)').scrollIntoView().should('be.visible').should('have.text','Rate')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(8)').scrollIntoView().should('be.visible').should('have.text','Rate Type')
  cy.wait(500);
  cy.get('.ant-table-thead > tr > :nth-child(9)').should('be.visible').should('have.text','Comment')
  cy.wait(500);
  //Add form storage rate
  cy.get('#Add_Button_Tab_Storage_Rates').should('exist').should('have.text','Add Storage Rate').click( {force: true})
  cy.wait(1000);
  cy.get('#revenue_type').should('exist').click()
  cy.wait(500);
  checkRecordExistInDrawer('#revenue_type_list').then((exists) => {
  cy.log("element exist:", exists)
    if(exists){
      cy.wait(500);
    cy.get('#revenue_type_list_0 .ant-select-item-option-content').eq(0).click({force: true})
    cy.wait(500);
}
else{
    cy.log('Dropdown not found')
}
})
cy.get('#cargo').should('exist').click({force: true})
cy.wait(500);
checkRecordExistInDrawer('#cargo_list').then((exists) => {
cy.log("element exist:", exists)
  if(exists){
    cy.wait(500);
  cy.get('#cargo_list_0 .ant-select-item-option-content').eq(0).click({force: true})
  cy.wait(500);
}
else{
  cy.log('Dropdown not found')

}
})
  cy.wait(500);
  cy.get('#tons_from').should('exist').type('10', {force: true})
  cy.wait(500);
  cy.get('#tons_to').should('exist').type('1000')
  cy.wait(500);
  cy.get('#tons_type').should('exist').click()
  cy.wait(500);
  checkRecordExistInDrawer('#tons_type_list').then((exists) => {
  cy.log("element exist:", exists)
    if(exists){
      cy.wait(500);
    cy.get('#tons_type_list_0 .ant-select-item-option-content').eq(0).click({force: true})
    cy.wait(500);
  }
  else{
    cy.log('Dropdown not found')

  }
  })
    cy.wait(500);
  cy.get('#market_rate').should('exist').type('1000', {force: true})
  cy.wait(500);
  cy.get('#rate').should('exist').type('1000', {force: true})
  cy.wait(500);
  cy.get('#rate_type').should('exist').click({force: true})//.type('Plains',{force: true}).type('{enter}')
  cy.wait(500);
  checkRecordExistInDrawer('#rate_type_list').then((exists) => {
  cy.log("element exist:", exists)
    if(exists){
      cy.wait(500);
    cy.get('#rate_type_list_0 .ant-select-item-option-content').eq(0).click({force: true})
    cy.wait(500);
  }
  else{
    cy.log('Dropdown not found')
  
  }
  })
  cy.wait(500);
  cy.get('#comment').should('exist').type('Read form before click on save button',{force: true})
  cy.wait(500); //cancel button
  cy.get('#cancel_Storage_Rates').should('exist') 
  cy.wait(500);
  //add button
  cy.get('#add_Storage_Rates').should('have.text','Add Storage Rate')
  .should('exist').click()
    cy.wait(500);
}
export const StorageRatesUpdate = () => {
  cy.get('[id="rc-tabs-0-tab-StorageRates"]').click({force: true})
  cy.wait(1500);
  checkRecordExistInDrawer('#Storage_Rates_table').then
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
          cy.get('#Storage_Rates-tab-menu-0').click();
          cy.wait(500);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#update_form_Storage_Rates', { timeout: 50000 })
                  .should('exist')
                  .should('be.visible')
                  .click({ force: true });
                cy.wait(1000);
                cy.get('#revenue_type').should('exist').click({force: true} )
                cy.wait(500);
                checkRecordExistInDrawer('#revenue_type_list').then((exists) => {
                cy.log("element exist:", exists)
                  if(exists){
                      
                  cy.get('#revenue_type_list_1 .ant-select-item-option-content').first().click({force: true})
                  cy.wait(500);
              }
              else{
                  cy.log('Dropdown not found')
              }
              })
              cy.get('#cargo').should('exist').click({force: true})//.type('Plains',{force: true}).type('{enter}')
              cy.wait(500);
              checkRecordExistInDrawer('#cargo_list').then((exists) => {
              cy.log("element exist:", exists)
                if(exists){
                    
                cy.get('#cargo_list_1 .ant-select-item-option-content').first().click({force: true})
                cy.wait(500);
              }
              else{
                cy.log('Dropdown not found')
              
              }
              })
                cy.wait(500);
                cy.get('#tons_from').should('exist').clear().type('103', {force: true})
                cy.wait(500);
                cy.get('#tons_to').should('exist').clear().type('5000')
                cy.wait(500);
                cy.get('#tons_type').should('exist').clear({force: true} ).click({force: true} )
                cy.wait(500);
                checkRecordExistInDrawer('#tons_type_list').then((exists) => {
                cy.log("element exist:", exists)
                  if(exists){
                  cy.get('#tons_type_list_1 .ant-select-item-option-content').first().click({force: true})
                  cy.wait(500);
                }
                else{
                  cy.log('Dropdown not found')
              
                }
                })
                  cy.wait(500);
                cy.get('#market_rate').should('exist').clear().type('10430', {force: true})
                cy.wait(500);
                cy.get('#rate').should('exist').clear().type('145', {force: true})
                cy.wait(500);
                cy.get('#rate_type').should('exist').click({force: true})//.type('Plains',{force: true}).type('{enter}')
                cy.wait(500);
                checkRecordExistInDrawer('#rate_type_list').then((exists) => {
                cy.log("element exist:", exists)
                  if(exists){
                      
                  cy.get('#rate_type_list_1 .ant-select-item-option-content').first().click({force: true})
                  cy.wait(500);
                }
                else{
                  cy.log('Dropdown not found')
                
                }
                })
                cy.wait(500);
                cy.get('#comment').should('exist').clear().type('Read carefull form before click on save button',{force: true})
              cy.wait(500);
              cy.get('#cancel_Storage_Rates').should('exist')
                cy.wait(500);
                cy.get('#update_Storage_Rates').click()
                
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
  export const StorageRatesDelete = () => {
  cy.get('[id="rc-tabs-0-tab-StorageRates"]').click({force: true})
  cy.wait(1500);
  checkRecordExistInDrawer('#Storage_Rates_table').then
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
          cy.get('#Storage_Rates-tab-menu-0').click();
          cy.wait(500);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#delete_button_Storage_Rates', { timeout: 50000 })
                  .should('exist')
                  .should('be.visible')
                  .click({ force: true });
                cy.wait(500);
                cy.get('#cancel-button').should('exist')
                cy.wait(500);
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
  export const GuaranteeAmount = () => {
  cy.get('#rc-tabs-0-tab-KEY23076').click()
  cy.wait(1000);
  cy.get('.data-info').should('exist')
  cy.wait(500);
  cy.get('#Add_Button_Tab_Guarantee_Amounts').should('be.visible').should('have.text','Add Guarantee Amount')
  cy.wait(1000);
  //list
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('be.visible').should('have.text','Cargo')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('be.visible').should('have.text','Contracts')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('be.visible').should('have.text','Guarantee Amount')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('be.visible').should('have.text','Max')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(5)').should('be.visible').should('have.text','Min')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(6)').should('be.visible').should('have.text','Tons Type')
  cy.wait(500);
  //add form
  cy.get('#Add_Button_Tab_Guarantee_Amounts').should('exist').should('have.text','Add Guarantee Amount').click( {force: true})
  cy.wait(1000);
  cy.get('#cargo').should('exist').click({force: true})//.type('Plains',{force: true}).type('{enter}')
cy.wait(500);
checkRecordExistInDrawer('#cargo_list').then((exists) => {
cy.log("element exist:", exists)
  if(exists){
    cy.wait(500); 
  cy.get('#cargo_list_0 .ant-select-item-option-content').eq(0).click({force: true})
  cy.wait(500);
}
else{
  cy.log('Dropdown not found')

}
})
cy.wait(500)
  cy.get('#min').should('exist').type('10')
  cy.wait(500);
  cy.get('#max').should('exist').type('1000')
  cy.wait(500);
  cy.get('#tons_type').should('exist').click()
  cy.wait(500);
  checkRecordExistInDrawer('#tons_type_list').then((exists) => {
  cy.log("element exist:", exists)
    if(exists){
      cy.wait(500);
    cy.get('#tons_type_list_0 .ant-select-item-option-content').eq(0).click({force: true})
    cy.wait(500);
  }
  else{
    cy.log('Dropdown not found')

  }
  })
    
  cy.wait(500);
  cy.get('#guarantee_amount').should('exist').type('1000.67',  {force: true})
  cy.wait(500);
  cy.get('#cancel_Guarantee_Amounts').should('be.visible')
  cy.wait(500);
  cy.get('#add_Guarantee_Amounts').should('be.visible').click() 
  cy.wait(500);

}
export const GuaranteeAmountUpdate = () => {
  cy.get('#rc-tabs-0-tab-KEY23076').click({ force: true })
  cy.wait(1500);
  checkRecordExistInDrawer('#Guarantee_Amounts_table').then
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
          cy.get('#Guarantee_Amounts-tab-menu-0').click();
          cy.wait(500);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#update_form_Guarantee_Amounts', { timeout: 50000 })
                  .should('exist')
                  .should('be.visible')
                  .click({ force: true });
                cy.wait(500);
                 
                cy.wait(500);
                cy.get('#cargo').should('exist').click({force: true})//.type('Plains',{force: true}).type('{enter}')
              cy.wait(500);
              checkRecordExistInDrawer('#cargo_list').then((exists) => {
              cy.log("element exist:", exists)
                if(exists){
                    
                cy.get('#cargo_list_1 .ant-select-item-option-content').first().click({force: true})
                cy.wait(500);
              }
              else{
                cy.log('Dropdown not found')
              
              }
              })
              cy.wait(500)
                cy.get('#min').should('exist').clear().type('10432')
                cy.wait(500);
                cy.get('#max').should('exist').clear().type('1004320')
                cy.wait(500);
                cy.get('#tons_type').should('exist').click({force: true})
                cy.wait(500);
                checkRecordExistInDrawer('#tons_type_list').then((exists) => {
                cy.log("element exist:", exists)
                  if(exists){
                  cy.get('#tons_type_list_1 .ant-select-item-option-content').first().click({force: true})
                  cy.wait(500);
                }
                else{
                  cy.log('Dropdown not found')
              
                }
                })
                  
                cy.wait(500);
                cy.get('#guarantee_amount').should('exist').clear().type('10400.67',  {force: true})
                cy.wait(500);

                cy.get('#cancel_Guarantee_Amounts').should('exist')
                cy.wait(500);

                cy.get('#update_Guarantee_Amounts').should('exist').click()
                cy.wait(500);

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
export const GuaranteeAmountDelete = () => {
  cy.get('#rc-tabs-0-tab-KEY23076').click()
  cy.wait(1500);
  checkRecordExistInDrawer('#Guarantee_Amounts_table').then
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
          cy.get('#Guarantee_Amounts-tab-menu-0').click();
          cy.wait(500);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#delete_button_Guarantee_Amounts', { timeout: 50000 })
                  .should('exist')
                  .should('be.visible')
                  .click({ force: true });
                cy.wait(500);
                cy.get('#cancel-button').should('exist')
                cy.wait(500);
                cy.get('#ok-button').click()
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
  export const AddContractNote = () => {
  cy.get('#rc-tabs-0-tab-KEY23077').click()
  cy.wait(1500);
  cy.get('.data-info').should('exist')
  cy.wait(500);
  cy.get('#Add_Button_Tab_Contract_Notes').should('be.visible').should('have.text','Add Contract Note')
  cy.wait(1500);
  //list
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('be.visible').should('have.text','Note Type')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('be.visible').should('have.text','Note')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('be.visible').should('have.text',' Date Added')
  cy.wait(1500);
  //add form
  cy.get('#Add_Button_Tab_Contract_Notes').should('exist').should('have.text','Add Contract Note').click( {force: true})
  cy.wait(1500);
  cy.get('#note_type').should('exist').click({force: true})
  cy.wait(500);
  checkRecordExistInDrawer('#note_type_list').then((exists) => {
  cy.log("element exist:", exists)
    if(exists){
      cy.wait(500);
    cy.get('#note_type_list_0 .ant-select-item-option-content').eq(0).click({force: true})
    cy.wait(500);
}
else{
    cy.log('Dropdown not found')

}
})
  cy.wait(500);
  cy.get('#note').should('exist').clear().type('fdsjhs hdsbagkjsh')
  cy.wait(500);
  cy.get('#cancel_Contract_Notes').should('be.visible')
  cy.wait(500);
  cy.get('#add_Contract_Notes').should('be.visible').click() 
  cy.wait(500);
}
  export const UpdateContractNote = () => {
    cy.get('#rc-tabs-0-tab-KEY23077').click()
    cy.wait(1500);
    checkRecordExistInDrawer('#Contract_Notes_table').then
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
            cy.get('#Contract_Notes-tab-menu-0 ').click();
            cy.wait(500);
            // Ensure correct document context
            cy.document().then((doc) => {
              const body = doc.querySelector('body');
              if (body) {
                cy.wrap(body).within(() => {
                  cy.get('#update_form_Contract_Notes', { timeout: 50000 })
                    .should('exist')
                    .should('be.visible')
                    .click({ force: true });
                  cy.wait(500);

                  cy.get('#note_type').should('exist').click({force: true})
                  cy.wait(500);
                  checkRecordExistInDrawer('#note_type_list').then((exists) => {
                  cy.log("element exist:", exists)
                    if(exists){
                      cy.wait(500); 
                    cy.get('#note_type_list_1 .ant-select-item-option-content').first().click({force: true})
                    cy.wait(500);
                }
                else{
                    cy.log('Dropdown not found')
                
                }
                })

                  cy.get('#note').type('hbajbwd')
                  cy.wait(500);
                  cy.get('#cancel_Contract_Notes').should('exist')
                  cy.wait(500);
                  cy.get('#update_Contract_Notes').click()
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

export const DeleteContractNote = () => {
  cy.get('#rc-tabs-0-tab-KEY23077').click()
  cy.wait(1500);
  checkRecordExistInDrawer('#Contract_Notes_table').then
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
          cy.get('#Contract_Notes-tab-menu-0 ').click({force: true});
          cy.wait(500);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#delete_button_Contract_Notes', { timeout: 50000 })
                  .should('exist')
                  .should('be.visible')
                  .click({ force: true });
                cy.wait(500);
                cy.wait(500);
                cy.get('#cancel-button').should('exist')
                cy.wait(500);
                cy.get('#ok-button').click()
              
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
Cypress.Commands.add('getCurrentDate', () => {
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
  return currentDate;
});
 
Cypress.Commands.add('getDateSixDaysLater', () => {
  const dateSixDaysLater = dayjs().add(6, 'day').format('YYYY-MM-DD HH:mm:ss');
  return dateSixDaysLater;
});