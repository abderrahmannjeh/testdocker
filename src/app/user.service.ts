import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  public addUser(user : User): Observable<any>
  {
    return this.httpClient.post('http://localhost:8088/api/user', user);

  }
}
