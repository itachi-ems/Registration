import { Component, OnInit } from '@angular/core';
import {InputData} from '../../Temp/Inputdata';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:InputData = new InputData();
  validData:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(f:any,password:any,emailid:any)
  {

    
    this.data.password=password.value;
    this.data.emailid=emailid.value;
    
    console.log(this.data);
    this.validData=true;

    alert("Login Successful")
    
  }
}
