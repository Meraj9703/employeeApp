import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpserviceService } from '../service/empservice.service';
import{Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  myForm:FormGroup;
  emprecord:any;
  empdet:any;
  constructor(private ar:ActivatedRoute,private routes:Router,private empservice:EmpserviceService) { 
    this.myForm=new FormGroup({
      first_name:new FormControl('',Validators.required),
      last_name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      upload:new FormControl('',Validators.required)
    })
  }

  ngOnInit() {
  
    this.empdet=this.ar.snapshot.queryParamMap.get('id')
     this.empgetdetails();
  }
  
   empgetdetails(){
   //let id=this.ar.snapshot.params['id']      
    this.empservice.getEmployeebyid(this.empdet).subscribe((dt:any)=>{
      this.emprecord=dt;
      //console.log(this.emprecord);
       
    })
   }
  
  editRecord(id){
  //this.routes.navigateByUrl['editemployee']
  
  this.routes.navigate(['editemployee'],{ queryParams: { id:id }});
  
  }

  deleteRecord(id){
    var obj={
      first_name:this.myForm.controls.first_name.value,
      last_name:this.myForm.controls.last_name.value,
      email:this.myForm.controls.email.value,
      upload:this.myForm.controls.upload.value
    }
    this.empservice.deleteEmployee(id,obj).subscribe((dt:any)=>{
      console.log(dt);
        this.routes.navigate(['employee'])
    })
  }



}
