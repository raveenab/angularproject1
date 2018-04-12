import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MenuserviceService } from "./menuservice.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { ContactformComponent } from './contactform/contactform.component';
import { LoginformComponent } from './loginform/loginform.component';
import { LogoutformComponent } from './logoutform/logoutform.component';
// import { Route } from '@angular/compiler/src/core';

const appRoutes: Routes = [
  { path: '', component: LoginformComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'employeedetails', component: EmployeedetailsComponent },
  { path: 'employeelist', component: EmployeelistComponent },
  { path: 'contactform', component: ContactformComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    EmployeelistComponent,
    EmployeedetailsComponent,
    ContactformComponent,
    LoginformComponent,
    LogoutformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MenuserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
