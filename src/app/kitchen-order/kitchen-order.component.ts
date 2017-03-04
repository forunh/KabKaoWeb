import { Component, OnInit } from '@angular/core';
// import { KitchenOrder } from '../model/kitchenOrder';

@Component({
  selector: 'app-kitchen-order',
  templateUrl: './kitchen-order.component.html',
  styleUrls: ['./kitchen-order.component.css']
})
export class KitchenOrderComponent implements OnInit {

kitchenOrders = [
    { id: 1000,
     orderid:1000,
     menuid:2,
     toppingid:0,
     userid:1412,
     quantity:1,
     status:"waiting",
     timestamp:null
},
    { id: 1001,
     orderid:1001,
     menuid:3,
     toppingid:1,
     userid:1412,
     quantity:2,
     status:"waiting",
     timestamp:null
},
    {id: 1002,
     orderid:1002,
     menuid:1,
     toppingid:2,
     userid:1413,
     quantity:3,
     status:"waiting",
     timestamp:null
}];

  constructor() { 
    
  }

  ngOnInit() {
    
  }


}
