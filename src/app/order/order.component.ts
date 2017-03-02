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
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  private createOrder(){
      let orderList = {
        id:null,
        userId:234,
        price:4000,
        address:"1 Abc Rd., Abc, BKK 12345",
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

}
