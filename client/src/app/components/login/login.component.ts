import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import { error } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  identifier: String;
  password: String;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private flashMessage: FlashMessagesService
  
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      identifier: this.identifier,
      password: this.password
    }
  
    this.authenticationService.authenticateUser(user).subscribe(data => {
        console.log(data)
        this.authenticationService.storeUserData(data.data.token, data.data.user)
        this.flashMessage.show("You have succesfully logged in", {
          cssClass: 'alert-success', 
          timeout: 5000})
        this.router.navigate(['/dashboard']);
    }, error => {
        this.flashMessage.show(error._body, {
        cssClass: 'alert-danger', 
        timeout: 6000})
        this.router.navigate(['/login']);
    });
  }

}
