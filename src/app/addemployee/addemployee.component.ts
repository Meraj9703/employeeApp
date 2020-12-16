import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpserviceService } from '../service/empservice.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  myForm:FormGroup;
  empdet: any;
   

  constructor(private ar:ActivatedRoute,private empservice:EmpserviceService,private routes:Router) { 
    this.myForm=new FormGroup({
      first_name:new FormControl('',Validators.required),
      last_name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      upload:new FormControl('',Validators.required)
    })
    //this.subData()
  }

  ngOnInit(): void {
   
    
  }

 

  subData(){
    
    
    if(this.myForm.valid==true){
      var obj={
        first_name:this.myForm.controls.first_name.value,
        last_name:this.myForm.controls.last_name.value,
        email:this.myForm.controls.email.value,
        upload:this.myForm.controls.upload.value
      }
      
      this.empservice.postEmployee(obj).subscribe((dt:any)=>{
        console.log(dt);
        if(dt.id>0){
          this.routes.navigate(['employeelist'],{ queryParams: { id:dt.id }});
        }
       
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
