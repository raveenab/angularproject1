import { Component, OnInit } from '@angular/core';
import { MenuserviceService } from '../menuservice.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {



  public language = [];

  constructor(private _menuserviceservice : MenuserviceService) { }


  // onSubmit() {
  //   if (this.myform.valid) {
  //     console.log("Form Submitted!");
  //     this.myform.reset();
  //   }
  // }

  ngOnInit() {
    this.language = this._menuserviceservice.getLanguage();
  }
}
