import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams} from "@angular/http";
import {LocalStorageService} from "angular-2-local-storage";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  static VIEW_USER: string = "view_user";
  static CHANGE_USER: string = "change_user";
  static DELETE_USER: string = "delete_user";
  static ADD_MENU: string = "add_menu";
  static VIEW_MENU: string = "view_menu";
  static CHANGE_MENU: string = "change_menu";
  static DELETE_MENU: string = "delete_menu";
  static ADD_ORDER: string = "add_order";
  static VIEW_ORDER: string = "view_order";
  static CHANGE_ORDER: string = "change_order";
  static DELETE_ORDER: string = "delete_order";


  baseURL: string = 'http://52.187.62.107:10400/authen/';
  private header: Headers = new Headers();

  constructor(private http: Http, private localStorage: LocalStorageService) {
    this.header.append("Content-Type", "application/json");
    if(this.localStorage.get("login") === true) {
      console.log("token " + this.localStorage.get("token"));
      this.header.append("Authorization", "Token " + this.localStorage.get("token"));
    }
  }

  public login(username: string, password: string, success: Function, errors: Function = null) {
    this.http.post(this.baseURL + 'login', {username: username, password: password}, {
      headers: this.header
    })
      .map((response: Response) => response.json()).catch(this.handleError).subscribe(
        response => {
          this.localStorage.set("login", true);
          this.localStorage.set("token", response.payload.token);
          this.header.append("Authorization", "Token " + response.payload.token);
          success(response);
        },
        error => { if(error !== null) errors(error)});
  }

  private handleError(error: any) {
    return Observable.throw(error.json());
  }

  public logout() {
    this.localStorage.set("login", false);
    this.localStorage.set("token", null);
  }

  public isLogin() {
    let status: boolean = !!this.localStorage.get("login")
    return status
  }

  public checkPermission(permission:string, success: Function, errors: Function = null) {
    let params:URLSearchParams = new URLSearchParams();
    params.set("permission", permission);
    this.http.get(this.baseURL + 'check_permission', {search: params, headers: this.header})
      .map((response: Response) => response.json()).catch(this.handleError).subscribe(
        response => {success(response);},
        error => { if(error !== null) errors(error);});
  }

  public getUserData(id: number, success: Function, errors: Function = null) {
    let params:URLSearchParams = new URLSearchParams();
    params.set("id", String(id));
    this.http.get(this.baseURL + 'user_info', {search: params, headers: this.header})
      .map((response: Response) => response.json()).catch(this.handleError).subscribe(
      response => {success(response);},
      error => { if(error !== null) errors(error);});
  }
}
