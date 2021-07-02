import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InputData} from '../../Temp/Inputdata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:InputData = new InputData();
  validData:boolean=false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(f:any,password:any,emailid:any)
  {

    
    this.data.password=password.value;
    this.data.emailid=emailid.value;
    
    console.log(this.data);
    this.validData=true;

    
    if(this.data.password==="Aa@123456" && this.data.emailid==="1@gmail.com"){  
      this.router.navigate(['/upload']);
    }
    
  }
}
