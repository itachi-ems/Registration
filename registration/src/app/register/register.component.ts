import { HttpClient } from '@angular/common/http';
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

  
  validData:boolean=false;
  constructor(private router:Router,private http:HttpClient){}

  ngOnInit(): void {
  }

  onSubmit(f:any,firstname:any,lastname:any,password:any,emailid:any)
  {
    const data = { 
      firstname:firstname.value,
      lastname:lastname.value,
      emailid:emailid.value,
      password:password.value
    }
    this.http.post("http://july4afternoon-env.eba-rsh2etsk.us-east-2.elasticbeanstalk.com/api/user",data)
    .subscribe(res=>{
      console.log(res);
      
    })
    this.validData=true;
    
    this.router.navigate(['/']);
  }

}
