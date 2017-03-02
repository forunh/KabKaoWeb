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

     public addOrder(orderList){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(orderList);
        console.log(body)
        return this.http.post(this.url+'/orderList', body, options).map((res:Response) => res.json());
    
    }

    public getOrderByUserId(userId){
        return this.http.get(this.url+'/orderList?userid='+userId).map((res:Response) => res.json());

    }
}
