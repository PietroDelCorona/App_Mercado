import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  private userId: any;

  constructor(private http: HttpClient) { }

  signup(signupObj: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup/`, signupObj);
  }

  login(loginObj: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login/`, loginObj);
  }

  setUserId(id: any): void {
    this.userId = id;
  }

  getUserId(): any {
    return this.userId;
  }
}


