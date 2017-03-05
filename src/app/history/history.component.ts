import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  allOrder= [];
  allMenu=[]
  isLoading = true;

  constructor(private orderService:OrderService, private userService: UserService) { 

  }

  ngOnInit() {
    this.isLoading=true;
    
    let userId = this.getUser().id;
    this.orderService.getOrderListByUserId(userId)
    .subscribe(
            data=> {
              this.allOrder = data;
              // console.log(data);
            
              this.isLoading=false;
              
            },
            error => {
               console.error("Cannnot get history order!")
            }
    )
  }


  private toDateString(utcDate){
    return new Date(utcDate).toDateString()+" "+new Date(utcDate).toTimeString().substring(0, 8)
  }

  private getUser() {
      return this.userService.getMyUserData();
  }

}
