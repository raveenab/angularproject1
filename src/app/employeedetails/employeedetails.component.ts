import { Component, OnInit } from '@angular/core';
import { MenuserviceService } from "../menuservice.service";

@Component({
  selector: 'app-employeedetails',
  template: `
  <h2>Employee Details</h2>
  <ul *ngFor='let employee of employees'>
    <li>{{employee.id}}. {{employee.name}}-{{employee.age}}</li>
  </ul>
  `,
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {

  public employees = [];


  constructor(private _menuserviceservice : MenuserviceService) { }

  ngOnInit() {
    this.employees = this._menuserviceservice.getEmployees();
  }
}
