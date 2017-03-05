import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { OrderList } from '../model/orderList';
import { OrderMenu } from '../model/orderMenu';
import { OrderService } from '../service/order.service';
import {MenuOrder} from '../model/menuOrder'
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {MenuNameService} from '../service/menu-name.service'

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html'
//   styleUrls: ['./order.component.css']
})
export class OrderDetailComponent implements OnInit {

  @Input() orderListData:OrderList;
  @Input() orderMenuData:Array<OrderMenu>;
  @Output() onOrderDetailDone = new EventEmitter<boolean>();
  menu=[];
  isloading = true;


  constructor(private userService: UserService,private orderService: OrderService, private router: Router,
     private menuNameService:MenuNameService
  ) {
      
   }

  ngOnInit() {
        if(this.orderMenuData){
          for(let orderMenu of this.orderMenuData){
            this.getMenu(orderMenu)
          }
        }
    
    }

    private toDateString(utcDate){
    return new Date(utcDate).toDateString()+" "+new Date(utcDate).toTimeString().substring(0, 8)
  }

  clearOrderDetail(){
    this.orderListData=null;
    this.orderMenuData=null;
  }
  onClickOrderDetailDone(){
    this.onOrderDetailDone.emit(true);
    this.orderService.clearCurrentOrders();
    this.router.navigate(['/']);
    // this.clearOrderDetail()

  }

  calTotalQuantity(){
    let totalQuantity:number=0;
    for(let menu of this.orderMenuData){
      totalQuantity += +menu.quantity;
    }
    return totalQuantity
  }
   private getUser() {
      return this.userService.getMyUserData();
  }

  private getMenu(order){
    // console.log(order)
     this.menuNameService.getMenuById(order.menuId)
      .subscribe(
          data => {
            if (data.success){
              // console.log(data.payload)
              let newMenu = data.payload;
              newMenu.quantity = order.quantity;
              // console.log(newMenu)
              this.menu.push(newMenu)
            }
            else
              return null
            // console.log(data)

          },
          error => {
            console.error("Error search address!")
            return null
          }
      );
  }

}