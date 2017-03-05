import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import {UserService} from "../service/user.service";
import {Order} from '../model/order';
import {Http, Response, URLSearchParams} from "@angular/http";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  allOrder:Array<Order> = [];
  isLoading = true;
  private orderStatus = [];

  constructor(private orderService:OrderService, private userService: UserService, private http:Http) {
    this.getHistory();
  }

  ngOnInit() {
    this.isLoading=true;

    let userId = this.getUser().id;
    this.orderService.getOrderByUserId(userId)
    .subscribe(
            data=> {
              console.log(data);

              this.allOrder = data;

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

  private getHistory() {
    let params:URLSearchParams = new URLSearchParams();
    let user_id = this.userService.getMyUserData().id;
    params.set("userid", String(user_id));
    this.http.get('http://52.187.62.107:10500/kitchen/get_orderByUID', {search: params})
      .map((response: Response) => response.json()).subscribe(
      response => {
        this.orderStatus = response;
        this.orderService.getOrderListByUserId(user_id).subscribe((response) => { console.log(response);} )
      });
  }
}
