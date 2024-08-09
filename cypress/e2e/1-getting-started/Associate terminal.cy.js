/// <reference types="cypress" />
import { loginTest } from '../../support/loginTest';
import { JobList, AddJob, UpdateJob, DeleteJob, jobsetup  } from '../../support/Job';
import {  opendrawer, Details, Canceljob, Customers, UpdateCustomer,  CustomerDelete, Notes, AddNoteforETADate, AddNoteforGeneralComment, AddNoteforCranePlanner,  DeleteBargeLoading, loading, AddLoading, UpdateBargeLoading, JobLogSummary, Equipment,  Documents, DeleteDocuments, Activity, Cranes, CraneAssigment, CraneWorkingTimes, DeleteCraneAssigment, UpdateCraneAssigmen, UpdateCraneWorkingTimes, DeleteCraneWorkingTimes, UpdateNote, DeleteNote, JobLogsList, addCraneLogs, AddEvent, EditEvent, DeleteEvent, EditJobLog, DeleteJobLog } from '../../support/job_drawer';
import { contractList, Addcontractform, UpdateContract, DeleteContract, ContractOpenDawer, stevedoeingRate, stevedoeingRateUpdate, stevedoeingRateDelete, StorageRatesDelete,StorageRates, StorageRatesUpdate, GuaranteeAmount, GuaranteeAmountDelete, GuaranteeAmountUpdate, contractDetails, AddContractNote, UpdateContractNote, DeleteContractNote,  } from '../../support/Contract';
describe('ATM', function(){
  it('job  list ', function(){
   loginTest()
   cy.wait(500)
   JobList()
})
   it('Add job ', function(){
    loginTest()
    cy.wait(500)
    AddJob()
})
   it(' job setup', function(){
    loginTest()
    cy.wait(500)
    jobsetup()
})
   it('Update job ', function(){
    loginTest()
    cy.wait(500)
    UpdateJob()
})
   it('delete job ', function(){
    loginTest()
    cy.wait(500)
    DeleteJob()
})
it('open job drawer', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
})
it(' Job Details', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  Details()
})
it(' Canceljob ', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  cy.wait(500)
  Canceljob()
})
it('Cutomer list', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  Customers()
})
it('Customers Update', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  UpdateCustomer()
  })
it('Cutomer Delete', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  CustomerDelete()
})

it('Note List ', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  Notes()
})
it(' Add Note for ET ADate', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  AddNoteforETADate()

})

it(' Add Note for General Comment', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  cy.wait(500);
AddNoteforGeneralComment()
})
it('Add Note for Crane Planner', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  AddNoteforCranePlanner()
})

it(' Update Note', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  UpdateNote()

})
it(' Delete note', function(){

  loginTest()
  opendrawer()
DeleteNote()

})
it('loading list', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  loading()
 
})
it('Add barge loading ', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  cy.wait(6000);
  AddLoading()
   // dropdown not select 
})
it('DeleteBargeLoading', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  DeleteBargeLoading()
  
})
it('Update Barge leading ', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  UpdateBargeLoading()
})
 // dropdown not select 
it('Job Log Summary', function(){


  loginTest()
  cy.wait(500)
  opendrawer()
  JobLogSummary()
})
it('Equipment ', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  Equipment()
})
it('Job Logs list', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  JobLogsList()
})
it('add Crane Logs', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  addCraneLogs()
})
it('Edit Crane Logs', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  EditJobLog()

})
it('Delete Crane Logs', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  DeleteJobLog()
 
})
it(' Add Event ', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  AddEvent()
})
it(' Update Event ', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  EditEvent()
})
it(' Delete Event ', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  DeleteEvent()
})

it('uploade Documents', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  Documents()
  //replace id of add document 
})  
it('Delete Documents', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  DeleteDocuments()
}) 
it('Activity', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  Activity()
}) 
it('Crane list', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  Cranes()
}) 
it.only('CraneAssigment', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  CraneAssigment()
}) 
it(' Update Crane Assigment', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  UpdateCraneAssigmen()
  
}) 

it(' Delete Crane Assigment', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  DeleteCraneAssigment()
  
}) 

it('CraneWorkingTimes', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  CraneWorkingTimes()
}) 
it('Update Crane Working Times', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  UpdateCraneWorkingTimes()
 
})
it('Delete Crane Working Times ', function(){
  loginTest()
  cy.wait(500)
  opendrawer()
  DeleteCraneWorkingTimes()
 
})
it('Contract List', function(){
  loginTest()
  contractList()
 
})
it('Add contract', function(){
  loginTest()
  cy.wait(500)
  Addcontractform()
 
})
it('Update contract', function(){
  loginTest()
  cy.wait(500)
  UpdateContract()

 
})
it('Delete contract', function(){
  loginTest()
  cy.wait(500)
  DeleteContract()
 
 
})
it('Contract Open dawer', function(){
  loginTest()
  cy.wait(500)
ContractOpenDawer()

})
it('Contract details', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  contractDetails()

})
it('Add stevedoeing Rate ', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  stevedoeingRate()
})
it(' stevedoeing Rate Update', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  stevedoeingRateUpdate()
})
it('stevedoeing Rate Delete', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  stevedoeingRateDelete()
})
it(' Add Storage Rates', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  StorageRates()
})
it(' Udate Storage Rates', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  StorageRatesUpdate()
})
it('Delete Storage Rates', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  StorageRatesDelete()
})
it(' add Guarantee Amount', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  GuaranteeAmount()
})
it(' Guarantee Amount Update', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  GuaranteeAmountUpdate()
})
it(' Guarantee Amount Delete', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  GuaranteeAmountDelete()
})
it('Add Contract Note', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  AddContractNote()
})
it('Update Contract Note', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  UpdateContractNote()
})
it('Delete Contract Not', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
  DeleteContractNote()
})
it('', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
})
it('', function(){
  loginTest()
  cy.wait(500)
  ContractOpenDawer()
})



});
