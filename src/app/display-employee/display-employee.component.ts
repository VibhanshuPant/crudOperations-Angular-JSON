
import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  employeeDetails: any;
  curr_emp:any;
  
  constructor(private httpService:HttpService) { 
    
  }

  ngOnInit(): void {
    this.httpService.displayEmployee().subscribe((empDetails)=>{
      this.employeeDetails=empDetails;
    });
  }
  deleteEmployee(emp:any)
  {
    this.httpService.deleteUser(emp).subscribe(()=>{
      this.displayEmployee();
    });
  }
  editEmployee(emp:any)
  {
    this.httpService.curr_emp= Object.assign({},emp);
    this.httpService.isAdd=true;
    this.httpService.isUpdate=false;
  }
  displayEmployee()
  {
    this.httpService.displayEmployee().subscribe((empDetails)=>{
      this.employeeDetails=empDetails;
    });
  }

  
}
