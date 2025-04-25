import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = "http://localhost:5000/auth";

  constructor(private httpClient: HttpClient) {
  }

  login(email: string, password: string) {
    return this.httpClient.post<LoginResponse>(this.baseUrl + "/login", { email, password }).pipe(tap(value => {
      sessionStorage.setItem('auth-token', value.token);
    }))
  }
}
