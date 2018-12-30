import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/UserModel';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: UserModel = {
    user: '',
    email: '',
    fullname: '',
    country: '',
    language: 'Bulgarian',
    city: '',
    age: 0,
    gender: 0
  };

  allServices: string[] = ["a", 'v', "4"];
  allowedServices: string[] = ["a", 'v', "4"];

  languages: string[] = ["English", "Bulgarian"]

  genders: Object[] = [{name: "male", value:0},{name: "female", value:1}]

  constructor() { }

  ngOnInit() {
  }

}
