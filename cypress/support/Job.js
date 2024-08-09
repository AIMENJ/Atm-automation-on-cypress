/// <reference types="cypress" />

import dayjs from 'dayjs'

 export const JobList = () => {
 cy.get('[id="/jobs"]').click() 
          // header jobs
      cy.get('#heading-navbar').should('be.visible').should('have.text', 'Jobs')
      cy.wait(1000);
      cy.get('.ant-table-thead > tr > :nth-child(1)').should('be.visible').should('have.text', 'Job ID')
      cy.wait(500);
      cy.get('.ant-table-thead > tr > :nth-child(2)').should('be.visible').should('have.text', 'Vessel Name')
      cy.wait(500);
      cy.get('.ant-table-thead > tr > :nth-child(3)').should('be.visible').should('have.text', 'Location')
      cy.wait(500);
      cy.get('.ant-table-thead > tr > :nth-child(4)').should('be.visible').should('have.text', 'Billing Company')
      cy.wait(500);
      cy.get('.ant-table-thead > tr > :nth-child(5)').scrollIntoView().should('be.visible').should('have.text', 'ETA Date')
      cy.wait(500);
      cy.get('.ant-table-thead > tr > :nth-child(6)').should('be.visible').should('have.text', 'ETC Date')
      cy.wait(500);
      cy.get('.ant-table-thead > tr > :nth-child(7)').should('be.visible').should('have.text', 'Job Type')
      cy.wait(500);
      //filters
      cy.get('[style="position: relative;"] > .ant-btn').should('be.visible')
      cy.wait(500);
      cy.get('#Add_Button_Jobs').should('be.visible')
      cy.wait(500);
      }
export const AddJob = () =>  {
        cy.getCurrentDate().then((currentDate) => {
          cy.get('[id="/jobs"]').click()
        cy.get('#Add_Button_Jobs').click()
        cy.wait(1000);
        cy.get('#vessel_name').should('exist').should('be.empty').type('test Vessel')
        cy.wait(500);
        cy.get('#ant_design_form_location').should('exist').should('be.empty').click()//.type('Plains',{force: true}).type('{enter}')
        cy.wait(500);
        checkRecordeExist().then((exists) => {
        cy.log("element exist:", exists)
          if(exists){
              
          cy.get('#ant_design_form_location_list_0 .ant-select-item-option-content').first().click({force: true})
          cy.wait(500);
     }
     else{
          cy.log('Dropdown not found')
      
     }
     })
          cy.wait(500);
          cy.get('#ant_design_form_billing_company').should('exist').click({force: true})
          cy.wait(500);
          checkRecordeExist().then((exists) => {
           cy.log("element exist:", exists)
           if(exists){
              
          cy.get('#ant_design_form_billing_company_list_0 .ant-select-item-option-content').eq(0).click({force: true})
          cy.wait(500);
     }
     else{
          cy.log('Dropdown not found')
      
     }
     })
         cy.wait(500);
         cy.get('#eta_date').should('exist').should('be.empty').type(currentDate)
         cy.wait(500);
         cy.get('#ant_design_form_job_type').should('exist').click()
         checkRecordeExist().then((exists) => {
         cy.log("element exist:", exists)
        if(exists){
              
            cy.get('#ant_design_form_job_type_list_0 .ant-select-item-option-content').first().click({force: true})
            cy.wait(500);
     }
     else{
            cy.log('Dropdown not found')
      
     }
     })  
             cy.wait(500);
             cy.get('#add_Jobs').should('exist').should('be.enabled').should('have.text', 'Add').click({force: true})
            //cancel button
             cy.get('#cancel_Jobs').should('be.visible').should('have.text', 'Cancel')//.click()
             //notification
             cy.wait(6000);
       
            //job setup notification screen 
            cy.get('.ant-modal-content').should('be.visible')
            cy.wait(500);
            //text 
            cy.get('[style="text-align: center;"] > div').should('be.visible').should('have.text','Job Created Successfully')
            cy.wait(500);
            //close button

            cy.wait(500);
           //setup job
           cy.get('#setup_job').should('be.visible').should('have.text','Setup Job')
            cy.wait(500);
           cy.get('#cancel_setup_job').should('be.visible').should('have.text','Close').click()

        });


      }
