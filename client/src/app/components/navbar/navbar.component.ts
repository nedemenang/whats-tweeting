import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {UserSharedService} from '../../services/user-shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  user: any;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private userService: UserSharedService
  ) { }

  ngOnInit() {
    this.userService.currentUSer.subscribe(user => this.user = user)
  }

  onLogoutClick(){
    this.authenticationService.logout();
    this.router.navigate(['/login'])
    return false;
  }

}
