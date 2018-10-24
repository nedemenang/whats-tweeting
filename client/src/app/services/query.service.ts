import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Tweet} from '../interfaces/tweet';
import {User} from '../interfaces/user';
import {Trend} from '../interfaces/trend';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class QueryService {

  authenticationToken: any

  constructor(private http:Http) { }

  getUsers(geocode): Observable<User[]>{
    this.loadToken()
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.authenticationToken}`)
    return this.http.get(`http://localhost:3000/tweets/users/${geocode}/`,{headers} )
      .map((response) => <User[]>response.json().data.users)
  }

  getTrends(lat, long): Observable<Trend[]>{
    this.loadToken()
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.authenticationToken}`)
    return this.http.get(`http://localhost:3000/tweets/trends/${lat}/${long}`, {headers: headers})
      .map((response) => <Trend[]> response.json().data.trends)
  }

  
  getTweets(geocode): Observable<Tweet[]>{
    this.loadToken()
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.authenticationToken}`)
    return this.http.get(`http://localhost:3000/tweets/${geocode}/`, {headers: headers})
      .map((response) => <Tweet[]>response.json().data.statuses)
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authenticationToken = token;
  }

}
