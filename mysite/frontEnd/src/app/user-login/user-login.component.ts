import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  onSignUp(): void {
    console.log('Attempting to sign up with', this.signupObj);
    this.authService.signup(this.signupObj).subscribe({
      next: (response: any) => {
        console.log('Signup successful', response);
        window.alert('Signup successful!');
      },
      error: (error: any) => {
        console.log('Signup error', error);
        window.alert('Signup failed. Please try again.');
      }
    });
  }

  onLogin(): void {
    console.log('Attempting to login with', this.loginObj);
    this.authService.login(this.loginObj).subscribe({
      next: (response: any) => {
        console.log('Login successful', response);
        this.router.navigate(['/homepage']); 
      },
      error: (error: any) => {
        console.log('Login error', error);
        window.alert('Login failed. Please check your credentials.');
      }
    });
  }
}



