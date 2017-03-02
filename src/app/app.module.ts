import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// import {GoogleplaceDirective} from 'angular2-google-map-auto-complete/directives/googleplace.directive';
import {CollapseModule, ModalModule} from 'ng2-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';

import {AppComponent} from './app.component';
import {CollapseComponent} from './collapse/collapse.component';
import {OrderComponent} from './order/order.component';
import {MenubarComponent} from './menubar/menubar.component';
import {ModalComponent} from './modal/modal.component';
import {BodyComponent} from './body/body.component'
<<<<<<< HEAD
import { MapComponent } from './map/map.component';


import {OrderService} from './service/order.service';
=======
import {SignUpComponent} from './signup/signup.component';

import {SignUpService} from './service/signup.service';
>>>>>>> 42f098294db3e46969aad58fa6f310ba1c5cac54

@NgModule({
    declarations: [
        AppComponent,
        CollapseComponent,
        OrderComponent,
        MenubarComponent,
        ModalComponent,
        BodyComponent,
<<<<<<< HEAD
        MapComponent
=======
        SignUpComponent
>>>>>>> 42f098294db3e46969aad58fa6f310ba1c5cac54
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CollapseModule.forRoot(),
        ModalModule.forRoot(),
        AgmCoreModule.forRoot({apiKey: 'AIzaSyAf-hWJtntAe1oGV9UwbVgG-3r25o65p14'}),
        // GoogleplaceDirective
    ],
<<<<<<< HEAD
    providers: [OrderService],
=======
    providers: [SignUpService],
>>>>>>> 42f098294db3e46969aad58fa6f310ba1c5cac54
    bootstrap: [AppComponent]
})
export class AppModule {
}
