import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Tweet} from '../interfaces/tweet';
import {User} from '../interfaces/user';
import {Trend} from '../interfaces/trend';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class QueryService {

  authenticationToken: any
  lat: string
  long: string
  geocode: string
  q: string

  constructor(private http:Http) { }

  getUsers(): Observable<User[]>{
    this.loadToken()
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.authenticationToken}`)
    return this.http.get(`http://localhost:3000/tweets/users/${this.geocode}/${this.q}`,{headers} )
      .map((response) => <User[]>response.json())
  }

  getTrends(): Observable<Trend[]>{
    this.loadToken()
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.authenticationToken}`)
    return this.http.get(`http://localhost:3000/tweets/trends/${this.lat}/${this.long}`, {headers: headers})
      .map((response) => <Trend[]>response.json())
  }

  getTweets(): Observable<Tweet[]>{
    this.loadToken()
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.authenticationToken}`)
    return this.http.get(`http://localhost:3000/tweets/${this.geocode}/${this.q}`, {headers: headers})
      .map((response) => <Tweet[]>response.json())
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authenticationToken = token;
  }

}
