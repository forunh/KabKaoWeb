import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class KitchenService {
baseURL: string = 'http://52.187.62.107:10500/kitchen/';

  constructor(private http: Http) { }

  getWaitingOrder(){
      return this.http.get(this.baseURL + 'waiting_order')
        .map((response : Response) => response.json());
  }

}