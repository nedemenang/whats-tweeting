import { Component, OnInit } from '@angular/core';
import {QueryService} from '../../services/query.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import * as lodash from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  lat: number = 6.51873660071218;
  lng: number = 3.3731851104219004;
  user: any 
  geocode: string = ""
  searchRadius = 5
  zoom: number = 8;
  locationChosen : boolean = false
  trends : any
  users: any
  tweets: any

  constructor(
    private queryService: QueryService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    
    this.getUserLocation()
    this.getQueries(this.lat, this.lng)
    this.user = localStorage.getItem("user")
  }

  private getUserLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }
  }

  private getQueries(lat, lng) {
    this.lat = lat;
    this.lng = lng
    this.geocode = this.lat + ','+ this.lng +','+ this.searchRadius + "km"
    this.queryService.getTrends(this.lat, this.lng).subscribe(data => {
      this.trends = data
    }, error => {
        this.flashMessage.show(error._body, {
        cssClass: 'card-panel red', 
        timeout: 6000})
        this.router.navigate(['/dashboard']);
    });

    this.queryService.getTweets(this.geocode).subscribe(data => {
      this.tweets = data
    }, error => {
        this.flashMessage.show(error._body, {
        cssClass: 'card-panel red', 
        timeout: 6000})
        this.router.navigate(['/dashboard']);
    });

    this.queryService.getUsers(this.geocode).subscribe(data => {
      this.users = lodash.uniqWith(data, lodash.isEqual)
    }, error => {
        this.flashMessage.show(error._body, {
        cssClass: 'card-panel red', 
        timeout: 6000})
        this.router.navigate(['/dashboard']);
    });
  }

  onChooseLocation(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng
    this.getQueries(event.coords.lat, event.coords.lng)
    this.locationChosen = true;
  }

}
