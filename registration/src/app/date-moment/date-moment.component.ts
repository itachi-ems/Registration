import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-date-moment',
  templateUrl: './date-moment.component.html',
  styleUrls: ['./date-moment.component.css']
})
export class DateMomentComponent implements OnInit {
  minDate= new Date();
  maxDate= new Date(2021,5,5);
  todayDate=new Date();
  result1:any;
  result2:any;
  result3:any;
  result4: any;

  getFormattedDate(){
    this.result1 = moment(this.todayDate).format('dddd');
    this.result2 = moment(this.todayDate).format('MMM');
    this.result3 =moment(this.todayDate).format('yyyy');
    this.result4 =moment(this.todayDate).format('hh:mm:ss');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
