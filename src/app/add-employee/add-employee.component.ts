import { Router } from '@angular/router';

import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  curr_emp:any={
    id:'',
    name:''
  }
  errorMsg='';
  ispresent:boolean=false;
  employeeDetails: any;
  constructor(public httpService:HttpService,
    private router:Router) {   }
  
  ngOnInit(): void {
    this.httpService.displayEmployee().subscribe((empDetails)=>{
      this.employeeDetails=empDetails;
    });
    
  }
  addEmployee(employeeDetails:any)
  {
      if(employeeDetails.id!='' &&employeeDetails.name!='')
      {
          this.httpService.addEmployee(employeeDetails).subscribe(()=>{
            window.location.reload();
          });
        }
  }
  displayEmployee()
  {
    this.httpService.displayEmployee().subscribe((empDetails)=>{
      this.employeeDetails=empDetails;
    });
  }
  updateEmployee(emp:any)
  {
    this.httpService.editEmployee(emp).subscribe(()=>{
      window.location.reload();
    });
    
    
  }

}
