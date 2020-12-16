import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpserviceService } from '../service/empservice.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  myForm:FormGroup;
  emprecord: any;
  empdet: any;
  constructor(private ar:ActivatedRoute,private empservice:EmpserviceService,private routes:Router) { 

    this.myForm=new FormGroup({
      first_name:new FormControl('',Validators.required),
      last_name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      upload:new FormControl('',Validators.required)
    })
  }

  ngOnInit(): void {
    this.empdet=this.ar.snapshot.queryParamMap.get('id')
    this.empgetdetails();
  }

  empgetdetails(){
       
     this.empservice.getEmployeebyid(this.empdet).subscribe((dt:any)=>{
       this.emprecord=dt;  
       this.myForm.get('first_name').setValue(this.emprecord.first_name);
       this.myForm.get('last_name').setValue(this.emprecord.last_name);
       this.myForm.get('email').setValue(this.emprecord.email);
       this.myForm.get('upload').setValue(this.emprecord.upload)
       
     })
    }

   

  subData(){
      if(this.myForm.valid==true){
        var obj={
          first_name:this.myForm.controls.first_name.value,
          last_name:this.myForm.controls.last_name.value,
          email:this.myForm.controls.email.value,
          upload:this.myForm.controls.upload.value
        }
        this.empservice.editEmployee(this.empdet,obj).subscribe((dt:any)=>{
          
            this.routes.navigate(['employeelist'],{ queryParams: { id:this.empdet }});
          
        })

      } 
      

         
  }

  result:string='';
  savefile(event:any):void{
  var selectFile=event.target.files[0];
   this.result='File name'+selectFile.name;
   this.result+='<br>File Size (byte):'+selectFile.size;
   this.result+='File type'+selectFile.type;
  }

}
