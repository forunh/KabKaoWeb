import { Component, OnInit, Input } from '@angular/core';
import { OrderList } from '../model/orderList';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() menuList:Array<Object>;
  orderListData:OrderList;
  mapTitle = "Address";
  isMap = false;
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
        address:"1 Abc Rd., Abcr, BKK 12345",
        createAt:null
      };
      this.orderService.addOrder(orderList)
      .subscribe(
          data => {
            this.orderListData = data;
            this.isOrderComplete=true;
            // console.log(data)
          },
          error => {
            console.error("Error adding order!")
          }
      );
  }

  private toDateString(utcDate){
    return new Date(utcDate).toDateString()+new Date(utcDate).toTimeString()
  }

  private selectAddress(lat:Number,lng:Number){
    this.lat=lat;
    this.lng=lng;
  }
}
