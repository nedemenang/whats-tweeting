import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthenticationService {

  authenticationToken: any
  user: any

  constructor(private http:Http ) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/', user, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/login', user, {headers: headers})
      .map(res => res.json());
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken()
    const token = localStorage.getItem('id_token')
    headers.append('Authorization', `Bearer ${token}`)
    headers.append('Content-Type', 'application/json');
    const userData = JSON.parse(localStorage.getItem('user'));
    return this.http.get(`http://localhost:3000/users/${userData.id}`, {headers: headers})
      .map(res => res.json());
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    const userData = localStorage.getItem('user');
    this.authenticationToken = token;
    this.user = userData;

  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token)
    localStorage.setItem('user', JSON.stringify(user));
    this.authenticationToken = token;
    this.user = user;
  }

  logout(){
    this.authenticationToken = null;
    this.user = null;
    localStorage.clear()

  }
  loggedIn(){
    return tokenNotExpired("id_token");
  }

}