export const UpdateJob = () => { 
  cy.get('[id="/jobs"]').click()
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
                  cy.get('#Jobs-menu-0').click()
                 // cy.get('.table-dropdown').first().click()
                  cy.wait(5000);
                  cy.get('#update_form_Jobs').click({force: true})
                 // cy.wait(200);
              
                  cy.wait(1000);
                  cy.getCurrentDate().then((currentDate) => {
                  cy.get('#vessel_name').should('exist').clear().type('Vessel job')
                  cy.wait(500);
                  cy.get('#ant_design_form_location').should('exist').click({force: true})
                  cy.wait(500);
                  checkRecordeExist().then((exists) => {
                  cy.log("element exist:", exists)
                  if(exists){
                  
                  cy.get('#ant_design_form_location_list_1 .ant-select-item-option-content').first().click({force: true})
                  cy.wait(500);
}
 else{
                   cy.log('Dropdown not found')
          
}
  })
                   cy.wait(500);
                   cy.get('#ant_design_form_billing_company').should('exist').click({force: true})
                   cy.wait(500);
                   checkRecordeExist().then((exists) => {
                   cy.log("element exist:", exists)
                  if(exists){
                  
                  cy.get('#ant_design_form_billing_company_list_1 .ant-select-item-option-content').eq(0).click({force: true})
                  cy.wait(500);
 }
 else{
                  cy.log('Dropdown not found')
          
 }
})
                  cy.wait(500);
                  cy.get('#eta_date').should('exist').type(currentDate)
                  cy.wait(500);
                  cy.get('#ant_design_form_job_type').should('exist').click( {force: true})
                  checkRecordeExist().then((exists) => {
                  cy.log("element exist:", exists)
                  if(exists){
                  cy.get('#ant_design_form_job_type_list_0 .ant-select-item-option-content').first().click({force: true})
                  cy.wait(500);
 }
  else{
                  cy.log('Dropdown not found')
          
}
}) 
});
cy.wait(500);
cy.get('#update_Jobs').should('exist').should('be.enabled').should('have.text', 'Update').click({force: true})
//cancel button         
cy.get('#cancel_Jobs').should('be.visible').should('have.text', 'Cancel')//.click()
 cy.wait(500);
//notification
cy.get('.ant-notification-notice').should('be.visible')
cy.wait(500);
  });
}
else{
cy.log('recode not found ')

}})
})  
} 

export const DeleteJob = () => { 
  cy.get('[id="/jobs"]').click()
  let result;
  checkRecordeExist().then((exists) => {
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
 cy.get('#Jobs-menu-0').click()
cy.wait(200);
cy.get('#delete_button_Jobs').click({force: true} )
cy.wait(200);
cy.get('#ok-button').click({force: true} )
cy.wait(200);
cy.get('#cancel-button').should('exist').should('have.text','Cancel')
           
 });
 }else{
 cy.log('recode not found ')
 }
})  
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

