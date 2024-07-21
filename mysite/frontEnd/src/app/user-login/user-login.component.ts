import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj: any = {
    nome: '',
    email: '',
    senha: '',
    endereco: ''
  };
  loginObj: any = {
    email: '',
    senha: ''
  };

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  onSignUp(): void {
    console.log('Attempting to sign up with', this.signupObj);
    this.authService.signup(this.signupObj).subscribe({
      next: (response: any) => {
        console.log('Signup successful', response);
      },
      error: (error: any) => {
        console.log('Signup error', error);
      }
    });
  }

  onLogin(): void {
    console.log('Attempting to login with', this.loginObj);
    this.authService.login(this.loginObj).subscribe({
      next: (response: any) => {
        console.log('Login successful', response);
      },
      error: (error: any) => {
        console.log('Login error', error);
      }
    });
  }
}



