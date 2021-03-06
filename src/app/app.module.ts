import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import{AgmCoreModule} from '@agm/core'
import{NgxPaginationModule} from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import{ReactiveFormsModule} from '@angular/forms';
import { EmployeelistComponent } from './employeelist/employeelist.component'
import { RouterModule,Routes } from '@angular/router';
import { EditemployeeComponent } from './editemployee/editemployee.component';
 
 
 
  


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    AddemployeeComponent,
    EmployeelistComponent,
    EditemployeeComponent,
     
     
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule, 
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
     
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
