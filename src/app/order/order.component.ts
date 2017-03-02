import { Component, OnInit, Input } from '@angular/core';
import { OrderList } from '../model/orderList';
import { OrderMenu } from '../model/orderMenu';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() menuLists:Array<Object>;
  
  orderListData:OrderList;
  orderMenuData:Array<OrderMenu>;
  mapTitle = "Address";
  isSelectAddress = false;
  isOrderComplete = false; 
  lat:Number;
  lng:Number; 
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  private createOrder(){
      let orderList = {
        id:null,
        userId:235554,
        price:40500,
        address:this.lat.toString()+","+this.lng.toString(),
        createAt:null
      };
      let menuList:Array<Object>=[
        {
          menuId:1,
          quantity:1
        },
        {
          menuId:2,
          quantity:1
        }
      ];
      this.orderService.addOrderList(orderList)
      .subscribe(
          data => {
            this.orderListData = data;
            this.isOrderComplete=true;
            // console.log(data)
            let orderMenuList = {
              orderId: data.id,
              menuList: menuList
            }
             this.orderService.addOrderMenuList(orderMenuList)
            .subscribe(
                data => {
                  this.orderMenuData = data
                  console.log(data)
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
}
