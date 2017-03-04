import { Component,ViewChild } from '@angular/core';
import {MenubarComponent} from './menubar/menubar.component'
import {BodyComponent} from './body/body.component';
import {LocalStorageService} from "angular-2-local-storage";
import {UserService} from "./service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    name = 'KabKao';
    isLogin = false;
    @ViewChild(MenubarComponent)
    private menubarComponent: MenubarComponent;
    @ViewChild(BodyComponent)
    private bodyComponent: BodyComponent;

    constructor(private localStorage: LocalStorageService, private userService: UserService, private router:Router) {}

    onOrderBodySent(isSent:boolean){
      if(isSent){
        this.menubarComponent.menuLists = [];
      }
    }

    onClickCheckout(menuListsEvent:Array<Object>){
        console.log(menuListsEvent)
        if(menuListsEvent){
          this.bodyComponent.menuLists = menuListsEvent;
          this.bodyComponent.isOrder = true;
        }
    }

    login() {
      this.userService.login();
      this.router.navigate(['/']);
    }

    getLoginStatus() {
      return this.userService.isLogin()
    }
}
