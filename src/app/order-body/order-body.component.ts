import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { OrderList } from '../model/orderList';
import { OrderMenu } from '../model/orderMenu';
import {OrderService} from "../service/order.service";
@Component({
  selector: 'app-order-body',
  templateUrl: './order-body.component.html'
})
export class OrderBodyComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  @Input() isOrder = false;
  isDetail = false;
  @Input() menuLists:Array<Object>;
  @Output() onOrderBodySent = new EventEmitter<boolean>();
  orderListData:OrderList;
  orderMenuData:Array<OrderMenu>;

  currentOrders = null;


  onOrderSent(event:Object){
    console.log(event)
    if(event['orderListData'] && event['orderMenuData'] ){
      this.menuLists = null;
      this.onOrderBodySent.emit(true);
      this.isOrder=false;
      this.isDetail=true;
      this.orderListData=event['orderListData'];
      this.orderMenuData=event['orderMenuData'];
    }
  }
  onOrderDetailDone(isDone:boolean){
    if(isDone){
      this.isDetail=false;
    }
  }
}

