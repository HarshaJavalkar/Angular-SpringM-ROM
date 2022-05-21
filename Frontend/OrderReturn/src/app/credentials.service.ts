import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, Subject } from 'rxjs';
import Constants from './data/constants';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  url: string = `${Constants.LOGIN_BASE_URI}/authentications/login`;
  token = new Subject;
  constructor(private http: HttpClient) {}
  jwTAuth(credOBj: Login): Observable<any> {
    return this.http
      .post<any>(`${Constants.LOGIN_BASE_URI}/login`, credOBj, {
        observe: 'response',
      })
      .pipe(
        map((data) => {
          sessionStorage.setItem(Constants.USERNAME, credOBj.username);
          sessionStorage.setItem(Constants.TOKEN, data.body.jwtToken);
          sessionStorage.setItem('orders', JSON.stringify(data.body.orders));
          // this.token.next(data.body.jwtToken!='');
          return data;
        })
      );
  }
  setStatus(tokenStatus: any) {
     this.token.next(tokenStatus);
  } 
  receiveloginState(): Observable<any> {
    return this.token.asObservable();
  }
}
