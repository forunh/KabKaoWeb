<<<<<<< HEAD
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule,JsonpModule  }    from '@angular/http';
import { CollapseModule,ModalModule } from 'ng2-bootstrap/ng2-bootstrap'

import { AppComponent }  from './app.component';
import { CollapseComponent} from './collapse.component';
import { ModalComponent } from './modal.component';
import { MenuBarComponent } from './menubar.component';
import { BodyComponent } from './body.component';
import { OrderComponent } from './order.component';
import { SignUpComponent } from './sign_up.component';

import { ExampleService } from './service/example.service';
import { SignUpService } from './service/signup.service';

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,JsonpModule ,CollapseModule.forRoot(),ModalModule.forRoot()],
  declarations: [ AppComponent ,CollapseComponent ,ModalComponent ,MenuBarComponent, BodyComponent ,OrderComponent, SignUpComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ ExampleService, SignUpService],

=======
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CollapseComponent} from './collapse/collapse.component';

import {CollapseModule, ModalModule} from 'ng2-bootstrap';
import {OrderComponent} from './order/order.component';
import {MenubarComponent} from './menubar/menubar.component';
import {ModalComponent} from './modal/modal.component';
import {BodyComponent} from './body/body.component'

@NgModule({
    declarations: [
        AppComponent,
        CollapseComponent,
        OrderComponent,
        MenubarComponent,
        ModalComponent,
        BodyComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CollapseModule.forRoot(),
        ModalModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
>>>>>>> master
})
export class AppModule {
}
