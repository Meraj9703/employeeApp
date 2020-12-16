 
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import{EmpserviceService} from '../service/empservice.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  getdata:any=[];
  p: number = 1;
   
   
  constructor(private routes:Router,private empservice:EmpserviceService,private ar:ActivatedRoute) {
    for(let i=0;i<this.getdata.length;i++){
    }

    this.getemployeeservice()
     
   }

   

  ngOnInit(): void {
  }

  details(id){
     
    this.routes.navigate(['employeelist'],{ queryParams: { id:id }});
    }
  

  public getemployeeservice(){
     this.empservice.getEployee().subscribe((data:any)=>{
       
      this.getdata=data;
      //console.log(this.getdata)
     })
  }

  
}
