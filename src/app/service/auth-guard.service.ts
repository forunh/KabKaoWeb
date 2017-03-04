import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import {UserService} from "./user.service";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private userService: UserService) {}

  canActivate() {
    console.log('AuthGuard#canActivate called');
    return this.userService.isLogin();
  }

}
