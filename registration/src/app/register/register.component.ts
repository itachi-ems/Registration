import { Component, OnInit } from '@angular/core';
import {InputData} from '../../Temp/Inputdata';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

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
  constructor(){}

  ngOnInit(): void {
  }

  onSubmit(f:any,firstname:any,lastname:any,password:any,emailid:any,countrySelected:any,countryCode:any,phoneNo:any)
  {

    this.data.firstname=firstname.value;
    this.data.lastname=lastname.value;
    this.data.password=password.value;
    this.data.emailid=emailid.value;
    this.data.country=countrySelected.value;
    this.data.countryCode=countryCode.value;
    this.data.phoneNo=phoneNo.value;
    console.log(this.data);
    this.validData=true;
    
  }

}
