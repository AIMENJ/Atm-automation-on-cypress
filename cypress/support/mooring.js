/// <reference types="cypress" />

import dayjs from 'dayjs'
function checkRecordExistInDrawer(table_id) {
    return new Cypress.Promise((resolve) => {
      cy.get(table_id).within(($drawer) => {
        const elementExist = $drawer[0].querySelector(".ant-empty-description") !== null;
        cy.log(elementExist);
        resolve(!elementExist);
      });
    });
  }
  function checkRecordeExist() {
    return new Cypress.Promise((resolve, reject) => {
      cy.document().then((doc) => {
        const elementExist = doc.querySelector(".ant-empty-description") !== null
        cy.log(elementExist)
        resolve(!elementExist)
      })
    })
  }
export const MooringList = () => {
    cy.get('#Mooring').should('be.visible').should('have.text', 'Mooring').click()
    cy.wait(500);
    cy.get('#Mooring_table').should('exist')
    cy.wait(500)
    cy.get('.ant-table-thead > tr > :nth-child(1)').should('have.text', 'Job Master ID')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(2)').should('have.text', 'Vessel Name')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(3)').should('have.text', 'Agent')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(4)').should('have.text', 'Location')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(5)').should('have.text', 'Scheduled Mooring')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(6)').should('have.text', 'Mooring Start')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(7)').scrollIntoView().should('have.text', 'Mooring End')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(8)').should('have.text', 'Scheduled Unmooring')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(9)').should('have.text', 'Unmooring Start')
    cy.wait(500);
    cy.get('.ant-table-thead > tr > :nth-child(10)').should('have.text', 'Unmooring End')
    cy.wait(500);
    cy.get('#show-filters-main').should('exist')
    cy.wait(500);
    cy.get('#Add_Add_New_Mooring').should('exist').should('have.text','Add New Mooring')
         }
        
         export const AddMooring = () => {
            cy.getCurrentDate().then((currentDate) => {
                cy.getDateSixDaysLater().then((dateSixDaysLater) => {
            cy.get('#Mooring').should('exist').should('have.text', 'Mooring').click()
            cy.wait(500);
            cy.get('#Add_Add_New_Mooring').should('exist').should('have.text','Add New Mooring').click()
            cy.wait(7000);
            cy.get('.ant-tabs-nav').should('exist').should('have.text', 'Mooring DetailsFuel SurchargeNo Fuel Surcharge')
            cy.wait(500);
            //Mooring Details
            cy.get('#vessel_name').should('exist').type('Sea Vessel')
            cy.wait(500);
            cy.get('#vessel_grt').should('exist').type('56')
            cy.wait(500);
            cy.get('#agent').should('exist').click()
            cy.wait(500);
            checkRecordExistInDrawer('#agent_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#agent_list_0 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            }) 
            cy.wait(500);
            cy.get('#location').should('exist').click()
            cy.wait(500);
            checkRecordExistInDrawer('#location_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#location_list_0 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            }) 
            cy.wait(500);
            cy.get('#billing_company').should('exist').click()
            cy.wait(500);
            checkRecordExistInDrawer('#billing_company_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#billing_company_list_0 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            }) 
            cy.wait(500);
            cy.get('#billing_customer').should('exist').click()
            cy.wait(500);
            checkRecordExistInDrawer('#billing_customer_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#billing_customer_list_0 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            }) 
            cy.wait(500);
            cy.get('#acct_month').should('exist').click()
            cy.wait(500);
            checkRecordExistInDrawer('#acct_month_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#acct_month_list_0 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            })
            cy.wait(500);
            cy.get('#acct_year').should('exist').type('2024')
            cy.wait(500);
            cy.get('#associated_job').should('exist').click()
            cy.wait(500);
            checkRecordExistInDrawer('#associated_job_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#associated_job_list_0 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            })
            cy.wait(500);
            cy.get('#ordered_mooring').should('exist').type(currentDate)
            cy.wait(500);
            cy.get('#scheduled_mooring').should('exist').type(currentDate)
            cy.wait(500);
            cy.get('#mooring_start').should('exist').type(currentDate)
            cy.wait(500);
            cy.get('#mooring_end').should('exist').type(dateSixDaysLater)
            cy.wait(500);
            cy.get('#ordered_unmooring').should('exist').type(currentDate)
            cy.wait(500);
            cy.get('#scheduled_unmooring').scrollIntoView().should('exist').type(currentDate)
            cy.wait(500);
            cy.get('#unmooring_start').should('exist').type(currentDate)
            cy.wait(500);
            cy.get('#unmooring_end').should('exist').type(dateSixDaysLater)
            cy.wait(500);
            cy.get('#special_start').should('exist').type(currentDate)
            cy.wait(500);
            cy.get('#special_end').should('exist').type(dateSixDaysLater)
            cy.wait(500);
            cy.get('#standby_start').should('exist').type(currentDate)
            cy.wait(500);
            cy.get('#standby_end').should('exist').type(dateSixDaysLater)
            cy.wait(500);
            cy.get('#discount').should('exist').type('15')
            cy.wait(500);
            cy.get('#invoice_date').should('exist').type(currentDate)
            cy.wait(500);
            cy.get('#comment_to_agent').should('exist').type('Add Correct dates')
            cy.wait(500);
            cy.get('#cancel').should('exist').should('have.text','Cancel')
            cy.wait(500);
            cy.get('#next').should('exist').should('have.text','Next').click()
          //  cy.wait(500);
            // //fuel surcharge
        
            cy.wait(6000);
            cy.get('#Fuel_Surcharge_revenue_type_0').should('exist').click({force: true})
            cy.wait(500);
            checkRecordExistInDrawer('#Fuel_Surcharge_revenue_type_0_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#Fuel_Surcharge_revenue_type_0_list_0 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            })
            cy.wait(500);
            cy.get('#fuel_surcharges_0_units').should('exist').type('34')
            cy.wait(500);
            cy.get('#fuel_surcharges_0_unit_type').click({force: true})
            // cy.wait(500);
            // checkRecordExistInDrawer('#fuel_surcharges_0_unit_type_list').then((exists) => {
            // cy.log("element exist:", exists)
            // if(exists){
            // cy.get('#fuel_surcharges_0_unit_type_list_0 .ant-select-item-option-content').click({force: true})
            // cy.wait(500);
            // }
            // else{
            // cy.log('dropdown not found ')
            // }
            // })
            cy.wait(500);
            cy.get('#Fuel_Surcharge_rate_0').should('exist').type('3')
            cy.wait(500);
            cy.get('#Fuel_Surcharge_discount_0').should('exist').type('23')
            cy.wait(500);
            cy.get('#Fuel_Surcharge_total_0').should('exist')
            cy.wait(500);
            cy.get('#fuel_surcharges_0_comment').should('exist').type('asbdnbdf')
            cy.wait(500);

            cy.get(':nth-child(7) > .ant-btn').click()

            cy.wait(1000);
            cy.get('#Fuel_Surcharge_revenue_type_1').should('exist').click({force: true})
            cy.wait(500);
            checkRecordExistInDrawer('#Fuel_Surcharge_revenue_type_1_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#Fuel_Surcharge_revenue_type_1_list_0 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            })
            cy.wait(500);
            cy.get('#fuel_surcharges_1_units').should('exist').type('34')
            cy.wait(500);
            cy.get('#fuel_surcharges_1_unit_type').click({force: true})
            // cy.wait(500);
            // checkRecordExistInDrawer('#fuel_surcharges_0_unit_type_list').then((exists) => {
            // cy.log("element exist:", exists)
            // if(exists){
            // cy.get('#fuel_surcharges_0_unit_type_list_0 .ant-select-item-option-content').click({force: true})
            // cy.wait(500);
            // }
            // else{
            // cy.log('dropdown not found ')
            // }
            // })
            cy.wait(500);
            cy.get('#Fuel_Surcharge_rate_1').should('exist').type('3')
            cy.wait(500);
            cy.get('#Fuel_Surcharge_discount_1').should('exist').clear().type('03')
            cy.wait(500);
            cy.get('#Fuel_Surcharge_total_1').should('exist')
            cy.wait(500);
            cy.get('#fuel_surcharges_1_comment').should('exist').type('asbdnbdf')
            cy.wait(500);
            cy.get('input[type="checkbox"]').check();
            cy.wait(500)
            cy.get('#grand_total_fuel_surcharges').should('exist')
            cy.wait(500)
            cy.get('#previous').should('exist').should('have.text','Previous')
            cy.wait(500);
            cy.get('#next').should('exist').should('have.text','Next').click()
            cy.wait(500);
})
          })
            //Nofuel surcharge
          
            cy.wait(6000);
              cy.get('#No_Fuel_Surcharge_revenue_type_0').should('exist').click({force: true})
              cy.wait(500);
               
            checkRecordExistInDrawer('#No_Fuel_Surcharge_revenue_type_0_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
              cy.get('#No_Fuel_Surcharge_revenue_type_0_list_1 .ant-select-item-option-content').eq(0).click({force: true})
                   cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            })
              cy.get('#no_fuel_surcharges_0_units').should('exist').type('34')
              cy.wait(500);
              cy.get('#no_fuel_surcharges_0_unit_type').click({force: true})
              cy.wait(500);
                 
            // checkRecordExistInDrawer('#no_fuel_surcharges_0_unit_type_list').then((exists) => {
            // cy.log("element exist:", exists)
            // if(exists){
            // cy.get('#no_fuel_surcharges_0_unit_type_list_1 .ant-select-item-option-content').eq(0).click({force: true})
            // cy.wait(500);
            // }
            // else{
            // cy.log('dropdown not found ')
            // }
            // })
            cy.get('#No_Fuel_Surcharge_rate_0').should('exist').type('3')
            cy.wait(500);
            cy.get('#No_Fuel_Surcharge_total_0').should('exist')
            cy.wait(500);
            cy.get('#no_fuel_surcharges_0_comment').should('exist').type('asbdnbdf')
            cy.wait(500);
            cy.get(':nth-child(6) > .ant-btn').click()
            cy.get('#No_Fuel_Surcharge_revenue_type_1').should('exist').click({force: true})
            cy.wait(500);
             
          checkRecordExistInDrawer('#No_Fuel_Surcharge_revenue_type_1_list').then((exists) => {
          cy.log("element exist:", exists)
          if(exists){
            cy.get('#No_Fuel_Surcharge_revenue_type_1_list_0 .ant-select-item-option-content').eq(0).click({force: true})
                 cy.wait(500);
          }
          else{
          cy.log('dropdown not found ')
          }
          })
            cy.get('#no_fuel_surcharges_1_units').should('exist').type('34')
            cy.wait(500);
            cy.get('#no_fuel_surcharges_1_unit_type').click({force: true})
            cy.wait(500);
               
          // checkRecordExistInDrawer('#no_fuel_surcharges_1_unit_type_list').then((exists) => {
          // cy.log("element exist:", exists)
          // if(exists){
          // cy.get('#no_fuel_surcharges_1_unit_type_list_1 .ant-select-item-option-content').eq(0).click({force: true})
          // cy.wait(500);
          // }
          // else{
          // cy.log('dropdown not found ')
          // }
          // })
          cy.get('#No_Fuel_Surcharge_rate_1').should('exist').type('3')
          cy.wait(500);
          cy.get('#No_Fuel_Surcharge_total_1').should('exist')
          cy.wait(500);
          cy.get('#no_fuel_surcharges_1_comment').should('exist').type('asbdnbdf')
          cy.wait(500);


            cy.get('input[type="checkbox"]').check({force: true});
            cy.wait(500)
            cy.get('#grand_total_no_fuel_surcharges').should('exist')
            cy.wait(500)
             cy.get('#previous').should('exist').should('have.text','Previous')
             cy.wait(500);
           cy.get('#save').should('exist').should('have.text','Save').click()

             
         }
         export const DeleteMooring = () => {
            cy.wait(1000)
            cy.get('#Mooring').should('exist').should('have.text', 'Mooring').click().click()
            cy.wait(500)
    let result;
    checkRecordeExist().then((exists) => {
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
           cy.wait(500);
           cy.get('#Mooring-menu-0').click()
          cy.wait(500);
          cy.get('#delete_button_Mooring').click({force: true} )
          cy.wait(500);
          cy.get('#cancel-button').should('exist').should('have.text','Cancel')
          cy.wait(500);
          cy.get('#ok-button').click({force: true} )      
        });
      }
      else{
        cy.log('recode not found ')
       }
      })  
       })  
          }
          export const UpdateMooring = () => {
      
            cy.wait(1000)
            cy.get('#Mooring').should('exist').should('have.text', 'Mooring').click().click()
            cy.wait(500)
    let result;
    checkRecordeExist().then((exists) => {
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
           cy.wait(500);
                      cy.get('#Mooring-menu-0').click()
     cy.wait(500)
                      cy.get('#Update_Add_New_Mooring').click()
                      cy.wait(500);
          

            cy.wait(7000);
            cy.get('.ant-tabs-nav').should('exist').should('have.text', 'Mooring DetailsFuel SurchargeNo Fuel Surcharge')
            cy.wait(500);
            //Mooring Details
                cy.getCurrentDate().then((currentDate) => {
                cy.getDateSixDaysLater().then((dateSixDaysLater) => {
            cy.get('#vessel_name').should('exist').clear().type('Vessel')
            cy.wait(500);
            cy.get('#vessel_grt').should('exist').clear().type('569')
            cy.wait(500);
            cy.get('#agent').should('exist').click( {force: true})
            cy.wait(500);
            checkRecordExistInDrawer('#agent_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#agent_list_1 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            }) 
            cy.wait(500);
            cy.get('#location').should('exist').click({force: true})
            cy.wait(500);
            checkRecordExistInDrawer('#location_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#location_list_1 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            }) 
            cy.wait(500);
            cy.get('#billing_company').should('exist').click({force: true})
            cy.wait(500);
            checkRecordExistInDrawer('#billing_company_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#billing_company_list_1 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            }) 
            cy.wait(500);
            cy.get('#billing_customer').should('exist').click({force: true})
            cy.wait(500);
            checkRecordExistInDrawer('#billing_customer_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#billing_customer_list_1 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            }) 
            cy.wait(500);
            cy.get('#acct_month').should('exist').click({force: true})
            cy.wait(500);
            checkRecordExistInDrawer('#acct_month_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#acct_month_list_1 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            })
            cy.wait(500);
            cy.get('#acct_year').should('exist').clear().type('2023')
            cy.wait(500);
            cy.get('#associated_job').should('exist').click({force: true} )
            cy.wait(500);
            checkRecordExistInDrawer('#associated_job_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#associated_job_list_1 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            })
            cy.wait(500);
            cy.get('#ordered_mooring').should('exist').clear({force: true}).type(currentDate)
            cy.wait(500);
            cy.get('#scheduled_mooring').should('exist').clear({force: true}).type(currentDate)
            cy.wait(500);
            cy.get('#mooring_start').should('exist').clear({force: true}).type(currentDate)
            cy.wait(500);
            cy.get('#mooring_end').should('exist').clear({force: true}).type(dateSixDaysLater)
            cy.wait(500);
            cy.get('#ordered_unmooring').should('exist').clear({force: true}).type(currentDate, {force: true} )
            cy.wait(500);
            cy.get('#scheduled_unmooring').scrollIntoView().should('exist').clear({force: true}).type(currentDate, {force: true})
            cy.wait(500);
            cy.get('#unmooring_start').should('exist').clear({force: true}).type(currentDate)
            cy.wait(500);
            cy.get('#unmooring_end').should('exist').clear({force: true}).type(dateSixDaysLater)
            cy.wait(500);
            cy.get('#special_start').should('exist').clear({force: true}).type(currentDate)
            cy.wait(500);
            cy.get('#special_end').should('exist').clear({force: true}).type(dateSixDaysLater)
            cy.wait(500);
            cy.get('#standby_start').should('exist').clear({force: true}).type(currentDate)
            cy.wait(500);
            cy.get('#standby_end').should('exist').clear({force: true}).type(dateSixDaysLater)
            cy.wait(500);
            cy.get('#discount').should('exist').clear({force: true}).type('13')
            cy.wait(500);
            cy.get('#invoice_date').should('exist').clear({force: true}).type(currentDate)
            cy.wait(500);
            cy.get('#comment_to_agent').should('exist').clear({force: true}).type('Add Correct dates')
            cy.wait(500);
            cy.get('#cancel').should('exist').should('have.text','Cancel')
            cy.wait(500);
           cy.get('#next').should('exist').should('have.text','Next').click()
           cy.wait(500);
            // //fuel surcharge
        
            cy.wait(6000);
            cy.get('#Fuel_Surcharge_revenue_type_0').should('exist').click({force: true})
            cy.wait(500);
            checkRecordExistInDrawer('#Fuel_Surcharge_revenue_type_0_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
            cy.get('#Fuel_Surcharge_revenue_type_0_list_1 .ant-select-item-option-content').eq(0).click({force: true})
            cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            })
            cy.wait(500);
            cy.get('#fuel_surcharges_0_units').should('exist').clear({force: true}).type('34')
            cy.wait(500);
            cy.get('#fuel_surcharges_0_unit_type').should('exist')
//             // cy.wait(500);
//             // checkRecordExistInDrawer('#fuel_surcharges_0_unit_type_list').then((exists) => {
//             // cy.log("element exist:", exists)
//             // if(exists){
//             // cy.get('#fuel_surcharges_0_unit_type_list_0 .ant-select-item-option-content').click({force: true})
//             // cy.wait(500);
//             // }
//             // else{
//             // cy.log('dropdown not found ')
//             // }
//             // })
            cy.wait(500);
            cy.get('#Fuel_Surcharge_rate_0').should('exist').type('73')
            cy.wait(500);
            cy.get('#Fuel_Surcharge_discount_0').should('exist').clear({force: true}).type('23')
             cy.wait(500);
           cy.get('#Fuel_Surcharge_total_0').should('exist')
           cy.wait(500);       
                cy.get('#fuel_surcharges_0_comment').should('exist').clear({force: true}).type('asbdnbdf')
            cy.wait(500);
            cy.get('input[type="checkbox"]').check({force: true});
            cy.wait(500)
            cy.get('#grand_total_fuel_surcharges').should('exist')
            cy.wait(500)
            cy.get('#previous').should('exist').should('have.text','Previous')
            cy.wait(500);
            cy.get('#next').should('exist').should('have.text','Next').click()
            cy.wait(500);
// })
//           })
//             //Nofuel surcharge
          
            cy.wait(6000);
            // cy.document().then((doc) => {
            //   const body = doc.querySelector('#modal-form-3');
            //  cy.wrap(body).within(()=>{
              cy.get('#No_Fuel_Surcharge_revenue_type_0').should('exist').click({force: true})
              cy.wait(500);
               
            checkRecordExistInDrawer('#No_Fuel_Surcharge_revenue_type_0_list').then((exists) => {
            cy.log("element exist:", exists)
            if(exists){
              cy.get('#No_Fuel_Surcharge_revenue_type_0_list_2 .ant-select-item-option-content').eq(0).click({force: true})
                   cy.wait(500);
            }
            else{
            cy.log('dropdown not found ')
            }
            })
              cy.get('#no_fuel_surcharges_0_units').should('exist').clear({force: true}).type('349')
              cy.wait(500);
              cy.get('#no_fuel_surcharges_0_unit_type').should('exist')
              cy.wait(500);
                 
            // checkRecordExistInDrawer('#no_fuel_surcharges_0_unit_type_list').then((exists) => {
            // cy.log("element exist:", exists)
            // if(exists){
            // cy.get('#no_fuel_surcharges_0_unit_type_list_2 .ant-select-item-option-content').eq(0).click({force: true})
            // cy.wait(500);
            // }
            // else{
            // cy.log('dropdown not found ')
            // }
            // })
            cy.get('#No_Fuel_Surcharge_rate_0').should('exist').clear({force: true}).type('73')
            cy.wait(500);
            cy.get('#No_Fuel_Surcharge_total_0').should('exist')
            cy.wait(500);
            cy.get('#no_fuel_surcharges_0_comment').should('exist').clear({force: true}).type('asbdnbdf')
            cy.wait(500);
            cy.get('input[type="checkbox"]').check({force: true});
            cy.wait(500)
            cy.get('#grand_total_no_fuel_surcharges').should('exist')
            cy.wait(500)
             cy.get('#previous').should('exist').should('have.text','Previous')
             cy.wait(500);
           cy.get('#save').should('exist').should('have.text','Save').click({force: true})
                })
              })
            });
          }
          else{
            cy.log('recode not found ')
           }
          })  
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