import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url="http://localhost:3000/employee";
  constructor(private http:HttpClient) { }
  curr_emp:any={
    id:'',
    name:''
  }
  isAdd=false;
  isUpdate=true;
  addEmployee(employee: any)
  {
     return  this.http.post(this.url,employee);
  }
  displayEmployee(){
    return this.http.get(this.url);
  }
  deleteUser(emp:any)
  {
    return this.http.delete(this.url+'/'+emp.id);
  }
  
  editEmployee(emp:any)
  {
    return this.http.put(this.url+'/'+emp.id,emp);
  }
}
