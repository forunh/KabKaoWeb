import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MenuOrder} from '../model/menuOrder'
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {OrderService} from "../service/order.service";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private userService: UserService, private orderService:OrderService, private router: Router) {
    
  }

  ngOnInit() {
    
  }

  @Output() onClickCheckout = new EventEmitter<Array<MenuOrder>>();
  OrderTitle = "ORDER";
  isOrder = false;

 
  checkOut() {
    // this.onClickCheckout.emit(this.menuLists);
    // this.isOrder = true;
    this.orderService.setOrderStatus(true);
    // this.addOrders();
    this.router.navigate(['/order']);
  }

  isCurrentUri(uri: String) {
    return this.router.url === uri;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/#']);
  }

  // addOrders() {
  //   this.orderService.addCurrentOrders(this.menuLists);
  // }
}
