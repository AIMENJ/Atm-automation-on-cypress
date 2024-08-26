/// <reference types="cypress" />
import { loginTest } from '../../support/loginTest';
import { JobList, AddJob, UpdateJob, DeleteJob, jobsetup  } from '../../support/Job';
import {  opendrawer, Details, Canceljob, Customers, UpdateCustomer,  CustomerDelete, Notes, AddNoteforETADate, AddNoteforGeneralComment, AddNoteforCranePlanner,  DeleteBargeLoading, loading, AddLoading, UpdateBargeLoading, JobLogSummary, Equipment,  Documents, DeleteDocuments, Activity, Cranes, CraneAssigment, CraneWorkingTimes, DeleteCraneAssigment, UpdateCraneAssigmen, UpdateCraneWorkingTimes, DeleteCraneWorkingTimes, UpdateNote, DeleteNote, JobLogsList, addCraneLogs, AddEvent, EditEvent, DeleteEvent, EditJobLog, DeleteJobLog } from '../../support/job_drawer';
import { contractList, Addcontractform, UpdateContract, DeleteContract, ContractOpenDawer, stevedoeingRate, stevedoeingRateUpdate, stevedoeingRateDelete, StorageRatesDelete,StorageRates, StorageRatesUpdate, GuaranteeAmount, GuaranteeAmountDelete, GuaranteeAmountUpdate, contractDetails, AddContractNote, UpdateContractNote, DeleteContractNote,  } from '../../support/Contract';
import { MooringList, AddMooring,  DeleteMooring, UpdateMooring } from '../../support/mooring';
import { InventoryList, CreateBL} from '../../support/Inventory';
describe('ATM', function(){
  beforeEach(() => {
    loginTest()
    cy.wait(10000)
  })
  it('job  list ', function(){
   JobList()
})
   it('Add job ', function(){
  
    cy.wait(500)
    AddJob()
})
   it(' job setup', function(){
 
    cy.wait(500)
    jobsetup()
})
   it('Update job ', function(){
    
    cy.wait(500)
    UpdateJob()
})
   it('delete job ', function(){

    cy.wait(500)
    DeleteJob()
})
it('open job drawer', function(){
 
  cy.wait(500)
  opendrawer()
})
it(' Job Details', function(){

  cy.wait(500)
  opendrawer()
  Details()
})
it(' Canceljob ', function(){
 
  cy.wait(500)
  opendrawer()
  cy.wait(500)
  Canceljob()
})
it('Cutomer list', function(){

  cy.wait(500)
  opendrawer()
  cy.wait(500);
  Customers()
})
it('Customers Update', function(){
  
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  UpdateCustomer()
  })
it('Cutomer Delete', function(){
  
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  CustomerDelete()
})

it('Note List ', function(){
  
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  Notes()
})
it(' Add Note for ET ADate', function(){
 
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  AddNoteforETADate()

})

it(' Add Note for General Comment', function(){

  cy.wait(500)
  opendrawer()
  cy.wait(500);
AddNoteforGeneralComment()
})
it('Add Note for Crane Planner', function(){
  
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  AddNoteforCranePlanner()
})

it(' Update Note', function(){
 
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  UpdateNote()

})
it(' Delete note', function(){
  cy.wait(500);
  opendrawer()
  cy.wait(500);
DeleteNote()

})
it('loading list', function(){
  
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  loading()
 
})
it('Add barge loading ', function(){
 cy.wait(500)
  opendrawer()
  cy.wait(500)
  AddLoading()
})
it('Update Barge leading ', function(){
  cy.wait(500)
  opendrawer()
  cy.wait(500)
  UpdateBargeLoading()
})
it('DeleteBargeLoading', function(){
  cy.wait(500)
  opendrawer()
  cy.wait(500);
  DeleteBargeLoading()
  })
  
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
  opendrawer()
  cy.wait(6000)
  JobLogsList()
})
it('add Crane Logs', function(){

  opendrawer()
  cy.wait(6000)
  addCraneLogs()
})
it('Edit Crane Logs', function(){
 
  opendrawer()
  cy.wait(6000)
  EditJobLog()

})
it('Delete Crane Logs', function(){
  opendrawer()
cy.wait(6000)
  DeleteJobLog()
 
})
it(' Add Event ', function(){

  opendrawer()
  cy.wait(6000)
  AddEvent()
})
it(' Update Event ', function(){
  
  opendrawer()
  cy.wait(6000)
  EditEvent()
})
it(' Delete Event ', function(){

  opendrawer()
  cy.wait(6000)
  DeleteEvent()
})

