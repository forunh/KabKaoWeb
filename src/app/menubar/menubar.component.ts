import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MenuOrder} from '../model/menuOrder'
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  @Output() onClickCheckout = new EventEmitter<Array<MenuOrder>>();
  menuLists: Array<MenuOrder> = [
    {
      id: 1,
      name: "ข้าวผัด",
      price: 40,
      quantity: 1
    },
    {
      id: 2,
      name: "ข้าวกระเพรา",
      price: 40,
      quantity: 2
    },
    {
      id: 4,
      name: "ข้าวต้ม",
      price: 30,
      quantity: 1
    }
  ];
  OrderTitle = "ORDER";
  isOrder = false;

  calTotalPrice() {
    var totalPrice: number = 0;
    for (var menuList of this.menuLists) {
      totalPrice += menuList.price * menuList.quantity;
    }
    return totalPrice
  }

  calTotalQuantity() {
    var totalQuantity: number = 0;
    for (var menuList of this.menuLists) {
      totalQuantity += menuList.quantity;
    }
    return totalQuantity
  }

  checkOut() {
    this.onClickCheckout.emit(this.menuLists);
    this.isOrder = true;
  }

  isCurrentUri(uri: String) {
    return this.router.url === uri;
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/#']);
  }
}
