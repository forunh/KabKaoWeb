import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class DeliveryService {

    private url = 'http://kabkaodeliveryservice.ap-southeast-1.elasticbeanstalk.com';
    constructor(private http:Http) {
    }
    
    // public postDestination(lat:Number,lng:Number){
    //     let headers = new Headers({'Content-Type': 'application/json'});
    //     let options = new RequestOptions({headers: headers});
    //     let body = JSON.stringify({lat:lat,lng:lng});
    //     console.log(body)
    //     return this.http.post(this.url+'/deliveryPrice',body,options).map((res:Response) => res.json());
    
    // }

        public postDestination(lat,lng){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify({latitude:lat,longitude:lng});
        console.log(body)
        return this.http.post(this.url+'/deliveryPrice',body,options).map((res:Response) => res.json());
    
    
    }

   
    
}
