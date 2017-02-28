import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule,ModalModule } from 'ng2-bootstrap/ng2-bootstrap'

import { AppComponent }  from './app.component';
import { CollapseComponent} from './collapse.component';
import { ModalComponent } from './modal.component';
import { MenuBarComponent } from './menubar.component';
import { BodyComponent } from './body.component';
import { OrderComponent } from './order.component';

@NgModule({
  imports:      [ BrowserModule ,CollapseModule.forRoot(),ModalModule.forRoot()],
  declarations: [ AppComponent ,CollapseComponent ,ModalComponent ,MenuBarComponent, BodyComponent ,OrderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
