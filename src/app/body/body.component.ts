import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { OrderList } from '../model/orderList';
import { OrderMenu } from '../model/orderMenu';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() isOrder = false;
  isDetail = false;
  @Input() menuLists:Array<Object>;
  @Output() onOrderBodySent = new EventEmitter<boolean>();
  orderListData:OrderList;
  orderMenuData:Array<OrderMenu>;


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

