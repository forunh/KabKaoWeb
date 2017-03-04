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

  private url = "http://localhost:5000";
  constructor(private http:Http) { }
  menuList: Menu[];
  toppingList: Topping[];
  photoList;

  ngOnInit() {
    this.getAllMenu();
    this.getAllTopping();
  }

  public getAllMenu(){
    this.http.get(this.url+'/view/menu').map((res:Response) => res.json()).subscribe(data => {
      if(data.success == false){
        console.log("Failed to retrieve menu list.");
        return;
      }
      else {
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
    this.http.get(this.url+'/view/topping').map((res:Response) => res.json()).subscribe(data => {
      if(data.success == false){
        console.log("Failed to retrieve topping list.");
        return;
      }
      else {
        this.toppingList = data.payload;
        console.log(this.toppingList);
      }
    });
  }

  public getPhoto(objkey:string, index:number) {
    this.http.get(this.url + '/download?objkey=' + objkey).map(res => res.json()).subscribe(data => {
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
}
