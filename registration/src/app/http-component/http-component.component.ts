import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-http-component',
  templateUrl: './http-component.component.html',
  styleUrls: ['./http-component.component.css']
})
export class HttpComponentComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.getPosts();
  }


  getPosts()
  {
    console.log("BEFORE HTTP REQUEST");
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((response)=>{
      console.log(response);
    })
    console.log("AFTER HTTP REQUEST");
  }

}
