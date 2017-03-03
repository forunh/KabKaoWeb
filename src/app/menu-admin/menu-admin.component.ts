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
    //this.getAllTopping();
  }

  public getAllMenu(){
    this.http.get(this.url+'/view/menu').map((res:Response) => res.json()).subscribe(data => {
      this.menuList = data.payload;
      console.log(this.menuList);
      console.log(this.menuList.length);
      this.photoList = new Array(this.menuList.length);
      this.menuList.forEach((menu, index) => {
        this.photoList[index] = this.getPhoto(menu.objkey, index);
      })
    });
  }

  public getAllTopping(){
    this.http.get(this.url+'/view/topping').map((res:Response) => res.json()).subscribe(data => {
      this.toppingList = data;
    });
  }

  public getPhoto(name:string, index:number) {
    this.http.get(this.url + '/download?objkey=' + name).subscribe(data => {
      this.photoList[index] = data.text();
      console.log(data.text());
    });
  }
}
