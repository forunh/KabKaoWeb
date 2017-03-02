import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {OrderList} from '../model/orderList';

@Injectable()
export class OrderService {

    private url = 'http://localhost:1234';
    constructor(private http:Http) {
    }

     public addOrderList(orderList){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(orderList);
        console.log(body)
        return this.http.post(this.url+'/orderList', body, options).map((res:Response) => res.json());
    
    }

    public getOrderListByUserId(userId){
        return this.http.get(this.url+'/orderList?userid='+userId).map((res:Response) => res.json());

    }

    public getAllOrderList(){
        return this.http.get(this.url+'/orderList').map((res:Response) => res.json());

    }

    public addOrderMenu(orderMenu){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(orderMenu);
        console.log(body)
        return this.http.post(this.url+'/orderMenu', body, options).map((res:Response) => res.json());
    
    }

    public addOrderMenuList(orderMenuList){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(orderMenuList);
        console.log(body)
        return this.http.post(this.url+'/AddOrderMenu', body, options).map((res:Response) => res.json());
    
    }

    public getOrderMenuByOrderId(orderId){
        return this.http.get(this.url+'/orderMenu?orderid='+orderId).map((res:Response) => res.json());

    }
    public getAllOrderMenu(){
        return this.http.get(this.url+'/orderMenu').map((res:Response) => res.json());

    }
    
}
