import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {LocalStorageService} from "angular-2-local-storage";

@Injectable()
export class UserService {

  constructor(private http: Http, private localStorage: LocalStorageService) {}

  public login() {
    this.localStorage.set("login", true)
  }

  public logout() {
    this.localStorage.set("login", false)
  }

  public isLogin() {
    let status: boolean = !!this.localStorage.get("login")
    return status
  }
}
