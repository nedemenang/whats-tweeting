import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.authenticationService.getProfile().subscribe(data => {
      console.log(data.data.user)
      this.user = data.data.user
  }, error => {
      this.flashMessage.show(error._body, {
      cssClass: 'card-panel red', 
      timeout: 6000})
      this.router.navigate(['/dashboard']);
  });
  }

}
