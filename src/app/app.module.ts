import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap'

import { AppComponent }  from './app.component';
import { CollapseComponent} from './collapse.component'

@NgModule({
  imports:      [ BrowserModule ,CollapseModule.forRoot()],
  declarations: [ AppComponent ,CollapseComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
