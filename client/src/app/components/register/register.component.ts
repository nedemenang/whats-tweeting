import { Component, OnInit } from '@angular/core';
import {ValidationService} from '../../services/validation.service'
import {AuthenticationService} from '../../services/authentication.service';
import {FlashMessagesService} from 'angular2-flash-messages'
import {Router} from '@angular/router'
import { error } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidationService, 
    private flashMessage: FlashMessagesService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000})
      return false;
    }

    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use valid email', {cssClass: 'alert-danger', timeout: 3000})
      return false;
    }
    
    //Register user
    this.authenticationService.registerUser(user).subscribe(data =>{
        this.flashMessage.show('You are now registered!', {cssClass: 'card-panel green', timeout: 3000})
        this.router.navigate(['/login'])  
    }, error => {
      this.flashMessage.show(error._body, {cssClass: 'card-panel red', timeout: 6000})
      this.router.navigate(['/register'])
    })
  }

}
