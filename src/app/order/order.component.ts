import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { OrderList } from '../model/orderList';
import { OrderMenu } from '../model/orderMenu';
import { OrderService } from '../service/order.service';
import { GgMapService} from '../service/gg-map.service';
import { DeliveryService} from '../service/delivery.service';
import {MenuOrder} from '../model/menuOrder'
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() menuLists:Array<MenuOrder>;
  @Output() onOrderSent = new EventEmitter<Object>();

  orderListData:OrderList;
  postDelivery:string;
  orderMenuData:Array<OrderMenu>;
  mapTitle = "ADDRESS";
  isSelectAddress = false;
  isLoading = false;
  lat:Number;
  lng:Number;
  address:String="Please select address.";
  totalPrice=0;
  menuPrice=0;
  deliveryPrice=0;

  constructor(private orderService: OrderService,private ggMapService:GgMapService,private deliveryService: DeliveryService, private userService: UserService) {
    this.menuLists = orderService.getCurrentOrders();

   }

  ngOnInit() {
    this.menuPrice = this.calTotalMenuPrice()
    this.totalPrice = this.menuPrice+this.deliveryPrice;
  }

  private createOrder(){
      this.isLoading = true;
      let orderList = {
        id:null,
        userId:this.getUser().id,
        price:this.totalPrice,
        address:this.address,
        createAt:null
      };

      let menu:Array<Object>=new Array<Object>();
      for(let menuList of this.menuLists){
        menu.push(
          {
            menuId:menuList.id,
            quantity:menuList.quantity
          }
        );
      }

      this.orderService.addOrderList(orderList)
      .subscribe(
          data => {
            this.orderListData = data;
            // console.log(data)
            let orderMenuList = {
              orderId: data.id,
              menuList: menu
            }
             this.orderService.addOrderMenuList(orderMenuList)
            .subscribe(
                data => {
                  this.orderMenuData = data
                  console.log(data)
                  this.isLoading = false;
                  let newEvent = {
                    orderListData:this.orderListData,
                    orderMenuData:this.orderMenuData
                  }
                  this.onOrderSent.emit(newEvent);
                  this.orderService.setOrderStatus(false);
                  this.clearOrder();
                },
                error => {
                  this.isLoading = false;
                  console.error("Error adding orderMenu!")
                }
            );
          },
          error => {
            this.isLoading = false;
            console.error("Error adding orderList!")
          }
      );
  }



  private getAddress(){
      this.ggMapService.getAddressByCoordinate(this.lat.toString()+","+this.lng.toString())
      .subscribe(
          data => {
            this.address = data.results[0].formatted_address
            console.log(data)

          },
          error => {
            console.error("Error search address!")
          }
      );
  }

  private toDateString(utcDate){
    return new Date(utcDate).toDateString()+new Date(utcDate).toTimeString()
  }

  private selectAddress(lat:Number,lng:Number){
    this.lat=lat;
    this.lng=lng;
    this.isSelectAddress=true
  }

  private clearOrder(){
    this.menuLists = null;
  }

    calTotalMenuPrice(){
      var totalPrice:number=0;
      for(var menuList of this.menuLists){
        totalPrice += +menuList.price*+menuList.quantity;
      }
      return totalPrice
    }

   calTotalQuantity(){
    let totalQuantity:number=0;
    for(let menuList of this.menuLists){
      totalQuantity += +menuList.quantity;
    }
    return totalQuantity
  }
    private getDeliveryPrice(){

        this.deliveryService.postDestination(this.lat,this.lng)
            .subscribe(
            data=> {
              this.postDelivery = JSON.stringify(data);
              this.deliveryPrice = data.price;
              this.totalPrice = this.menuPrice+this.deliveryPrice;
              console.log(data.price)
              console.log("aaaaaaaa"+this.postDelivery)

            },
            error => {
               console.error("Cannnot get deliveryPrice!")
            }

          )
  }

  private getUser() {
      return this.userService.getMyUserData();
  }



}
