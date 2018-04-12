import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  ClickMessage = '';

  onClickMe() {
        this.ClickMessage = "Raveena Kandlikar";
  }

  value="";
  onEnter( value : string ){ this.value = value; }

}
