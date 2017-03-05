import {Routes, RouterModule} from "@angular/router";
import { ModalComponent } from './modal/modal.component'
import {MenubarComponent} from "./menubar/menubar.component";
import {BodyComponent} from "./body/body.component";
import {OrderComponent} from "./order/order.component";
import {MapComponent} from "./map/map.component";
import {AuthGuard} from "./service/auth-guard.service";
import {BlankComponent} from "./blank.component";
import {OrderBodyComponent} from './order-body/order-body.component'
import {KitchenOrderComponent} from './kitchen-order/kitchen-order.component'

const APP_ROUTES: Routes = [
  { path: '', component: MapComponent,
    canActivate: [AuthGuard]},
  { path: '#', component: BlankComponent},
  { path: 'test', component: MenubarComponent},
  { path: 'order', component: OrderBodyComponent},
  { path: 'kitchen', component: KitchenOrderComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES);
