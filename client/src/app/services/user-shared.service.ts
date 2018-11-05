import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject'

@Injectable({
  providedIn: 'root'
})
export class UserSharedService {

  private userSource = new BehaviorSubject<any>("")
  currentUSer = this.userSource.asObservable()

  constructor() { }

  changeUser(user: any) {
    this.userSource.next(user)
  }
}
