import {Routes, RouterModule} from "@angular/router";
import { ModalComponent } from './modal/modal.component'
import {MenubarComponent} from "./menubar/menubar.component";
import {BodyComponent} from "./body/body.component";
import {OrderComponent} from "./order/order.component";
import {MapComponent} from "./map/map.component";
import {AuthGuard} from "./service/auth-guard.service";
import {BlankComponent} from "./blank.component";


const APP_ROUTES: Routes = [
  { path: '', component: MapComponent,
    canActivate: [AuthGuard]},
  { path: '#', component: BlankComponent},
  { path: 'modal', component: BodyComponent},
  { path: 'test', component: MenubarComponent},
  { path: 'body', component: BodyComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
