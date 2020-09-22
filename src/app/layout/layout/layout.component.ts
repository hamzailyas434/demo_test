import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DataService } from 'src/app/shared';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  users :any[]=[];
  
  constructor(public http: HttpClient, private dataservice: DataService){}

  ngOnInit(){
    this.getUserList();
  }

  getUserList() {
    this.dataservice
    .getUsers()
    .subscribe((data:any) => {
      console.log(data);
      this.users = data.data;
    });
  }

}
