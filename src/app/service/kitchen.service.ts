import { Injectable } from '@angular/core';
import { Http,Response,URLSearchParams,Headers,RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class KitchenService {
baseURL: string = 'http://52.187.62.107:10500/kitchen/';
private header: Headers = new Headers();
  constructor(private http: Http) { 
    this.header.append("Content-Type", "application/json");
  }

  public addOrderMenu(kitchenOrder){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(kitchenOrder);
        console.log(body);
        return this.http.post(this.baseURL+'add_order', body, options).map((res:Response) => res.json());
    
    }

  getWaitingOrder(){
      return this.http.get(this.baseURL + 'waiting_order')
        .map((response : Response) => response.json());
  }
  
  putSuccessStatus(id : number){
    let params:URLSearchParams = new URLSearchParams();
    params.set("id", String(id));
    return this.http.put(this.baseURL + 'successStatus', params)
      .map((response: Response) => response.json()); 
  }

  putCancelStatus(id : number){
    let params:URLSearchParams = new URLSearchParams();
    params.set("id", String(id));
    return this.http.put(this.baseURL + 'cancelStatus', params)
      .map((response: Response) => response.json()); 
  }
}