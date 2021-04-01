import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {HttpParams} from "@angular/common/http";
import {User} from "../user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getUsers() {
    let params = new HttpParams().set('page', '0').set('sort', 'firstname');
    params = params.append('page', '1');

    console.log(params.toString());

    this.userService.getUsers(params)
      .subscribe(response => {
          // process response
          console.log('response received', response);
          this.userList = response;
        },
        error => {
          console.error('error handled at getUsers: ', error);
        })
  }
}
