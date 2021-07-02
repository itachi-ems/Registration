import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InputData} from '../../Temp/Inputdata';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  [x: string]: any;

  countryArray:string[] = [
    "Australia",
    "United Arab Emirates",
    "Egypt"
  ];

  countryCodeObj:any = {
    "Australia":"+61",
    "United Arab Emirates":"+971",
    "Egypt":"+20"
  };

  data:InputData = new InputData();
  validData:boolean=false;
  constructor(private router:Router){}

  ngOnInit(): void {
  }

  onSubmit(f:any,firstname:any,lastname:any,password:any,emailid:any,phoneNo:any)
  {

    this.data.firstname=firstname.value;
    this.data.lastname=lastname.value;
    this.data.password=password.value;
    this.data.emailid=emailid.value;
    this.data.phoneNo=phoneNo.value;
    console.log(this.data);
    this.validData=true;
    
    this.router.navigate(['/']);
  }

}
