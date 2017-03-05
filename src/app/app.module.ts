import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing} from "./app.route";
//dependency
import {CollapseModule, ModalModule} from 'ng2-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {LocalStorageModule} from "angular-2-local-storage";
import {PopoverModule} from "ngx-popover";

//component
import {AppComponent} from './app.component';
import {CollapseComponent} from './collapse/collapse.component';
import {OrderComponent} from './order/order.component';
import {MenubarComponent} from './menubar/menubar.component';
import {ModalComponent} from './modal/modal.component';
import {BodyComponent} from './body/body.component'
import { MapComponent } from './map/map.component';
import {OrderDetailComponent} from './order-detail/order-detail.component'
import { BlankComponent } from './blank.component';
import {OrderBodyComponent} from './order-body/order-body.component'
import {SignUpComponent} from './signup/signup.component';

//service
import {OrderService} from './service/order.service';
import {UserService} from "./service/user.service";
import {AuthGuard} from "./service/auth-guard.service";
import {GgMapService} from './service/gg-map.service';
import {DeliveryService} from './service/delivery.service';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuAdminModalComponent } from './menu-admin-modal/menu-admin-modal.component';


@NgModule({
    declarations: [
        AppComponent,
        CollapseComponent,
        OrderComponent,
        MenubarComponent,
        ModalComponent,
        BodyComponent,
        MapComponent,
        OrderDetailComponent,
        BlankComponent,
        OrderBodyComponent,
        SignUpComponent,
        MenuAdminComponent,
        MenuAdminModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CollapseModule.forRoot(),
        ModalModule.forRoot(),
        AgmCoreModule.forRoot({apiKey: 'AIzaSyAf-hWJtntAe1oGV9UwbVgG-3r25o65p14'}),
        routing,
        LocalStorageModule.withConfig({
          prefix: 'kabkao',
          storageType: 'localStorage'
        }),
        PopoverModule
        // GoogleplaceDirective
    ],
    providers: [OrderService, UserService, AuthGuard,GgMapService,DeliveryService],

    bootstrap: [AppComponent]
})
export class AppModule {
}
