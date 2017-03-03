import { Component,ViewChild } from '@angular/core';
import {MenubarComponent} from './menubar/menubar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    name = 'KabKao';
    IsLogin = false;
    @ViewChild(MenubarComponent)
    private menubarComponent: MenubarComponent;

    onOrderBodySent(isSent:boolean){
      if(isSent){
        this.menubarComponent.menuLists = [];
      }
    }
}
