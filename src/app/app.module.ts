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

import {OrderService} from './service/order.service';

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
    providers: [OrderService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
