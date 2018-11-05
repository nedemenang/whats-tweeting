import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {UserSharedService} from '../../services/user-shared.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  identifier: String;
  password: String;
  user: any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private userService: UserSharedService
  
  ) { }

  ngOnInit() {
    this.userService.currentUSer.subscribe(user => this.user = user)
  }

  onLoginSubmit(){
    const user = {
      identifier: this.identifier,
      password: this.password
    }
  
    this.authenticationService.authenticateUser(user).subscribe(data => {
        this.authenticationService.storeUserData(data.data.token, data.data.user)
        this.userService.changeUser(data.data.user)
        this.flashMessage.show("Welcome. Click anywhere on the map to search from!", {
          cssClass: 'card-panel blue white-text', 
          timeout: 6000})
        this.router.navigate(['/dashboard']);
    }, error => {
        this.flashMessage.show(error._body, {
        cssClass: 'card-panel red', 
        timeout: 6000})
        this.router.navigate(['/login']);
    });
  }

}
