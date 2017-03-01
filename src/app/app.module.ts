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

})
export class AppModule { }
