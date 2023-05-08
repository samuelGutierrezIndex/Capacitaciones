import { Injectable } from '@angular/core';
import { Login } from '@data/interfaces/auth/login';
import { ApiClass } from '@data/schemas/ApiClass.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ApiClass {

  login(user:  Login | any): Observable<any> {
    return this.http.post<Login>(`${this.uri}/login`, user);
  }

}
