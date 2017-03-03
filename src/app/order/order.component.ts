import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { OrderList } from '../model/orderList';
import { OrderMenu } from '../model/orderMenu';
import { OrderService } from '../service/order.service';
import {MenuOrder} from '../model/menuOrder'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() menuLists:Array<MenuOrder>;
  @Output() onOrderSent = new EventEmitter<Object>();

  orderListData:OrderList;
  orderMenuData:Array<OrderMenu>;
  mapTitle = "ADDRESS";
  isSelectAddress = false;
  isLoading = false;
  lat:Number;
  lng:Number; 
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  private createOrder(){
      this.isLoading = true;
      let orderList = {
        id:null,
        userId:235554,
        price:40500,
        address:this.lat.toString()+","+this.lng.toString(),
        createAt:null
      };

      let menu:Array<Object>=new Array<Object>();
      for(let menuList of this.menuLists){
        menu.push(
          {
            menuId:menuList.id,
            quantity:menuList.quantity
          }
        );
      }
      
      this.orderService.addOrderList(orderList)
      .subscribe(
          data => {
            this.orderListData = data;
            // console.log(data)
            let orderMenuList = {
              orderId: data.id,
              menuList: menu
            }
             this.orderService.addOrderMenuList(orderMenuList)
            .subscribe(
                data => {
                  this.orderMenuData = data
                  console.log(data)
                  this.isLoading = false;
                  let newEvent = {
                    orderListData:this.orderListData,
                    orderMenuData:this.orderMenuData
                  }
                  this.onOrderSent.emit(newEvent);
                  this.clearOrder();
                },
                error => {
                  console.error("Error adding orderMenu!")
                }
            );
          },
          error => {
            console.error("Error adding orderList!")
          }
      );
  }

  private toDateString(utcDate){
    return new Date(utcDate).toDateString()+new Date(utcDate).toTimeString()
  }

  private selectAddress(lat:Number,lng:Number){
    this.lat=lat;
    this.lng=lng;
    this.isSelectAddress=true
  }

  private clearOrder(){
    this.menuLists = null;
  }

    calTotalMenuPrice(){
      var totalPrice:number=0;
      for(var menuList of this.menuLists){
        totalPrice += +menuList.price*+menuList.quantity;
      }
      return totalPrice
    }

   calTotalQuantity(){
    let totalQuantity:number=0;
    for(let menuList of this.menuLists){
      totalQuantity += +menuList.quantity;
    }
    return totalQuantity
  }
}