const checkSelection = (search, id) => {
return new Cypress.Promise((resolve, reject)=>{
cy.document().then((doc)=>{
const elementExist = doc.querySelector(`${id? "#"+search : "."+search}`) !== null
cy.log("state of element", elementExist)
resolve(!elementExist)
})
})
}
export const jobsetup = () => {
  cy.get('[id="/jobs"]').click()

  //job setup notification screen 
cy.get('#job-gear-button').should('be.visible').click()
//Job setup form
cy.get('#rc-tabs-0-tab-1').should('have.text','Job Details').invoke('css', 'color').should('eq', 'rgb(0, 117, 201)' );
cy.wait(1000)
cy.get('.ant-tabs-nav-list').should("exist")//job details
cy.wait(500);
cy.get('[data-node-key="2"]').should("exist")//dates
cy.wait(500);
cy.get('[data-node-key="3"]').should("exist")//Ship details
cy.wait(500);
cy.get('#rc-tabs-0-tab-4').should("exist")//customer details
cy.wait(500);
//cy.get('.ant-modal-close-x').click()//cancel cross button
cy.get('#billing_company').should('exist')
cy.wait(500);
cy.get('#job_type').should('exist')
cy.wait(500);
cy.get('#location').should('exist')
cy.wait(500);
cy.get('#acct_month').should('exist')
cy.wait(500);
cy.get('#acct_year').should('exist')
cy.wait(500);
cy.get('#coordinator').should('exist').click( {force: true})
cy.wait(500);
checkRecordeExist().then((exists) => {
cy.log("element exist:", exists)
if(exists){
      
cy.get('#coordinator_list_0 .ant-select-item-option-content').eq(0).click({force: true}).eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
}) 
cy.wait(500);
cy.get('#sales_rep').should('exist').click()
cy.wait(500);
checkRecordeExist().then((exists) => {
cy.log("element exist:", exists)
if(exists){   
cy.get('#sales_rep_list_0 .ant-select-item-option-content').eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
}) 
cy.wait(500);
cy.get('#daily_guarantee').should('exist').type("1212")
cy.wait(500);
cy.get('#demurage_rate').should('exist').type("767")
cy.wait(500);
cy.get('#total_tons').should('exist')//.type("1535")
cy.wait(500);
cy.get('#tons_per_crane_hour').should('exist').type("7652")
cy.wait(500);
cy.get('#job_effiencytarget').should('exist').type("1672")
cy.wait(500);
cy.get('#cancel-setup').should('exist')//.click();
cy.wait(500);
cy.get('#Next-Setup').click()
cy.wait(6000)
//Dates page
cy.getDateSixDaysLater().then((dateSixDaysLater) => {
cy.getCurrentDate().then((currentDate) => {
cy.wait(500)
cy.get('#eta_date').should('exist')
cy.wait(500)
cy.get('#etc_date').type(dateSixDaysLater);
cy.wait(500)
cy.get('#date_on_schedule').should('exist')
cy.wait(500)
cy.get('#laycan_date').type(currentDate);
cy.wait(500)
cy.get('#laycan_end_date').type(dateSixDaysLater);
cy.wait(500)
cy.get('#anchor_date').should('exist').type(currentDate);
cy.wait(500)
cy.get('#dock_date_time').should('exist').type(currentDate);
cy.wait(500)
cy.get('#start_date_time').should('exist').type(currentDate);
cy.wait(500)
cy.get('#complete_date_time').type(dateSixDaysLater);
cy.wait(500)
cy.get('#sail_date_time').should('exist').type(currentDate);
cy.wait(500)
cy.get('#previous-setup').should('exist')
cy.wait(500)
cy.get('#Next-Setup').click()
cy.wait(500)
});
});
cy.wait(6000)
//SHIP DETAILS
cy.get('#vessel_name').should('exist')
cy.wait(500);
cy.get('#waiting_anchorage').should('exist').type('bdfskjds')
cy.wait(500);
cy.get('#port_origin_destination').should('exist').type('bdvsjs')
cy.wait(500);
cy.get('#modal-form-3 > [style="margin-left: -8px; margin-right: -8px;"] > :nth-child(4) > .ant-form-item > .ant-row > .ant-form-item-label > label').should('exist')//GRT Dockage?
cy.wait(500);
cy.get('#grt_dockage_yes_no > :nth-child(2)')
cy.wait(500);
cy.get('#grt_dockage').should('exist').type('565')
cy.wait(500);
cy.get('#modal-form-3 > [style="margin-left: -8px; margin-right: -8px;"] > :nth-child(6) > .ant-form-item > .ant-row > .ant-form-item-label > label').should('exist')//LOA Dockage?
cy.wait(500);
cy.get('#loa_dockage').should('exist').type('56')
cy.wait(500);
cy.get('#loa_dockage_yes_no > .ant-radio-button-wrapper-checked > :nth-child(2)').click()
cy.wait(500);
cy.get('#beam_of_vessel').should('exist').type('586')
cy.wait(500);
cy.get('#per_of_hold').should('exist').type('5986')
cy.wait(500);
cy.get('#ships_gear_location').should('exist').type('5436')
cy.wait(500);
cy.get('#no_of_barges').should('exist').type('566')
cy.wait(500);
cy.get('#previous-setup').should('exist')
 cy.wait(500)
 cy.get('#Next-Setup').click()
 cy.wait(500)
cy.wait(6000)
//Customer
cy.get('#customers_0_customer').should('exist').click()
cy.wait(500);
checkSelection('customer_0_customer_list_0', true).then((exists)=>{
if(exists){   
cy.get('#customers_0_customer_list_0').eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
})
cy.wait(500);
cy.get('#customers_0_agent').should('exist').click()
cy.wait(500);
checkSelection('customer_0_agent_list_0', true).then((exists)=>{
if(exists){
 cy.get('#customers_0_agent_list_0').eq(0).click({force: true})
 cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
})
cy.wait(500);
cy.get('#customers_0_surveyor').should('exist').click()
checkSelection('customer_0_surveyor_list_0', true).then((exists)=>{
if(exists){
cy.get('#customers_0_surveyor_list_0').eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
})
cy.wait(500);
cy.get('#customers_0_cargo').should('exist').click()
cy.wait(500);
checkSelection('customer_0_cargo_list_0', true).then((exists)=>{
if(exists){
 cy.get('#customers_0_cargo_list_0').eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
})
cy.wait(500);
cy.get('#tonnage0').should('exist').type('5000')
cy.wait(500);
cy.get('#pieces0').should('exist').type('100')
cy.wait(500);
cy.get('#cbm0').should('exist').type('6wer32')
cy.wait(500);
cy.get('#customers_0_contract').should('exist').click()
cy.wait(500);
checkSelection('customer_0_contract_list_0', true).then((exists)=>{
if(exists){ 
cy.get('#customers_0_contract_list_0').eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
}) 
cy.wait(500);
cy.get('#target_tph0').should('exist').type('324')
cy.wait(500);
cy.get('#po_number0').should('exist').type('435')
cy.wait(500);
cy.get('#customers_0_liner_term').should('exist').click()
cy.wait(500);
checkSelection('customer_0_liner_term_list_0', true).then((exists)=>{
if(exists){
cy.get('#customers_0_liner_term_list_0').eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
})
cy.wait(200)
//lead customer button
cy.get('.badge').should('exist').click()
cy.wait(100);
//add  2nd customer 
cy.get('#Add_Customer').scrollIntoView().should('exist').click()
cy.wait(500);
cy.get('#customers_1_customer').should('exist').click()
cy.wait(500);
checkSelection('customer_1_customer_list_1', true).then((exists)=>{
if(exists){
cy.get('#customers_1_customer_list_1').eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
})
cy.wait(500);
cy.get('#customers_1_agent').should('exist').click()
cy.wait(500);
checkSelection('customer_1_agent_list_1', true).then((exists)=>{
if(exists){
 cy.get('#customers_1_agent_list_1').eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
})
cy.wait(500);
cy.get('#customers_1_surveyor').should('exist').click()
checkSelection('customer_1_surveyor_list_1', true).then((exists)=>{
 if(exists){  
cy.get('#customers_1_surveyor_list_1').eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
})
cy.wait(500);
cy.get('#customers_1_cargo').should('exist').click()
cy.wait(500);
checkSelection('customer_1_cargo_list_1', true).then((exists)=>{
if(exists){
cy.get('#customers_1_cargo_list_1').eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
})
cy.wait(500);
cy.get('#tonnage1').should('exist').type('5000')
cy.wait(500);
cy.get('#pieces1').should('exist').type('100')
cy.wait(500);
cy.get('#cbm1').should('exist').type('6wer32')
cy.wait(500);
cy.get('#customers_1_contract').should('exist').click()
cy.wait(500);
checkSelection('customer_1_contract_list_0', true).then((exists)=>{
if(exists){
cy.get('#customers_1_contract_list_0').eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
}) 
cy.wait(500);
cy.get('#target_tph1').should('exist').type('324')
cy.wait(500);
cy.get('#po_number1').should('exist').type('435')
cy.wait(500);
cy.get('#customers_1_liner_term').should('exist').click()
cy.wait(500);
checkSelection('customer_1_liner_term_list_1', true).then((exists)=>{
if(exists){
cy.get('#customers_1_liner_term_list_1').eq(0).click({force: true})
cy.wait(500);
}
else{
cy.log('dropdown not found ')
}
})
cy.wait(200)
// //previous button
cy.get('#previous-setup').should ('exist')
//save
cy.get('#Next-Setup').should('exist').click()
//notification
cy.wait(500);
cy.get('.ant-notification-notice').should('be.visible')
cy.wait(500);
}
Cypress.Commands.add('getDateSixDaysLater', () => {
  const dateSixDaysLater = dayjs().add(6, 'day').format('YYYY-MM-DD HH:mm:ss');
  return dateSixDaysLater;
});
Cypress.Commands.add('getCurrentDate', () => {
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
  return currentDate;
});
 

