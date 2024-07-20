import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: '',
    address: ''
  };
  loginObj: any = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
    
  }

  onSignUp(): void {
    
  }

  onLogin(): void {
    
  }

  
}
