import { Component, OnInit } from '@angular/core';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import {Topping} from "../model/topping";
import {Menu} from "../model/menu";

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  private url = "http://kabkao-com-menu-2.ap-southeast-1.elasticbeanstalk.com/api";
  //private url = "http://localhost:5000/api"
  constructor(private http:Http) { }
  menuList: Menu[];
  toppingList: Topping[];
  photoList;

  ngOnInit() {
    this.getAllMenu();
    this.getAllTopping();
  }

  public getAllMenu(){
    console.log("getting menus...");
    let response = this.http.get(this.url+'/view/menu');
    console.log(response.map(res => res.json()));
    response.map((res:Response) => res.json()).subscribe(data => {
      if(data.success == false){
        console.log("Failed to retrieve menu list.");
        return;
      }
      else {
        console.log("got menus!");
        this.menuList = data.payload;
        console.log(this.menuList);
        this.photoList = new Array(this.menuList.length);
        this.menuList.forEach((menu, index) => {
          this.photoList[index] = this.getPhoto(menu.objkey, index);
        })
      }
    });
  }

  public getAllTopping(){
    console.log("getting toppings...");
    let response = this.http.get(this.url+'/view/topping');
    response.subscribe(res => console.log(res.status));
    response.map((res:Response) => res.json()).subscribe(data => {
      if(data.success == false){
        console.log("Failed to retrieve topping list.");
        return;
      }
      else {
        console.log("got toppings!");
        this.toppingList = data.payload;
        console.log(this.toppingList);
      }
    });
  }

  public getPhoto(objkey:string, index:number) {
    let response = this.http.get(this.url + '/download?objkey=' + objkey);
    response.map(res => res.json()).subscribe(data => {
      if(data.success == true) {
        this.photoList[index] = data.payload;
      }
      else console.log("failed to load image " + objkey)
      //console.log(data.payload);
    });
  }

  public removeMenu(id:number, index:number){
    this.http.delete(this.url + "/remove/menu?id=" + id).map(res => res.json()).subscribe(data => {
      if(data.success == true){
        console.log(this.menuList);
        this.menuList.splice(index, 1);
        console.log("Menu id[" + id +"] was removed.");
        console.log(this.menuList);
      }
      else{
        console.warn("Failed to remove Menu id[" + id + "].");
      }
    })
  }

  public removeTopping(id:number, index:number){
    this.http.delete(this.url + "/remove/topping?id=" + id).map(res => res.json()).subscribe(data => {
      if(data.success == true){
        console.log(this.toppingList);
        this.toppingList.splice(index, 1);
        console.log("Topping id[" + id +"] was removed.");
        console.log(this.toppingList);
      }
      else{
        console.warn("Failed to remove Topping id[" + id + "].");
      }
    })
  }

  public addMenu(name:string, description:string, price:number, objkey:string){
    let response = this.http.post(this.url + "/add/menu", {name: name, description: description, price: price, objkey: objkey});
    response.subscribe(res => console.log(res.status));
    response.map((res:Response) => res.json()).subscribe(data => {console.log(data.success);});
  }

  public addTopping(name:string, price:number){
    let response = this.http.post(this.url + "/add/topping", {name: name, price: price});
    response.subscribe(res => console.log(res.status));
    response.map((res:Response) => res.json()).subscribe(data => {console.log(data.success);});
  }

  public editMenu(id:number, name:string, description:string, price:number, objkey:string){
    let response = this.http.post(this.url + "/add/menu", {id: id, name: name, description: description, price: price, objkey: objkey});
    response.subscribe(res => console.log(res.status));
    response.map((res:Response) => res.json()).subscribe(data => {console.log(data.success);});
  }

  public editTopping(id:number, name:string, price:number){
    let response = this.http.post(this.url + "/add/topping", {id: id, name: name, price: price});
    response.subscribe(res => console.log(res.status));
    response.map((res:Response) => res.json()).subscribe(data => {console.log(data.success);});
  }
}
