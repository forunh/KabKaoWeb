import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {OrderList} from '../model/orderList';
import {MenuOrder} from '../model/menuOrder'


@Injectable()
export class OrderService {

  private url = 'http://kabkao-order-service-worker-1.ap-southeast-1.elasticbeanstalk.com';

  private currentOrders: Array<MenuOrder> = [];
  private isOrder: boolean;

  constructor(private http: Http) {
  }

  public addCurrentOrders(menu) {
    let found = false;
    for (let orderedMenu of this.currentOrders) {
      if (menu.id == orderedMenu.id) {
        found = true;
        orderedMenu.quantity += 1;
      }
    }
    if (found == false) {
      let newMenu = {
        id: menu.id,
        name: menu.name,
        price: menu.price,
        quantity: 1
      }
      this.currentOrders.push(newMenu);
    }
  }

  public getCurrentOrders() {
    return this.currentOrders;
  }

  public clearCurrentOrders() {
    this.currentOrders = [];
  }

  calTotalPrice() {
    var totalPrice: number = 0;
    for (var menuList of this.currentOrders) {
      totalPrice += menuList.price * menuList.quantity;
    }
    return totalPrice
  }

  calTotalQuantity() {
    var totalQuantity: number = 0;
    for (var menuList of this.currentOrders) {
      totalQuantity += menuList.quantity;
    }
    return totalQuantity
  }


  public addOrderList(orderList) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(orderList);
    console.log(body)
    return this.http.post(this.url + '/orderList', body, options).map((res: Response) => res.json());

  }

  public getOrderListByUserId(userId) {
    return this.http.get(this.url + '/orderList?userid=' + userId).map((res: Response) => res.json());

  }

  public getAllOrderList() {
    return this.http.get(this.url + '/orderList').map((res: Response) => res.json());

  }

  public addOrderMenu(orderMenu) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(orderMenu);
    console.log(body)
    return this.http.post(this.url + '/orderMenu', body, options).map((res: Response) => res.json());

  }

  public addOrderMenuList(orderMenuList) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(orderMenuList);
    console.log(body)
    return this.http.post(this.url + '/AddOrderMenu', body, options).map((res: Response) => res.json());

  }

    
    public addOrder(order){
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(order);
        console.log(body)
        return this.http.post(this.url+'/order', body, options).map((res:Response) => res.json());
    
    }

    public getOrderByUserId(userId){
        return this.http.get(this.url+'/order?userid='+userId).map((res:Response) => res.json());

    }
    public getAllOrder(){
        return this.http.get(this.url+'/all_order').map((res:Response) => res.json());

    }


  public getAllOrderMenu() {
    return this.http.get(this.url + '/orderMenu').map((res: Response) => res.json());

  }

  public setOrderStatus(status: boolean) {
    this.isOrder = status;
  }

  public getOrderStatus() {
    return this.isOrder;
  }

}
