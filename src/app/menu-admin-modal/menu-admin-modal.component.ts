import {Component, OnInit, Input, ViewChild, OnChanges} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-menu-admin-modal',
  templateUrl: './menu-admin-modal.component.html',
  styleUrls: ['./menu-admin-modal.component.css']
})
export class MenuAdminModalComponent implements OnInit {
  title = 'Menu';
  @Input() id: number;
  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() pic: any;
  isSubmit = true;
  message: string;
  @ViewChild('menuAdmin') menuAdmin: ModalComponent;
  private url = "http://kabkao-com-menu-2.ap-southeast-1.elasticbeanstalk.com/api";
  //private url = "http://localhost:5000/api"
  @Input() isTopping: boolean;

  constructor(private http: Http, private userService: UserService) { }

  ngOnInit() {
    this.message = 'Save complete.';
    console.log('Hi');
  }

  showModal() {
    this.menuAdmin.showChildModal();
  }

  hideModal() {
    this.menuAdmin.hideChildModal();
  }

  onSubmit() {
    console.log("Submitting...");
    if(this.id != null && this.pic != null) {
      this.editMenu(this.id, this.name, this.description, this.price, this.pic.name);
    }
    else if(this.id == null && this.pic != null) {
      this.addMenu(this.name, this.description, this.price, this.pic.name);
    }
    else if(this.id != null && this.pic == null) {
      this.editTopping(this.id, this.name, this.price);
    }
    else if(this.id == null && this.pic == null) {
      this.addTopping(this.name, this.price);
    }
    this.isSubmit = false;
  }

  log() {
    console.log(this.pic);
  }

  picChange(event: any) {
    this.pic = event.srcElement.files[0];
  }

  public addMenu(name: string, description: string, price: number, objkey: string){
    console.log("adding menu...");
    if(description == null) description = "";
    let response = this.http.post(this.url + "/add/menu", {name: name, description: description, price: price, objkey: objkey},
    {headers: new Headers({'Content-Type': 'application/json',  'Authorization': this.userService.getUserToken()})});
    response.map((res:Response) => {
      console.log("add menu POST status: " + res.status)
      return res.json();
    }).subscribe(data => {
      if(data.success == false) console.log("add obj status: " +
        data.success + ":" + data.errorMessage.message);
      else console.log("add obj status: " + data.success);
    });
    this.putPhoto(objkey);
  }

  public addTopping(name:string, price:number){
    console.log("adding topping...");
    let response = this.http.post(this.url + "/add/topping", {name: name, price: price}, {headers: new Headers({'Content-Type': 'application/json',  'Authorization': this.userService.getUserToken()})});
    response.map((res:Response) => {
      console.log("add topping POST status: " + res.status)
      return res.json();
    }).subscribe(data => {
      if (data.success == false) console.log("add obj status: " +
        data.success + ":" + data.errorMessage.message);
      else console.log("add obj status: " + data.success);
    });
  }

  public editMenu(id:number, name:string, description:string, price:number, objkey:string){
    console.log('editting menu...');
    let response = this.http.post(this.url + "/add/menu", {id: id, name: name, description: description, price: price, objkey: objkey}, {headers: new Headers({'Content-Type': 'application/json',  'Authorization': this.userService.getUserToken()})});
    response.map((res:Response) => {
      console.log("edit menu POST status: " + res.status);
      return res.json();
    }).subscribe(data => {
      if(data.success == false) console.log("add obj status: " +
        data.success + ":" + data.errorMessage.message);
      else console.log("add obj status: " + data.success);
    });
    this.putPhoto(objkey);
  }

  public editTopping(id:number, name:string, price:number){
    console.log("editting topping...");
    let response = this.http.post(this.url + "/add/topping", {id: id, name: name, price: price}, {headers: new Headers({'Content-Type': 'application/json',  'Authorization': this.userService.getUserToken()})});
    response.map((res:Response) => {
      console.log("edit topping POST status: " + res.status);
      return res.json();
    }).subscribe(data => {
      if(data.success == false) console.log("add obj status: " +
        data.success + ":" + data.errorMessage.message);
      else console.log("add obj status: " + data.success);
    });
  }

  public putPhoto(objkey: string){
    let response = this.http.get(this.url + "/upload?objkey=" + objkey, {headers: new Headers({'Content-Type': 'application/json',  'Authorization': this.userService.getUserToken()})});
    response.subscribe(res => console.log("Put photo status: " + res.status));
    response.map((res:Response) => res.json()).subscribe(data => {
      this.http.put(data.payload, this.pic, {headers: new Headers({'Content-Type': 'image/jpeg', 'Authorization': this.userService.getUserToken()})}).subscribe();
    });
  }

}
