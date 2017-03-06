import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuNameService {

    private url = 'http://kabkao-com-menu-2.ap-southeast-1.elasticbeanstalk.com/api/view/menu/id/';
    constructor(private http:Http) {
    }

    //  public addOrderList(orderList){
    //     let headers = new Headers({'Content-Type': 'application/json'});
    //     let options = new RequestOptions({headers: headers});
    //     let body = JSON.stringify(orderList);
    //     console.log(body)
    //     return this.http.post(this.url+'/orderList', body, options).map((res:Response) => res.json());
    
    // }

    public getMenuById(id){
        return this.http.get(this.url+id).map((res:Response) => res.json());

    }

}
