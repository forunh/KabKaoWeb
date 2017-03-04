import {Injectable} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import {LocalStorageService} from "angular-2-local-storage";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  baseURL: string = 'http://52.187.62.107:10400/authen/';
  private header: Headers = new Headers();

  constructor(private http: Http, private localStorage: LocalStorageService) {
    this.header.append("Content-Type", "application/json");
  }

  public login(username: string, password: string, success: Function, errors: Function = null) {
    this.http.post(this.baseURL + 'login', {username: username, password: password}, {
      headers: this.header
    })
      .map((response: Response) => response.json()).catch(this.handleError).subscribe(
        response => {
          this.localStorage.set("login", true);
          this.header.append("Authorization", "Token " + response.payload.token);
          success(response);
        },
        error => { if(error !== null) errors(error)});
  }

  private handleError(error: any) {
    return Observable.throw(error.json());
  }

  public logout() {
    this.localStorage.set("login", false)
  }

  public isLogin() {
    let status: boolean = !!this.localStorage.get("login")
    return status
  }
}
