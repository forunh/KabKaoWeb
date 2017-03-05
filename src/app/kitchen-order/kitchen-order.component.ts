import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { KitchenService } from '../service/kitchen.service';
// import { KitchenOrder } from '../model/kitchenOrder';

@Component({
  selector: 'app-kitchen-order',
  templateUrl: './kitchen-order.component.html',
  styleUrls: ['./kitchen-order.component.css'],
  providers: [KitchenService]
})
export class KitchenOrderComponent implements OnInit {

kitchenOrders = [];
menuOrders = [];
imgMenu = [];
initialized = false;

  constructor(private kitchenService: KitchenService) { 
    
  }

  ngOnInit() {
    setTimeout(() => {
      this.initialized = true;
    }, 1000)
    this.loadComponent();
  }

  loadComponent(){
    this.kitchenService.getWaitingOrder()
      .subscribe(
        (data: any) =>{ 
          this.kitchenOrders = data
          this.imgMenu = new Array(this.kitchenOrders.length)
          this.menuOrders = new Array(this.kitchenOrders.length)
          this.kitchenOrders.forEach((item, idx) => {
            this.kitchenService.getMenuByMenuId(this.kitchenOrders[idx].menuid).subscribe(
              (data: any) => {
                this.menuOrders[idx] = data.payload;
                console.log(this.menuOrders);
                this.kitchenService.getLinkImageMenu(data.payload.objkey).subscribe(
                  (data: any) => {this.imgMenu[idx] = data.payload
                  }
                )
              }
            )
          });
      }
    );
  }

  getTopping(toppingid : number){
    if(toppingid === 1)
        return "ไข่ดาว";
    else if(toppingid === 2){
        return "ไข่เจียว";
    }else return "ไม่มี";
  }

  onSuccess(item){
    this.kitchenService.putSuccessStatus(item.id).subscribe(
      (response) => {console.log(response);console.log('success');this.deleteOrder(item);}, 
      (error) => {console.log(error);console.log('error')}
    );
  }

  onCancel(item){
    this.kitchenService.putCancelStatus(item.id).subscribe(
      (response) => {console.log(response);console.log('success');this.deleteOrder(item);}, 
      (error) => {console.log(error);console.log('error')}
    );
  }

  deleteOrder(item){
    let index = this.kitchenOrders.indexOf(item);
    console.log(this.kitchenOrders);
    this.kitchenOrders.splice(index, 1);
    this.imgMenu.splice(index, 1);
    console.log(this.kitchenOrders);
  }

  onAdd(){
    this.kitchenService.addOrderMenu({
      "orderid":555,
      "menuid":555,
      "toppingid":555,
      "quantity":555,
      "userid":555,
      "status":"waiting"
    }).subscribe(
        (data: any) => console.log(data)
    );
  }
}