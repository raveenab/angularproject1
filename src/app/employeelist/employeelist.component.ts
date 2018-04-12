import { Component, OnInit } from '@angular/core';
import { MenuserviceService } from "../menuservice.service";

@Component({
  selector: 'app-employeelist',
  template: `
    <h3>Employee List</h3>
    <ul *ngFor='let employee of employees'>
      <li>{{employee.name}} -- {{employee.photoPath}}</li>
    </ul>
  `,
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {


  public employees = [];


  constructor(private _menuserviceservice : MenuserviceService) { }

  ngOnInit() {
    this.employees = this._menuserviceservice.getEmployees();
  }

}