it('uploade Documents', function(){
 cy.wait(500)
  opendrawer()
  cy.wait(500)
  Documents()
 
})  
it('Delete Documents', function(){
 
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
  cy.wait(500)
  opendrawer()
  cy.wait(500)
  Cranes()
}) 
it('CraneAssigment', function(){
  cy.wait(500)
  opendrawer()
  cy.wait(1000)
  CraneAssigment()
}) 
it(' Update Crane Assigment', function(){
  cy.wait(500)
  opendrawer()
  cy.wait(500)
  UpdateCraneAssigmen()
  
}) 

it(' Delete Crane Assigment', function(){
  cy.wait(500)
  opendrawer()
  cy.wait(500)
  DeleteCraneAssigment()
  
}) 

it('CraneWorkingTimes', function(){
  cy.wait(500)
  opendrawer()
  cy.wait(500)
  CraneWorkingTimes()
}) 
it('Update Crane Working Times', function(){
  cy.wait(500)
  opendrawer()
  cy.wait(500)
  UpdateCraneWorkingTimes()
 
})
it('Delete Crane Working Times ', function(){
  cy.wait(500)
  opendrawer()
  cy.wait(500)
  DeleteCraneWorkingTimes()
 
})
it('Contract List', function(){
  cy.wait(500)
  contractList()
 
})
it('Add contract', function(){

  cy.wait(500)
  Addcontractform()
 
})
it('Update contract', function(){
 
  cy.wait(500)
  UpdateContract()

 
})
it('Delete contract', function(){

  cy.wait(500)
  DeleteContract()
 
 
})
it('Contract Open dawer', function(){

  cy.wait(500)
ContractOpenDawer()

})
it('Contract details', function(){
  
  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  contractDetails()

})
it('Add stevedoeing Rate ', function(){
  
  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  stevedoeingRate()
})
it(' stevedoeing Rate Update', function(){
 
  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  stevedoeingRateUpdate()
})
it('stevedoeing Rate Delete', function(){
  
  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  stevedoeingRateDelete()
})
it(' Add Storage Rates', function(){
  
  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  StorageRates()
})
it(' Udate Storage Rates', function(){
  
  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  StorageRatesUpdate()
})
it('Delete Storage Rates', function(){

  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  StorageRatesDelete()
})
it(' add Guarantee Amount', function(){

  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  GuaranteeAmount()
})
it(' Guarantee Amount Update', function(){
 
  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  GuaranteeAmountUpdate()
})
it(' Guarantee Amount Delete', function(){

  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  GuaranteeAmountDelete()
})
it('Add Contract Note', function(){
  
  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  AddContractNote()
})
it('Update Contract Note', function(){
  
  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  UpdateContractNote()
})
it('Delete Contract Not', function(){

  cy.wait(500)
  ContractOpenDawer()
  cy.wait(500)
  DeleteContractNote()
})
it('Mooring List', function(){
  
  cy.wait(500)
  MooringList()
})
it('Add Mooring', function(){
  
  cy.wait(500)
  AddMooring()
  //select unit type
})

it.only('Update  Mooring', function(){
  
  cy.wait(500)
UpdateMooring()
//clear at rate 
//select unit type
})
it('Delete  Mooring', function(){
  
  cy.wait(500)
DeleteMooring()
})
it('Cargo Details list', function(){ 
  cy.wait(500)
  InventoryList()
})
it('Add Create BL', function(){ 
  cy.wait(500)
  CreateBL()
  
})
});
