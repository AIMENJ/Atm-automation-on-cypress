
/// <reference types="cypress" />
import dayjs from 'dayjs'
import 'cypress-file-upload';
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
  return new Cypress.Promise((resolve, reject) => {
    cy.document().then((doc) => {
      const elementExist = doc.querySelector(`${id ? "#" + search : "." + search}`) !== null
      cy.log("state of element", elementExist)
      resolve(!elementExist)
    })
  })
}
export function checkRecordExistInDrawer(table_id) {
  return new Cypress.Promise((resolve) => {
    cy.get(table_id).within(($drawer) => {
      const elementExist = $drawer[0].querySelector(".ant-empty-description") !== null;
      cy.log(elementExist);
      resolve(!elementExist);
    });
  });
}
export const Details = () => {
  cy.get('#rc-tabs-0-tab-KEY23086').should('have.text', 'Details').click()
  cy.wait(500);
  cy.get('h1').should('exist');
  cy.wait(500);
  cy.get('.ant-tag').should('exist')
  cy.wait(500);
  cy.get('.flex > :nth-child(2) > div > .ant-btn-primary').should('exist');
  cy.wait(500);
  cy.get(':nth-child(2) > div > .ant-btn-text').should('exist');
  cy.wait(1000);
  cy.get(':nth-child(1) > .label').should('exist').should('have.text', 'Vessel Name')
  cy.wait(500);
  cy.get(':nth-child(2) > .label').should('exist').should('have.text', 'Location')
  cy.wait(500);
  cy.get(':nth-child(3) > .label').should('exist').should('have.text', 'Billing Company')
  cy.wait(500);
  cy.get(':nth-child(4) > .label').should('exist').should('have.text', 'ETA Date')
  cy.wait(500);
  cy.get(':nth-child(5) > .label').should('exist').should('have.text', 'ETC Date')
  cy.wait(500);
  cy.get(':nth-child(6) > .label').should('exist').should('have.text', 'Job Type')
  cy.wait(500);
  cy.get(':nth-child(7) > .label').should('exist').should('have.text', 'Job ID')
  cy.wait(500);
  cy.get(':nth-child(8) > .label').should('exist').should('have.text', 'Acct Month')
  cy.wait(500);
  cy.get(':nth-child(9) > .label').should('exist').should('have.text', 'Total Tons')
  cy.wait(500);
  cy.get(':nth-child(10) > .label').should('exist').should('have.text', 'Date on Schedule')
  cy.wait(500);
  cy.get(':nth-child(11) > .label').should('exist').should('have.text', 'Parent Job#')
  cy.wait(500);
  cy.get(':nth-child(12) > .label').should('exist').should('have.text', 'Port Origin/ Destination')
  cy.wait(500);
  cy.get(':nth-child(13) > .label').should('exist').should('have.text', 'Acct Year')
  cy.wait(500);
  cy.get(':nth-child(14) > .label').should('exist').should('have.text', 'Coordinator')
  cy.wait(500);
  cy.get(':nth-child(15) > .label').should('exist').should('have.text', 'Job Effiency Target')
  cy.wait(500);
  cy.get(':nth-child(16) > .label').should('exist').should('have.text', 'Sales Rep')
  cy.wait(500);
  cy.get(':nth-child(17) > .label').scrollIntoView().should('exist').should('have.text', 'Daily Guarantee')
  cy.wait(500);
  cy.get(':nth-child(18) > .label').should('exist').should('have.text', 'Demurrage Rate')
  cy.wait(500);
  cy.get(':nth-child(19) > .label').should('exist').should('have.text', 'Tons per Crane Hour')
  cy.wait(500);
  cy.get(':nth-child(20) > .label').should('exist').should('have.text', 'Laycan Start Date')
  cy.wait(500);
  cy.get(':nth-child(21) > .label').should('exist').should('have.text', 'Laycan End Date')
  cy.wait(500);
  cy.get(':nth-child(22) > .label').should('exist').should('have.text', 'Anchor Date')
  cy.wait(500);
  cy.get(':nth-child(23) > .label').should('exist').should('have.text', 'Waiting Anchorage')
  cy.wait(500);
  cy.get(':nth-child(24) > .label').should('exist').should('have.text', 'GRT Dockage?')
  cy.wait(500);
  cy.get(':nth-child(25) > .label').should('exist').should('have.text', 'GRT')
  cy.wait(500);
  cy.get(':nth-child(26) > .label').should('exist').should('have.text', 'LOA Dockage?')
  cy.wait(500);
  cy.get(':nth-child(27) > .label').should('exist').should('have.text', 'LOA')
  cy.wait(500);
  cy.get(':nth-child(28) > .label').should('exist').should('have.text', 'Beam of Vessel')
  cy.wait(500);
  cy.get(':nth-child(29) > .label').should('exist').should('have.text', '# of Holds')
  cy.wait(500);
  cy.get(':nth-child(30) > .label').should('exist').should('have.text', 'Ships Gear Location')
  cy.wait(500);
  cy.get(':nth-child(31) > .label').should('exist').should('have.text', '# of Barges')
  cy.wait(500);
  cy.get(':nth-child(32) > .label').should('exist').should('have.text', 'Dock Date & Time')
  cy.wait(500);
  cy.get(':nth-child(33) > .label').should('exist').should('have.text', 'Start Date & Time')
  cy.wait(500);
  cy.get(':nth-child(34) > .label').should('exist').should('have.text', 'Complete Date & Time')
  cy.wait(500);
  cy.get(':nth-child(35) > .label').should('exist').should('have.text', 'Sail Date & Time')
  cy.wait(500);
  cy.get(':nth-child(36) > .label').should('exist').should('have.text', 'Job Cancel Date')
  cy.wait(500);
  cy.get(':nth-child(37) > .label').should('exist').should('have.text', 'Job Notes')
  cy.wait(500);
  cy.get(':nth-child(38) > .label').should('exist').should('have.text', 'Location Name')
  cy.wait(500);
  cy.get('[style="width: 100%; text-align: center; padding-top: 32px;"] > .ant-btn').should('exist')
  cy.wait(500);
  cy.get('.card > :nth-child(1) > :nth-child(1)').should('exist')
  cy.wait(500);
  cy.get('[style="display: flex; margin-right: 50px;"] > :nth-child(1)').should('exist')
  cy.wait(500);
  cy.get('[style="display: flex; margin-right: 50px;"] > :nth-child(2) > div').should('exist')
  cy.wait(500);
  cy.get('[style="display: flex; flex-direction: row; margin-bottom: 15px; margin-top: 10px;"] > :nth-child(1) > [style="color: gray;"]').should('exist')
  cy.wait(500);
  cy.get('[style="display: flex; flex-direction: row; margin-bottom: 15px; margin-top: 10px;"] > [style="margin-left: 15px;"] > [style="color: gray;"]').should('exist')
  cy.wait(500);
  cy.get('canvas')
  cy.wait(500);
  cy.get('[style="display: flex; flex-direction: row; margin-bottom: 15px; margin-top: 10px; margin-right: 4%;"] > :nth-child(1) > [style="color: gray;"]').should('exist')
  cy.wait(500);
  cy.get('[style="display: flex; flex-direction: row; margin-bottom: 15px; margin-top: 10px; margin-right: 4%;"] > :nth-child(2) > [style="color: gray;"]').should('exist')
  cy.wait(500);
  cy.get(':nth-child(3) > [style="color: gray;"]').should('exist')
  cy.wait(500);
}
export const opendrawer = () => {
  cy.wait(1000)
  cy.get('#Jobs').click({ force: true })
  let result;
  checkRecordeExist().then((exists) => {
    cy.log("element exist:", exists)
    if (exists) {
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

          cy.get('tr.ant-table-row').first().click()
        });
    } else {
      cy.log('recode not found ')
    }
  })
}
export const loading = () => {
  cy.wait(500);
  cy.get('#rc-tabs-0-tab-KEY23088').click()
  cy.wait(500);
  cy.get('h1').should('exist')
  cy.wait(500);
  cy.get('.ant-tag').should('exist')
  cy.wait(500);
  cy.get('#Add_Button_Tab_Barge_Loading').should('exist')
  cy.wait(500);
  cy.get('[style="display: flex; flex-direction: row;"] > .ant-btn-text').should('exist')
  cy.wait(500);
  cy.get(':nth-child(1) > .label').should('exist').should('have.text', 'Vessel Name')
  cy.wait(500);
  cy.get(':nth-child(2) > .label').should('exist').should('have.text', 'Location')
  cy.wait(500);
  cy.get(':nth-child(3) > .label').should('exist').should('have.text', 'Billing Company')
  cy.wait(500);
  cy.get(':nth-child(4) > .label').should('exist').should('have.text', 'ETA Date')
  cy.wait(500);
  cy.get(':nth-child(5) > .label').should('exist').should('have.text', 'ETC Date')
  cy.wait(500);
  cy.get(':nth-child(6) > .label').should('exist').should('have.text', 'Job Type')
  cy.wait(500);
  cy.get(':nth-child(7) > .label').should('exist').should('have.text', 'Job ID')
  cy.wait(500);
  cy.get(':nth-child(8) > .label').should('exist').should('have.text', 'Acct Month')
  cy.wait(500);
  cy.get(':nth-child(9) > .label').should('exist').should('have.text', 'Total Tons')
  cy.wait(500);
  cy.get(':nth-child(10) > .label').should('exist').should('have.text', 'Date on Schedule')
  cy.wait(500);
  cy.get(':nth-child(11) > .label').should('exist').should('have.text', 'Parent Job#')
  cy.wait(500);
  cy.get(':nth-child(12) > .label').should('exist').should('have.text', 'Port Origin/ Destination')
  cy.wait(500);
  cy.get(':nth-child(13) > .label').should('exist').should('have.text', 'Acct Year')
  cy.wait(500);
  cy.get(':nth-child(14) > .label').should('exist').should('have.text', 'Coordinator')
  cy.wait(500);
  cy.get(':nth-child(15) > .label').should('exist').should('have.text', 'Job Effiency Target')
  cy.wait(500);
  cy.get(':nth-child(16) > .label').should('exist').should('have.text', 'Sales Rep')
  cy.wait(500);
  cy.get(':nth-child(17) > .label').should('exist').should('have.text', 'Daily Guarantee')
  cy.wait(500);
  cy.get(':nth-child(18) > .label').should('exist').should('have.text', 'Demurrage Rate')
  cy.wait(500);
  cy.get(':nth-child(19) > .label').should('exist').should('have.text', 'Tons per Crane Hour')
  cy.wait(500);
  cy.get(':nth-child(20) > .label').should('exist').should('have.text', 'Laycan Start Date')
  cy.wait(500);
  cy.get(':nth-child(21) > .label').should('exist').should('have.text', 'Laycan End Date')
  cy.wait(500);
  cy.get(':nth-child(22) > .label').should('exist').should('have.text', 'Anchor Date')
  cy.wait(500);
  cy.get(':nth-child(23) > .label').should('exist').should('have.text', 'Waiting Anchorage')
  cy.wait(500);
  cy.get(':nth-child(24) > .label').should('exist').should('have.text', 'GRT Dockage?')
  cy.wait(500);
  cy.get(':nth-child(25) > .label').should('exist').scrollIntoView().should('have.text', 'GRT')
  cy.wait(500);
  cy.get(':nth-child(26) > .label').should('exist').should('have.text', 'LOA Dockage?')
  cy.wait(500);
  cy.get(':nth-child(27) > .label').should('exist').should('have.text', 'LOA')
  cy.wait(500);
  cy.get(':nth-child(28) > .label').should('exist').should('have.text', 'Beam of Vessel')
  cy.wait(500);
  cy.get(':nth-child(29) > .label').should('exist').should('have.text', '# of Holds')
  cy.wait(500);
  cy.get(':nth-child(30) > .label').should('exist').should('have.text', 'Ships Gear Location')
  cy.wait(500);
  cy.get(':nth-child(31) > .label').should('exist').should('have.text', '# of Barges')
  cy.wait(500);
  cy.get(':nth-child(32) > .label').should('exist').should('have.text', 'Dock Date & Time')
  cy.wait(500);
  cy.get(':nth-child(33) > .label').should('exist').should('have.text', 'Start Date & Time')
  cy.wait(500);
  cy.get(':nth-child(34) > .label').should('exist').should('have.text', 'Complete Date & Time')
  cy.wait(500);
  cy.get(':nth-child(35) > .label').should('exist').should('have.text', 'Sail Date & Time')
  cy.wait(500);
  cy.get(':nth-child(36) > .label').should('exist').should('have.text', 'Job Cancel Date')
  cy.wait(500);
  cy.get(':nth-child(37) > .label').should('exist').should('have.text', 'Job Notes')
  cy.wait(500);
  cy.get(':nth-child(38) > .label').should('exist').should('have.text', 'Location Name')
  cy.wait(500);
  cy.get(':nth-child(2) > p').should('exist').should('have.text', 'Add Information')
  //show customer
  cy.wait(500);
  cy.get('[style="width: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('exist').should('have.text', 'Customer')
  cy.wait(500);
  cy.get('[style="width: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('exist').should('have.text', 'Agent')
  cy.wait(500);
  cy.get('[style="width: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('exist').should('have.text', 'Contract')
  cy.wait(500);
  cy.get('[style="width: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('exist').should('have.text', 'Surveyor')
  cy.wait(500);
  cy.get('[style="width: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(5)').should('exist').should('have.text', 'Cargo')
  cy.wait(500);
  cy.get('[style="width: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(6)').should('exist').should('have.text', 'Tonnage')
  cy.wait(500);
  cy.get('[style="width: 100%; text-align: center; padding-top: 32px;"] > .ant-btn > :nth-child(1)').should('exist')
  cy.wait(500);
  cy.get('a > .ant-btn').should('exist')
  //loading list
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('exist').should('have.text', 'Color')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('exist').should('have.text', 'Order')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('exist').should('have.text', 'Barge #')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('exist').should('have.text', 'Barge Line')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(5)').should('exist').should('have.text', 'Start Time')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(6)').should('exist').should('have.text', 'Finish Time')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(7)').should('exist').scrollIntoView().should('have.text', 'Hold #')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(8)').should('exist').scrollIntoView().should('have.text', 'Surveyor')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(9)').should('exist').scrollIntoView().should('have.text', 'Customer')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(10)').should('exist').scrollIntoView().should('have.text', 'Surveyed')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(11)').should('exist').scrollIntoView().should('have.text', 'Short Tons')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(12)').should('exist').scrollIntoView().should('have.text', 'Metric Tons')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(13)').should('exist').scrollIntoView().should('have.text', 'Actual Draft Feet')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(14)').should('exist').scrollIntoView().should('have.text', 'Actual Draft Inch')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(15)').should('exist').scrollIntoView().should('have.text', 'Max Draft Feet')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(16)').should('exist').scrollIntoView().should('have.text', 'Max Draft Inch')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(17)').should('exist').scrollIntoView().should('have.text', 'Barge Destination')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(18)').should('exist').scrollIntoView().should('have.text', 'Bill of Landing')
  cy.wait(500);
  cy.get(':nth-child(4) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(19)').should('exist').scrollIntoView().should('have.text', 'Comment')
  cy.wait(500);
  //  AddLoading()
}
export const AddLoading = () => {
  cy.wait(1500);
  cy.getCurrentDate().then((dateSixDaysLater) => {
    cy.getCurrentDate().then((currentDate) => {
      cy.wait(500)
      cy.get('#rc-tabs-0-tab-KEY23088').click()
      cy.wait(1500);
      cy.get('#Add_Button_Tab_Barge_Loading').click()
      cy.wait(1500);
      cy.get('#color').should('exist').click()
      cy.wait(500);
      checkRecordExistInDrawer('#color_list').then((exists) => {
        cy.log("element exist:", exists)
        cy.wait(500);
        if (exists) {
          cy.get('#color_list_0 .ant-select-item-option-content').eq(0).click({ force: true })
          cy.wait(500);
        }
        else {
          cy.log('Dropdown not found')

        }
      })
      cy.wait(500);
      cy.get('#crane').should('exist').click()
      cy.wait(1000);
      checkRecordExistInDrawer('#crane_list').then((exists) => {
        cy.log("element exist:", exists)
        if (exists) {
          cy.get('#crane_list_0 .ant-select-item-option-content').first().click({ force: true })
          cy.wait(500);
        }
        else {
          cy.log('Dropdown not found')

        }
      })
      cy.wait(500);
      cy.get('#unload').should('exist').type('121')
      cy.wait(500);
      cy.get('#barge').should('exist').type('43')
      cy.wait(500);
      cy.get('#barge_line').should('exist').click({ force: true })
      cy.wait(1000);
      checkRecordExistInDrawer('#barge_line_list').then((exists) => {
        cy.log("element exist:", exists)
        cy.wait(500);
        if (exists) {
          cy.get('#barge_line_list_0 .ant-select-item-option-content').eq(0).click({ force: true })
          cy.wait(500);
        }
        else {
          cy.log('Dropdown not found')

        }
      })
      cy.wait(500);
      cy.get('#start_time').should('exist').type(currentDate)
      cy.wait(500);
      cy.get('#finish_time').should('exist').type(dateSixDaysLater)
      cy.wait(500);
      cy.get('#hold').should('exist').type('21')
      cy.wait(500);
      cy.get('#surveyor').should('exist').click()
      cy.wait(1000);
      checkRecordExistInDrawer('#surveyor_list').then((exists) => {
        cy.log("element exist:", exists)
        cy.wait(500);
        if (exists) {
          cy.get('#surveyor_list_0 .ant-select-item-option-content').first().click({ force: true })
          cy.wait(500);
        }
        else {
          cy.log('Dropdown not found')

        }
      })
      cy.wait(500);
      cy.get('#ant_design_form_surveyed').scrollIntoView().should('exist')
      cy.wait(500)
      cy.get('#ant_design_form_surveyed > :nth-child(1)').should('exist').should('have.text', 'Yes').click()
      cy.wait(500);
      cy.get('#ant_design_form_surveyed > :nth-child(2)').should('exist').should('have.text', 'No')
      cy.wait(500);
      cy.get('#short_tons').should('exist').type('435')
      cy.wait(500);
      cy.get('#metric_tons').should('exist')
      cy.wait(500);
      cy.get('#actual_draft_feet').should('exist').type('4')
      cy.wait(500);
      cy.get('#actual_draft_inch').should('exist').type('3')
      cy.wait(500);
      cy.get('#max_draft_feet').should('exist').type('5')
      cy.wait(500);
      cy.get('#max_draft_inch').should('exist').type('6')
      cy.wait(500);
      cy.get('#barge_destination').should('exist').type('Karachi')
      cy.wait(500);
      cy.get('#bol').should('exist').type('467')
      cy.wait(500);
      cy.get('#comment').should('exist').type('Add job barge loading')
      cy.wait(500);
      cy.get('#cancel_Barge_Loading').should('be.visible').should('have.text', 'Cancel')//.click()
      cy.wait(500);
      cy.get('#add_Barge_Loading').should('exist').should('be.enabled').should('have.text', 'Add').click({ force: true })
      cy.wait(500);
      cy.get('.ant-notification-notice').should('exist')
      cy.wait(500);
    });
  });
}
export const DeleteBargeLoading = () => {
  cy.get('#rc-tabs-0-tab-KEY23088').should('have.text', 'Loading').click();
  cy.wait(1500);
  checkRecordExistInDrawer('#Barge_Loading_table').then((exists) => {
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
          cy.get('#Barge_Loading-tab-menu-0').click();
          cy.wait(200);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#delete_button_Barge_Loading', { timeout: 20000 })
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
export const UpdateBargeLoading = () => {
  cy.wait(500)
  cy.get('#rc-tabs-0-tab-KEY23088').should('have.text', 'Loading').click();
  cy.getCurrentDate().then((dateSixDaysLater) => {
    cy.getCurrentDate().then((currentDate) => {
      cy.wait(1500);
      checkRecordExistInDrawer('#Barge_Loading_table').then
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
                cy.get('#Barge_Loading-tab-menu-0').click();
                cy.wait(200);
                // Ensure correct document context
                cy.document().then((doc) => {
                  const body = doc.querySelector('body');
                  if (body) {
                    cy.wrap(body).within(() => {
                      cy.get('#update_form_Barge_Loading', { timeout: 20000 })
                        .should('exist')
                        .should('be.visible')
                        .click({ force: true });
                      cy.wait(200);
                      cy.wait(6000);
                      cy.get('#color').should('exist').click({ force: true })
                      cy.wait(500);
                      checkRecordExistInDrawer('#color_list').then((exists) => {
                        cy.log("element exist:", exists)
                        if (exists) {

                          cy.get('#color_list_1 .ant-select-item-option-content').eq(0).click({ force: true })
                          cy.wait(500);
                        }
                        else {
                          cy.log('Dropdown not found')

                        }
                      })

                      cy.wait(500);
                      cy.get('#crane').should('exist').click({ force: true })
                      cy.wait(500);
                      checkRecordExistInDrawer('#crane_list').then((exists) => {
                        cy.log("element exist:", exists)
                        if (exists) {
                          cy.get('#crane_list_1 .ant-select-item-option-content').first().click({ force: true })
                          cy.wait(500);
                        }
                        else {
                          cy.log('Dropdown not found')

                        }
                      })
                      cy.wait(500);
                      cy.get('#unload').should('exist').clear().type('554')
                      cy.wait(500);
                      cy.get('#barge').should('exist').clear().type('55')
                      cy.wait(500);
                      cy.get('#barge_line').should('exist').click({ force: true })
                      cy.wait(500);
                      checkRecordExistInDrawer('#barge_line_list').then((exists) => {
                        cy.log("element exist:", exists)
                        if (exists) {
                          cy.get('#barge_line_list_1 .ant-select-item-option-content').first().click({ force: true })
                          cy.wait(500);
                        }
                        else {
                          cy.log('Dropdown not found')

                        }
                      })
                      cy.wait(500);
                      cy.get('#start_time').should('exist').clear().type(currentDate)
                      cy.wait(500);
                      cy.get('#finish_time').should('exist').clear().type(dateSixDaysLater)
                      cy.wait(500);
                      cy.get('#hold').should('exist').clear().type('34')
                      cy.wait(500);
                      cy.get('#surveyor').should('exist').click({ force: true })
                      cy.wait(500);
                      checkRecordExistInDrawer('#surveyor_list').then((exists) => {
                        cy.log("element exist:", exists)
                        if (exists) {
                          cy.get('#surveyor_list_1 .ant-select-item-option-content').first().click({ force: true })
                          cy.wait(500);
                        }
                        else {
                          cy.log('Dropdown not found')

                        }
                      })
                      cy.wait(500);
                      cy.get('#ant_design_form_surveyed').scrollIntoView().should('exist')
                      cy.wait(500)
                      cy.get('#ant_design_form_surveyed > :nth-child(1)').should('exist').should('have.text', 'Yes')
                      cy.wait(500);
                      cy.get('#ant_design_form_surveyed > :nth-child(2)').should('exist').should('have.text', 'No').click()
                      cy.wait(500);
                      cy.get('#short_tons').should('exist').clear().type('543')
                      cy.wait(500);
                      cy.get('#metric_tons').should('exist')
                      cy.wait(500);
                      cy.get('#actual_draft_feet').should('exist').clear().type('433')
                      cy.wait(500);
                      cy.get('#actual_draft_inch').should('exist').clear().type('333')
                      cy.wait(500);
                      cy.get('#max_draft_feet').should('exist').clear().type('335')
                      cy.wait(500);
                      cy.get('#max_draft_inch').should('exist').clear().type('633')
                      cy.wait(500);
                      cy.get('#barge_destination').should('exist').clear().type('Karachi to USA')
                      cy.wait(500);
                      cy.get('#bol').should('exist').clear().type('433')
                      cy.wait(500);
                      cy.get('#comment').should('exist').clear().type('Add job barge loading')
                      cy.wait(500);
                      cy.get('#cancel_Barge_Loading').should('be.visible').should('have.text', 'Cancel')//.click()
                      cy.wait(500);
                      cy.get('#update_Barge_Loading').should('exist').should('be.enabled').should('have.text', 'Update').click({ force: true })
                      cy.wait(500);
                      cy.get('.ant-notification-notice').should('exist')
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
    });
  });
}
export const JobLogSummary = () => {
  cy.wait(500);
  cy.get('#rc-tabs-0-tab-KEY23089').should('have.text', 'Job Log Summary').click()
  cy.wait(500);
  cy.get('h1').should('exist')
  cy.wait(500);
  cy.get('.ant-tag').should('exist')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('exist').should('have.text', 'Crane')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('have.text', 'Date')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('exist').should('have.text', 'Time From')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('exist').should('have.text', 'Time To')
  cy.wait(500);
}
export const Equipment = () => {
  cy.get('#rc-tabs-0-tab-KEY23090').should('have.text', 'Equipment').click()
  cy.wait(500);
  cy.get('h1').should('exist')
  cy.wait(500);
  cy.get('.ant-tag').should('exist')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('exist').should('have.text', 'Equipment Name')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('exist').should('have.text', 'Crane')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('exist').should('have.text', 'Shift')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('exist').should('have.text', 'Date')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(5)').should('exist').should('have.text', 'Start Time')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(6)').should('exist').should('have.text', 'Stop Time')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(7)').scrollIntoView().should('exist').should('have.text', 'Duration')
  cy.wait(500);
  cy.get('[style="height: 100%;"] > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(8)').should('exist').should('have.text', 'Status')
  cy.wait(500);
}
export const Customers = () => {
  cy.get('#rc-tabs-0-tab-KEY23086').scrollIntoView().should('have.text', 'Details').click()
  cy.wait(1000);
  cy.get(':nth-child(40) > h4').scrollIntoView().should('exist').should('have.text', 'Customers')
  cy.wait(500);
  cy.get('#Job_Customer_table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('exist').should('have.text', 'Customer')
  cy.wait(500);
  cy.get('#Job_Customer_table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('exist').should('have.text', 'Agent')
  cy.wait(500);
  cy.get('#Job_Customer_table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('exist').should('have.text', 'Contract')
  cy.wait(500);
  cy.get('#Job_Customer_table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('exist').should('have.text', 'Surveyor')
  cy.wait(500);
  cy.get('#Job_Customer_table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(5)').should('exist').should('have.text', 'Cargo')
  cy.wait(500);
  cy.get('#Job_Customer_table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(6)').should('exist').should('have.text', 'Tonnage')
  cy.wait(500);

}
export const CustomerDelete = () => {

  cy.get('#rc-tabs-0-tab-KEY23086').should('have.text', 'Details').click();
  cy.wait(1500);
  checkRecordExistInDrawer('#Job_Customer_table').then
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
            cy.get('#Job_Customer-tab-menu-0').click();
            cy.wait(200);
            // Ensure correct document context
            cy.document().then((doc) => {
              const body = doc.querySelector('body');
              if (body) {
                cy.wrap(body).within(() => {
                  cy.get('#delete_button_Job_Customer', { timeout: 20000 })
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
export const UpdateCustomer = () => {
  cy.get('#rc-tabs-0-tab-KEY23086').should('have.text', 'Details').click();
  cy.wait(6500);
  checkRecordExistInDrawer('#Job_Customer_table').then
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
            cy.get('#Job_Customer-tab-menu-0').click();
            cy.wait(200);
            // Ensure correct document context
            cy.document().then((doc) => {
              const body = doc.querySelector('body');
              if (body) {
                cy.wrap(body).within(() => {
                  cy.get('#update_form_Job_Customer', { timeout: 20000 })
                    .should('exist')
                    .should('be.visible')
                    .click({ force: true });
                  cy.wait(1500);







                  //Customer
                  cy.get('#customer').clear({ force: true }).should('exist').click({ force: true })
                  cy.wait(500);
                  checkRecordExistInDrawer('#customer_list').then((exists) => {
                    if (exists) {
                      cy.get('#customer_list_1').click({ force: true })
                      cy.wait(500);
                    }
                    else {
                      cy.log('dropdown not found ')
                    }
                  })
                  cy.wait(500);
                  cy.get('#agent').should('exist').click({ force: true })
                  cy.wait(500);
                  checkRecordExistInDrawer('#agent_list').then((exists) => {
                    if (exists) {
                      cy.get('#agent_list_1').click({ force: true })
                      cy.wait(500);
                    }
                    else {
                      cy.log('dropdown not found ')
                    }
                  })
                  cy.wait(500);
                  cy.get('#surveyor').should('exist').click({ force: true })
                  checkRecordExistInDrawer('#surveyor_list').then((exists) => {
                    if (exists) {
                      cy.get('#surveyor_list_0').eq(0).click({ force: true })
                      cy.wait(500);
                    }
                    else {
                      cy.log('dropdown not found ')
                    }
                  })
                  cy.wait(500);
                  cy.get('#cargo').should('exist').click({ force: true })
                  cy.wait(500);
                  checkRecordExistInDrawer('#cargo_list').then((exists) => {
                    if (exists) {
                      cy.get('#cargo_list_1').eq(0).click({ force: true })
                      cy.wait(500);
                    }
                    else {
                      cy.log('dropdown not found ')
                    }
                  })
                  cy.wait(500);
                  cy.get('#tonnage').should('exist').type('1000')
                  cy.wait(500);
                  cy.get('#pieces').should('exist').type('1000')
                  cy.wait(500);
                  cy.get('#cbm').should('exist').type('787842375')
                  cy.wait(500);
                  cy.get('#contract').should('exist').click({ force: true })
                  cy.wait(500);
                  checkRecordExistInDrawer('#contract_list').then((exists) => {
                    if (exists) {
                      cy.get('#contract_list_0').eq(0).click({ force: true })
                      cy.wait(500);
                    }
                    else {
                      cy.log('dropdown not found ')
                    }
                  })
                  cy.wait(500);
                  cy.get('#target_tph').should('exist').type('3287534')
                  cy.wait(500);
                  cy.get('#po_number').should('exist').type('47385435')
                  cy.wait(500);
                  cy.get('#liner_term').should('exist').click({ force: true })
                  cy.wait(500);
                  checkRecordExistInDrawer('#liner_term_list').then((exists) => {
                    if (exists) {
                      cy.get('#liner_term_list_1').eq(0).click({ force: true })
                      cy.wait(500);
                    }
                    else {
                      cy.log('dropdown not found ')
                    }
                  })

                  cy.get('#cancel_Job_Customer').should('exist')
                  cy.wait(500);
                  cy.get('#update_Job_Customer').click()
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
export const Canceljob = () => {
  cy.get('#rc-tabs-0-tab-KEY23086').should('have.text', 'Details').click()
  cy.wait(500)
  cy.get('#dropdown-Setup').click()
  cy.wait(500)

  
  cy.get('#job-cancel').then(($element) => {
    cy.log($element)
    cy.wait(6000);
    // Check if the button is disabled#
    cy.document().then(doc => {
      const element = doc.querySelectorAll('.disable-link');
      if (element) {
        cy.log('Job cancel');
      } else {
        // Click the button
        cy.wrap($element).click();
        cy.wait(500)
        cy.wait(500)
        cy.get('[style="font-size: 26px; font-weight: bold;"]').should('exist').should('have.text', 'Cancel the job')
        cy.wait(500)
        cy.get('p').should('exist').should('have.text', 'Are you sure you want to cancel this job?')
        cy.wait(500)
        cy.get('.ant-form-item-required').should('exist').should('have.text', 'Reason')
        cy.wait(500)
        cy.get('#reason').should('exist').type('Information not completed')
        cy.wait(500)
        cy.get('#cancel-job-cancel').should('exist')
        cy.wait(500)
        cy.get('#cancel-job-yes').should('exist').click()
      }
    });
  });
}
export const Notes = () => {
  cy.get('#rc-tabs-0-tab-KEY23086').should('have.text', 'Details').click({ force: true })
  cy.wait(500);
  cy.get(':nth-child(41) > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('exist').should('have.text', 'Date')
  cy.wait(500)
  cy.get(':nth-child(41) > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('exist').should('have.text', 'Type')
  cy.wait(500)
  cy.get(':nth-child(41) > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('exist').should('have.text', 'ETA Date')
  cy.wait(500)
  cy.get(':nth-child(41) > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('exist').should('have.text', 'Comments')
  cy.wait(500)

}

export const UpdateNote = () => {
  cy.get('#rc-tabs-0-tab-KEY23086').should('have.text', 'Details').click()
  cy.wait(1500);
  checkRecordExistInDrawer('#Job_Note_table').then((exists) => {
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
          cy.get('#tab-menu-0').click();
          cy.wait(200);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#Form_Update_Button_JobNotes', { timeout: 20000 })
                  .should('exist')
                  .should('be.visible')
                  .click({ force: true });
                cy.wait(200);
                cy.get('#type').should('exist').click({ force: true })
                checkRecordExistInDrawer('#type_list').then((exists) => {
                  cy.log("element exist:", exists)
                  if (exists) {

                    cy.get('#type_list_2 .ant-select-item-option-content').eq(0).click({ force: true })
                    cy.wait(500);
                  }
                  else {
                    cy.log('Dropdown not found')

                  }
                })

                cy.wait(500);
                cy.getCurrentDate().then((currentDate) => {
                  cy.wait(500)
                  cy.get('#date').should('exist').clear({ force: true }).type(currentDate)
                  cy.wait(500)
                  cy.get('#eta_date').should('exist').clear({ force: true }).type(currentDate, { force: true })
                  cy.wait(500)
                  cy.get('#comments').should('exist').clear({ force: true }).type('svsvghv h')
                  cy.wait(500)
                  cy.get('#Cancel_Job_Note').should('exist')
                  cy.wait(500)
                  cy.get('#Submit_Add_Job_Note').should('exist').click()

                })
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
export const DeleteNote = () => {
  cy.get('#rc-tabs-0-tab-KEY23086').should('have.text', 'Details').click()
  cy.wait(1500);
  checkRecordExistInDrawer('#Job_Note_table').then((exists) => {
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
          cy.get('#tab-menu-0').click();
          cy.wait(200);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#delete_button_Job_Note', { timeout: 20000 })
                  .should('exist')
                  .should('be.visible')
                  .click({ force: true });
                cy.wait(200);
                cy.get('#yes-delete').click()
                cy.wait(200);
                cy.get('#cancel-delete').should('exist')
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
export const AddNoteforETADate = () => {
  cy.get('#rc-tabs-0-tab-KEY23086').should('have.text', 'Details').click()
  cy.wait(500);
  cy.get('#Add_Job_Note').scrollIntoView().click()
  cy.wait(500);

  cy.get('#type').should('exist').click()
  cy.wait(500);
  checkRecordExistInDrawer('#type_list').then((exists) => {
    cy.log("element exist:", exists)
    if (exists) {
      cy.get('#type_list_2 .ant-select-item-option-content').first().click({ force: true })
      cy.wait(500);
    }
    else {
      cy.log('Dropdown not found')

    }
  })

  cy.wait(500);
  cy.getCurrentDate().then((currentDate) => {
    cy.wait(500)
    cy.get('#date').should('exist').clear().type(currentDate)
    cy.wait(500)
    cy.get('#eta_date').should('exist').type(currentDate, { force: true })
    cy.wait(500)
    cy.get('#comments').should('exist').type('svs h')
    cy.wait(500)
    cy.get('#Cancel_Job_Note').should('exist')
    cy.wait(500)
    cy.get('#Submit_Add_Job_Note').should('exist').click()
  });
}
export const AddNoteforGeneralComment = () => {
  cy.get('#rc-tabs-0-tab-KEY23086').should('have.text', 'Details').click()
  cy.wait(500);
  cy.get('#Add_Job_Note').click()
  cy.wait(1000);
  cy.get('#type').should('exist').click()
  checkRecordExistInDrawer('#type_list').then((exists) => {
    cy.log("element exist:", exists)
    if (exists) {

      cy.get('#type_list_0 .ant-select-item-option-content').first().click({ force: true })
      cy.wait(500);
    }
    else {
      cy.log('Dropdown not found')

    }
  })
  cy.wait(500);
  cy.getCurrentDate().then((currentDate) => {
    cy.wait(500)
    cy.get('#date').should('exist').clear({ force: true }).type(currentDate)
    cy.wait(500)
    cy.get('#comments').should('exist').type('svs h', { force: true })
    cy.wait(500)
    cy.get('#Cancel_Job_Note').should('exist')
    cy.wait(500)
    cy.get('#Submit_Add_Job_Note').should('exist').click()
  })
}
export const AddNoteforCranePlanner = () => {
  cy.get('#rc-tabs-0-tab-KEY23086').should('have.text', 'Details').click()
  cy.wait(500);
  cy.get('#Add_Job_Note').click()
  cy.wait(1000);
  cy.get('#type').should('exist').click()
  checkRecordExistInDrawer('#type_list').then((exists) => {
    cy.log("element exist:", exists)
    if (exists) {

      cy.get('#type_list_1 .ant-select-item-option-content').first().click({ force: true })
      cy.wait(500);
    }
    else {
      cy.log('Dropdown not found')

    }
  })
  cy.wait(500);
  cy.getCurrentDate().then((currentDate) => {
    cy.wait(500)
    cy.get('#date').should('exist').clear({ force: true }).type(currentDate)
    cy.wait(500)
    cy.get('#comments').should('exist').type('svs h', { force: true })
    cy.wait(500)
    cy.wait(500)
    cy.get('#Cancel_Job_Note').should('exist')
    cy.wait(500)
    cy.get('#Submit_Add_Job_Note').should('exist').click()

  })
}
export const JobLogsList = () => {
  //list
  cy.wait(500);
  cy.get('#rc-tabs-0-tab-KEY23092').should('have.text', 'Job Logs').click()
  cy.wait(500);
  cy.get('h1').should('exist')
  cy.wait(500);
  cy.get('.ant-tag').should('exist')
  cy.wait(500);
  cy.get('#add_crane_log').should('exist')
  cy.wait(500);
  cy.get(':nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('exist').should('have.text', 'Superintendent')
  cy.wait(500);
  cy.get(':nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('exist').should('have.text', 'Job Name')
  cy.wait(500);
  cy.get(':nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('exist').should('have.text', 'Date')
  cy.wait(500);
  cy.get(':nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(5)').should('exist').should('have.text', 'Shift')
  cy.wait(500);
  cy.get(':nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(6)').should('exist').should('have.text', 'Crane')
  cy.wait(500);
  cy.get(':nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(7)').should('exist').should('have.text', 'Bucket used')
  cy.wait(500);
  cy.get(':nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(8)').should('exist').should('have.text', 'Created By')
  cy.wait(500);
  cy.get(':nth-child(2) > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(9)').should('exist').should('have.text', 'Status')
  //  cy.wait(500);

}
export const addCraneLogs = () => {
  cy.get('#rc-tabs-0-tab-KEY23092').should('have.text', 'Job Logs').click()
  cy.getCurrentDate().then((currentDate) => {
    cy.wait(1000)
    cy.get('#add_crane_log').click()
    cy.wait(500);
    cy.get('#modal_title').should('exist').should('have.text', 'Add Crane Log');
    cy.wait(500);
    cy.get('#superintendent').should('exist').click()
    cy.wait(500);
    checkRecordExistInDrawer('#superintendent_list').then((exists) => {
      cy.log("element exist:", exists)
      if (exists) {

        cy.get('#superintendent_list_0 .ant-select-item-option-content').first().click({ force: true })
        cy.wait(500);
      }
      else {
        cy.log('Dropdown not found')

      }
    })
    cy.wait(500);
    cy.get('#date')
      .should('exist')
      .type(currentDate);
    cy.wait(500);
    cy.get('#shift').should('exist').click()
    cy.wait(500);
    checkRecordExistInDrawer('#shift_list').then((exists) => {
      cy.log("element exist:", exists)
      if (exists) {
        cy.wait(500);
        cy.get('#shift_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
        cy.wait(500);
      }
      else {
        cy.log('Dropdown not found')

      }
    })
    cy.wait(500);
    cy.get('#crane').should('exist').click()
    checkRecordExistInDrawer('#crane_list').then((exists) => {
      cy.log("element exist:", exists)
      if (exists) {

        cy.get('#crane_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
        cy.wait(500);
      }
      else {
        cy.log('Dropdown not found')

      }
    })
    cy.wait(500);
    cy.get('#bucket_used').should('exist').type('contraction work');
    cy.wait(500);

    addJobLog()
  })
}
export const addJobLog = () => {
  cy.get('#code_group').should('exist').click()
  cy.wait(500);
  checkRecordExistInDrawer('#code_group_list').then((exists) => {
    cy.log("element exist:", exists)
    if (exists) {

      cy.get('#code_group_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
      cy.wait(500);
    }
    else {
      cy.log('Dropdown not found')

    }
  })

  cy.wait(500);
  cy.get('#dynamic_form_complex_events_0_event').should('exist').click()
  cy.wait(500);
  checkRecordExistInDrawer('#dynamic_form_complex_events_0_event_list').then((exists) => {
    cy.log("element exist:", exists)
    if (exists) {

      cy.get('#dynamic_form_complex_events_0_event_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
      cy.wait(500);
    }
    else {
      cy.log('Dropdown not found')

    }
  })

  cy.wait(500);
  cy.get('#start_time').should('exist').type('09:00')
  cy.wait(500);
  cy.get('#end_time').should('exist').type('06:00')
  cy.wait(500);

  cy.get('#cargo').should('exist').click()
  cy.wait(500);
  checkRecordExistInDrawer('#cargo_list').then((exists) => {
    cy.log("element exist:", exists)
    if (exists) {

      cy.get('#cargo_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
      cy.wait(500);
    }
    else {
      cy.log('Dropdown not found')

    }
  })
  cy.wait(500);
  cy.get('#hold').should('exist').type('9')
  cy.wait(500);

  cy.get('#equip').should('exist').click()
  cy.wait(500);
  checkRecordExistInDrawer('#equip_list').then((exists) => {
    cy.log("element exist:", exists)
    if (exists) {

      cy.get('#equip_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
      cy.wait(500);
    }
    else {
      cy.log('Dropdown not found')

    }
  })
  cy.get('#operator').should('exist').type('ABC')
  cy.wait(500);

  cy.get('#barge').should('exist').click()
  cy.wait(500);
  checkRecordExistInDrawer('#barge_list').then((exists) => {
    cy.log("element exist:", exists)
    if (exists) {

      cy.get('#barge_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
      cy.wait(500);
    }
    else {
      cy.log('Dropdown not found')

    }
  })
  cy.wait(500);
  cy.get('#dynamic_form_complex_events_0_comment').should('exist').clear().type('Read before form before start shift')
  cy.wait(500);
  cy.get('.btn-space > .ant-btn').should('exist')
  cy.get('#remove_crane_log').should('exist')
  cy.wait(500);
  cy.get('#cancelCraneLog').should('exist').should('have.text', 'Cancel')
  cy.wait(500);
  cy.get('#submitCraneLog').should('exist').should('have.text', 'Add Crane Log').click()
  cy.wait(500);
}
export const EditJobLog = () => {
  cy.get('#rc-tabs-0-tab-KEY23092').should('have.text', 'Job Logs').click({ force: true })
  cy.wait(1500);
  checkRecordExistInDrawer('#job_log_table').then((exists) => {
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
          cy.get('.ant-table-row-expand-icon-cell').eq(1).find('> *').first().click();
          cy.wait(200);
          checkRecordExistInDrawer('#expanded_row_table').then((exists) => {
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
                  cy.get('#more_outlined_dropdown').click();
                  cy.wait(200);
                  // Ensure correct document context
                  cy.document().then((doc) => {
                    const body = doc.querySelector('body');
                    if (body) {
                      cy.wrap(body).within(() => {
                        cy.get('#updateEvent', { timeout: 20000 })
                          .should('exist')
                          .should('be.visible')
                          .click({ force: true });
                        cy.wait(6000);
                        cy.get('#code_group').should('exist').click({ force: true })
                        cy.wait(1000);
                        checkRecordExistInDrawer('#code_group_list').then((exists) => {
                          cy.log("element exist:", exists)
                          if (exists) {

                            cy.get('#code_group_list_1 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
                            cy.wait(1000);
                          }
                          else {
                            cy.log('Dropdown not found')

                          }
                        })

                        cy.wait(500);
                        cy.get('#dynamic_form_complex_events_0_event').should('exist').click({ force: true })
                        cy.wait(1000);
                        checkRecordExistInDrawer('#dynamic_form_complex_events_0_event_list').then((exists) => {
                          cy.log("element exist:", exists)
                          if (exists) {

                            cy.get('#dynamic_form_complex_events_0_event_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
                            cy.wait(500);
                          }
                          else {
                            cy.log('Dropdown not found')

                          }
                        })

                        cy.wait(500);
                        cy.get('#start_time').should('exist').clear().type('01:00')
                        cy.wait(500);
                        cy.get('#end_time').should('exist').clear().type('06:00')
                        cy.wait(500);

                        cy.get('#cargo').should('exist').click({ force: true })
                        cy.wait(1000);
                        checkRecordExistInDrawer('#cargo_list').then((exists) => {
                          cy.log("element exist:", exists)
                          if (exists) {

                            cy.get('#cargo_list_1 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
                            cy.wait(500);
                          }
                          else {
                            cy.log('Dropdown not found')

                          }
                        })
                        cy.wait(500);
                        cy.get('#hold').should('exist').clear().type('982')
                        cy.wait(500);

                        cy.get('#equip').should('exist').click({ force: true })
                        cy.wait(1000);
                        checkRecordExistInDrawer('#equip_list').then((exists) => {
                          cy.log("element exist:", exists)
                          if (exists) {

                            cy.get('#equip_list_1 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
                            cy.wait(500);
                          }
                          else {
                            cy.log('Dropdown not found')

                          }
                        })
                        cy.get('#operator').should('exist').clear().type('ABC')
                        cy.wait(500);

                        cy.get('#barge').should('exist').click({ force: true })
                        cy.wait(1000);
                        checkRecordExistInDrawer('#barge_list').then((exists) => {
                          cy.log("element exist:", exists)
                          if (exists) {

                            cy.get('#barge_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
                            cy.wait(500);
                          }
                          else {
                            cy.log('Dropdown not found')

                          }
                        })
                        cy.wait(500);
                        cy.get('#dynamic_form_complex_events_0_comment').should('exist').clear().type('Read before form before start shift')
                        cy.wait(500);
                        cy.get('.btn-space > .ant-btn').should('exist')
                        cy.get('[style="justify-content: flex-end;"] > .ant-btn').should('exist')
                        cy.wait(500);
                        cy.get('#cancelAddEvent').should('exist');
                        cy.get('#submitEvent').should('exist').click();
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

        });
    } else {
      cy.log('record not found');
    }
  });
}
export const DeleteJobLog = () => {
  cy.get('#rc-tabs-0-tab-KEY23092').should('have.text', 'Job Logs').click({ force: true })
  cy.wait(1500);
  checkRecordExistInDrawer('#job_log_table').then((exists) => {
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
          cy.get('.ant-table-row-expand-icon-cell').eq(1).find('> *').first().click();
          cy.wait(200);
          checkRecordExistInDrawer('#expanded_row_table').then((exists) => {
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
                  cy.get('#more_outlined_dropdown').click();
                  cy.wait(200);
                  // Ensure correct document context
                  cy.document().then((doc) => {
                    const body = doc.querySelector('body');
                    if (body) {
                      cy.wrap(body).within(() => {
                        cy.get('#delete_event', { timeout: 20000 })
                          .should('exist')
                          .should('be.visible')
                          .click({ force: true });
                        cy.wait(200);
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

        });
    } else {
      cy.log('record not found');
    }
  });
}
export const AddEvent = () => {
  cy.get('#rc-tabs-0-tab-KEY23092').click()
  cy.wait(1500);
  checkRecordExistInDrawer('#job_log_table').then((exists) => {
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
          cy.get('#job_log_dropdown').click();
          cy.wait(200);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#addEvent', { timeout: 20000 })
                  .should('exist')
                  .should('be.visible')
                  .click({ force: true });
                cy.wait(200);
                cy.get('#code_group').should('exist').should('be.empty').click()
                cy.wait(500);
                checkRecordExistInDrawer('#code_group_list').then((exists) => {
                  cy.log("element exist:", exists)
                  if (exists) {

                    cy.get('#code_group_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
                    cy.wait(500);
                  }
                  else {
                    cy.log('Dropdown not found')

                  }
                })

                cy.wait(500);
                cy.get('#dynamic_form_complex_events_0_event').should('exist').click()
                cy.wait(500);
                checkRecordExistInDrawer('#dynamic_form_complex_events_0_event_list').then((exists) => {
                  cy.log("element exist:", exists)
                  if (exists) {

                    cy.get('#dynamic_form_complex_events_0_event_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
                    cy.wait(500);
                  }
                  else {
                    cy.log('Dropdown not found')

                  }
                })

                cy.wait(500);
                cy.get('#start_time').should('exist').type('09:00')
                cy.wait(500);
                cy.get('#end_time').should('exist').type('06:00')
                cy.wait(500);

                cy.get('#cargo').should('exist').click()
                cy.wait(500);
                checkRecordExistInDrawer('#cargo_list').then((exists) => {
                  cy.log("element exist:", exists)
                  if (exists) {

                    cy.get('#cargo_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
                    cy.wait(500);
                  }
                  else {
                    cy.log('Dropdown not found')

                  }
                })
                cy.wait(500);
                cy.get('#hold').should('exist').type('9')
                cy.wait(500);

                cy.get('#equip').should('exist').click()
                cy.wait(500);
                checkRecordExistInDrawer('#equip_list').then((exists) => {
                  cy.log("element exist:", exists)
                  if (exists) {

                    cy.get('#equip_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
                    cy.wait(500);
                  }
                  else {
                    cy.log('Dropdown not found')

                  }
                })
                cy.get('#operator').should('exist').type('ABC')
                cy.wait(500);

                cy.get('#barge').should('exist').click()
                cy.wait(500);
                checkRecordExistInDrawer('#barge_list').then((exists) => {
                  cy.log("element exist:", exists)
                  if (exists) {

                    cy.get('#barge_list_0 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
                    cy.wait(500);
                  }
                  else {
                    cy.log('Dropdown not found')

                  }
                })
                cy.wait(500);
                cy.get('#dynamic_form_complex_events_0_comment').should('exist').type('Read before form before start shift')
                cy.wait(500);
                cy.get('#add_sub_item_log_details').should('exist')
                cy.get('#remove_sub_item_log_details').should('exist')
                cy.wait(500);
                cy.get('#cancelAddEvent').should('exist').should('have.text', 'Cancel')
                cy.wait(500);
                cy.get('#submitEvent').should('exist').should('have.text', 'Add Event').click()
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
export const EditEvent = () => {
  cy.get('#rc-tabs-0-tab-KEY23092').click()
  cy.wait(1500);
  checkRecordExistInDrawer('#job_log_table').then((exists) => {
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
          cy.get('#job_log_dropdown').click();
          cy.wait(200);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#update_form_Logs', { timeout: 20000 })
                  .should('exist')
                  .should('be.visible')
                  .click({ force: true });
                cy.wait(200);
                cy.getCurrentDate().then((currentDate) => {
                  cy.wait(500)
                  // cy.get('#add_crane_log').click({force: true})
                  cy.wait(500);
                  //cy.get('#modal_title').should('exist');
                  cy.wait(500);
                  cy.get('#superintendent').should('exist').click({ force: true })
                  cy.wait(500);
                  checkRecordExistInDrawer('#superintendent_list').then((exists) => {
                    cy.log("element exist:", exists)
                    if (exists) {

                      cy.get('#superintendent_list_0 .ant-select-item-option-content').first().click({ force: true })
                      cy.wait(500);
                    }
                    else {
                      cy.log('Dropdown not found')

                    }
                  })
                  cy.wait(500);
                  cy.get('#date')
                    .should('exist').clear({ force: true })
                    .type(currentDate);
                  cy.wait(500);
                  cy.get('#shift').should('exist').clear({ force: true }).click({ force: true })
                  cy.wait(500);
                  checkRecordExistInDrawer('#shift_list').then((exists) => {
                    cy.log("element exist:", exists)
                    if (exists) {

                      cy.get('#shift_list_1 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
                      cy.wait(500);
                    }
                    else {
                      cy.log('Dropdown not found')

                    }
                  })
                  cy.wait(500);
                  cy.get('#crane').should('exist').click({ force: true })
                  checkRecordExistInDrawer('#crane_list').then((exists) => {
                    cy.log("element exist:", exists)
                    if (exists) {

                      cy.get('#crane_list_1 .ant-select-item-option-content', { timeout: 10000 }).first().click({ force: true })
                      cy.wait(500);
                    }
                    else {
                      cy.log('Dropdown not found')

                    }
                  })
                  cy.wait(500);
                  cy.get('#bucket_used').should('exist').clear().type('contraction work');
                  cy.wait(500);
                  cy.get('#cancel_Logs').should('exist')
                  cy.wait(500)
                  cy.get('#update_Logs').click()
                })

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
export const DeleteEvent = () => {
  cy.get('#rc-tabs-0-tab-KEY23092').click()

  cy.wait(1500);
  checkRecordExistInDrawer('#job_log_table').then((exists) => {
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
          cy.get('#job_log_dropdown').click();
          cy.wait(200);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#delete_log', { timeout: 20000 })
                  .should('exist')
                  .should('be.visible')
                  .click({ force: true });

                cy.wait(200);
                cy.get('.ant-btn-dangerous > span').click()
                cy.wait(200);
                // cy.get('#cancel-delete').should('exist')
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

export const Cranes = () => {
  cy.wait(500);
  cy.get('#rc-tabs-0-tab-KEY24711').click()
  cy.wait(1000);
  cy.get('h1').should('exist')
  cy.wait(500);
  cy.get('.ant-tag').should('exist')
  cy.wait(500);
  cy.get('#rc-tabs-1-tab-1').should('exist').should('have.text', 'Crane Assignment');
  cy.wait(500);
  cy.get('#rc-tabs-1-tab-2').should('exist').should('have.text', 'Crane Working Times')
  cy.wait(500);
  cy.get('#Add_Button_Tab_Crane_Assignment').should('exist')
  // CraneAssigment()
  // CraneWorkingTimes()
}
export const CraneAssigment = () => {
  cy.get('#rc-tabs-0-tab-KEY24711').click()
  cy.getDateSixDaysLater().then((dateSixDaysLater) => {
    cy.getCurrentDate().then((currentDate) => {
      cy.get('#rc-tabs-1-tab-1').click()
      cy.wait(500);
      cy.get('#rc-tabs-1-panel-1 > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('exist').should('have.text', 'Crane')
      cy.wait(500);
      cy.get('#rc-tabs-1-panel-1 > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('exist').should('have.text', 'Crane On')
      cy.wait(500);
      cy.get('#rc-tabs-1-panel-1 > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('exist').should('have.text', 'Crane Off')
      cy.wait(500);
      cy.get('#rc-tabs-1-panel-1 > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('exist').should('have.text', 'Duration')
      cy.wait(500);
      cy.get('#Add_Button_Tab_Crane_Assignment').should('exist').should('have.text', 'Add Crane Assignment').click()
      cy.wait(500);
      cy.get('#crane').should('exist').click({ force: true })
      cy.wait(500);
      checkRecordExistInDrawer('#crane_list').then((exists) => {
        cy.log("element exist:", exists)
        if (exists) {

          cy.get('#crane_list_0 .ant-select-item-option-content').eq(0).click({ force: true })
          cy.wait(500);
        }
        else {
          cy.log('Dropdown not found')

        }
      })
      cy.wait(500);
      cy.get('#crane_on').should('exist').type(currentDate, { force: true })
      cy.wait(500);
      cy.get('#crane_off').should('exist').type(dateSixDaysLater, { force: true })
      cy.wait(500);
      cy.get('#description').should('exist').type('Assign you crane')
      cy.wait(500);
      cy.get('#cancel_Crane_Assignment').should('exist').should('have.text', 'Cancel')
      cy.wait(500);
      cy.get('#add_Crane_Assignment').should('exist').should('have.text', 'Add Crane Assignment').click()
      cy.wait(500);
    })
  })
}
export const UpdateCraneAssigmen = () => {
  cy.getDateSixDaysLater().then((dateSixDaysLater) => {
    cy.getCurrentDate().then((currentDate) => {
      cy.get('#rc-tabs-0-tab-KEY24711').click({ force: true })
      cy.wait(1500);
      checkRecordExistInDrawer('#Crane_Assignment_table').then((exists) => {
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
              cy.get('#Crane_Assignment-tab-menu-0').click();
              cy.wait(200);
              // Ensure correct document context
              cy.document().then((doc) => {
                const body = doc.querySelector('body');
                if (body) {
                  cy.wrap(body).within(() => {
                    cy.get('#update_form_Crane_Assignment', { timeout: 20000 })
                      .should('exist')
                      .should('be.visible')
                      .click({ force: true });
                    cy.wait(200);
                    cy.wait(500);
                    cy.get('#crane').should('exist').click({ force: true })
                    cy.wait(500);
                    checkRecordExistInDrawer('#crane_list').then((exists) => {
                      cy.log("element exist:", exists)
                      if (exists) {
                        cy.wait(500)
                        cy.get('#crane_list_1 .ant-select-item-option-content').eq(0).click({ force: true })
                        cy.wait(500);
                      }
                      else {
                        cy.log('Dropdown not found')

                      }
                    })
                    cy.wait(500);
                    cy.get('#crane_on').should('exist').clear().type(currentDate)
                    cy.wait(500);
                    cy.get('#crane_off').should('exist').clear().type(dateSixDaysLater)
                    cy.wait(500);
                    cy.get('#description').should('exist').clear().type('Assign your crane')
                    cy.wait(500);
                    cy.get('#cancel_Crane_Assignment').should('exist').should('have.text', 'Cancel')
                    cy.wait(500);
                    cy.get('#cancel_Crane_Assignment').should('exist')
                    cy.wait(500);
                    cy.get('#update_Crane_Assignment').click()

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
    });
  });
}
export const DeleteCraneAssigment = () => {
  cy.get('#rc-tabs-0-tab-KEY24711').click({ force: true })
  cy.wait(1500);
  checkRecordExistInDrawer('#Crane_Assignment_table').then((exists) => {
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
          cy.get('#Crane_Assignment-tab-menu-0').click();
          cy.wait(200);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#delete_button_Crane_Assignment', { timeout: 20000 })
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
export const CraneWorkingTimes = () => {
  cy.get('#rc-tabs-0-tab-KEY24711').click()
  cy.getDateSixDaysLater().then((dateSixDaysLater) => {
    cy.getCurrentDate().then((currentDate) => {
      cy.get('#rc-tabs-1-tab-2').click()
      cy.wait(500);
      cy.get('#rc-tabs-1-panel-2 > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('exist').should('have.text', 'Time From')
      cy.wait(500);
      cy.get('#rc-tabs-1-panel-2 > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('exist').should('have.text', 'Time To')
      cy.wait(500);
      cy.get('#rc-tabs-1-panel-2 > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('exist').should('have.text', 'Activity')
      cy.wait(500);
      cy.get('#rc-tabs-1-panel-2 > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('exist').should('have.text', 'Description')
      cy.wait(500);
      cy.get('#Add_Button_Tab_Crane_Working_Times').should('exist').should('have.text', 'Add Crane Working Times').click()
      cy.wait(500);
      cy.get('#time_from_1').should('exist').type(currentDate)
      cy.wait(500);
      cy.get('#time_to_1').should('exist').type(dateSixDaysLater)
      cy.wait(500);
      cy.get('#activity').should('exist').type('load crane')
      cy.wait(500);
      cy.get('#description').should('exist').type('Load crane of glass')
      cy.wait(500);
      cy.wait(500);
      cy.get('#cancel_Crane_Working_Times').should('exist').should('have.text', 'Cancel')
      cy.wait(500);
      cy.get('#add_Crane_Working_Times').should('exist').should('have.text', 'Add Crane Working Times').click()
      cy.wait(500);
    })
  })
}
export const UpdateCraneWorkingTimes = () => {
  cy.get('#rc-tabs-0-tab-KEY24711').click()
  cy.getDateSixDaysLater().then((dateSixDaysLater) => {
    cy.getCurrentDate().then((currentDate) => {
      cy.get('#rc-tabs-1-tab-2').click()

      cy.wait(1500);
      checkRecordExistInDrawer('#Crane_Working_Times_table').then((exists) => {
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
              cy.get('#Crane_Working_Times-tab-menu-0').click();
              cy.wait(200);
              // Ensure correct document context
              cy.document().then((doc) => {
                const body = doc.querySelector('body');
                if (body) {
                  cy.wrap(body).within(() => {
                    cy.get('#update_form_Crane_Working_Times', { timeout: 20000 })
                      .should('exist')
                      .should('be.visible')
                      .click({ force: true });
                    cy.wait(200);

                    cy.wait(500);
                    cy.get('#time_from_1').should('exist').clear({ force: true }).type(currentDate)
                    cy.wait(500);
                    cy.get('#time_to_1').should('exist').clear({ force: true }).type(dateSixDaysLater)
                    cy.wait(500);
                    cy.get('#activity').should('exist').clear({ force: true }).type('unload crane ')
                    cy.wait(500);
                    cy.get('#description').should('exist').clear({ force: true }).type('Load  & unload crane of glass ')
                    cy.wait(500);
                    cy.get('#cancel_Crane_Working_Times').should('exist').should('have.text', 'Cancel')
                    cy.wait(500);
                    cy.get('#update_Crane_Working_Times').should('exist').should('have.text', 'Update Crane Working Times').click()
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



    })
  })
}
export const DeleteCraneWorkingTimes = () => {
  cy.get('#rc-tabs-0-tab-KEY24711').click()
  cy.get('#rc-tabs-1-tab-2').click()

  cy.wait(1500);
  checkRecordExistInDrawer('#Crane_Working_Times_table').then((exists) => {
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
          cy.get('#Crane_Working_Times-tab-menu-0').click();
          cy.wait(200);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#delete_button_Crane_Working_Times', { timeout: 20000 })
                  .should('exist')
                  .should('be.visible')
                  .click({ force: true });
                cy.wait(200);
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

export const Documents = () => {
  cy.wait(500);
  cy.get('#rc-tabs-0-tab-KEY23091').should('exist').click({ force: true })
  cy.wait(500);
  cy.get('h1').should('exist')
  cy.wait(500);
  cy.get('.ant-tag').should('exist')
  cy.wait(500);
  cy.get('#dragger-main > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(1)').should('exist').should('have.text', 'File Name')
  cy.wait(500);
  cy.get('#dragger-main > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(2)').should('exist').should('have.text', 'Date')
  cy.wait(500);
  cy.get('#dragger-main > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(3)').should('exist').should('have.text', 'Size')
  cy.wait(500);
  cy.get('#dragger-main > .card-table > .ant-table-wrapper > .ant-spin-nested-loading > .ant-spin-container > .ant-table > .ant-table-container > .ant-table-content > table > .ant-table-thead > tr > :nth-child(4)').should('exist').should('have.text', 'Added by')
  cy.wait(500);
  cy.get('.ant-row > :nth-child(2) > div > .ant-btn').should('exist').should('have.text', 'Add Document').click()
  cy.wait(500);
  cy.get('.ant-row > :nth-child(2) > div > .ant-btn').should('exist')
  cy.wait(500);
  const filePath = 'Downloads/invoice_D-INV-07-24-01092-bf145f3573.pdf';
  cy.wait(500);
  cy.get('input[type="file"]').attachFile(filePath);
  cy.wait(500);
  cy.contains('File uploaded successfully').should('be.visible');
}
export const DeleteDocuments = () => {
  cy.get('#rc-tabs-0-tab-KEY23091').should('exist').click({ force: true })
  cy.wait(1500);
  checkRecordExistInDrawer('#Documents_table').then((exists) => {
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
          cy.get('#Documents-tab-menu-0').click();
          cy.wait(200);
          // Ensure correct document context
          cy.document().then((doc) => {
            const body = doc.querySelector('body');
            if (body) {
              cy.wrap(body).within(() => {
                cy.get('#delete_button_Documents', { timeout: 20000 })
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
export const Activity = () => {
  cy.get('#rc-tabs-0-tab-KEY23093').click({ force: true })
  cy.wait(500);
  cy.get('h1').should('exist')
  cy.wait(500);
  cy.get('.ant-tag').should('exist')
  cy.wait(500);
  cy.get('.ant-list-item').should('exist')
}
Cypress.Commands.add('getCurrentDate', () => {
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
  return currentDate;
});
Cypress.Commands.add('getDateSixDaysLater', () => {
  const dateSixDaysLater = dayjs().add(6, 'day').format('YYYY-MM-DD HH:mm:ss');
  return dateSixDaysLater;
});
