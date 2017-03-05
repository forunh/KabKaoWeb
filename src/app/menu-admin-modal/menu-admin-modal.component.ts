import {Component, OnInit, Input, ViewChild, OnChanges} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from '@angular/http';

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
  @Input() isTopping: boolean;

  constructor(private http: Http) { }

  ngOnInit() {
    this.message = 'Save complete.';
  }

  showModal() {
    this.menuAdmin.showChildModal();
  }

  hideModal() {
    this.menuAdmin.hideChildModal();
  }

  onSubmit() {
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
  }

  log() {
    console.log(this.pic);
  }

  picChange(event: any) {
    this.pic = event.srcElement.files[0];
  }

  public addMenu(name: string, description: string, price: number, objkey: string){
    let response = this.http.post(this.url + "/add/menu", {name: name, description: description, price: price, objkey: objkey}, 
    {headers: new Headers({'Content-Type': 'application/json'})});
    response.subscribe(res => console.log(res.status));
    response.map((res:Response) => res.json()).subscribe(data => {console.log(data.success);});
    this.putPhoto(objkey);
  }

  public addTopping(name:string, price:number){
    let response = this.http.post(this.url + "/add/topping", {name: name, price: price});
    response.subscribe(res => console.log(res.status));
    response.map((res:Response) => res.json()).subscribe(data => {console.log(data.success);});
  }

  public editMenu(id:number, name:string, description:string, price:number, objkey:string){
    console.log('editMenu');
    let response = this.http.post(this.url + "/add/menu", {id: id, name: name, description: description, price: price, objkey: objkey});
    response.subscribe(res => console.log(res.status));
    response.map((res:Response) => res.json()).subscribe(data => {console.log(data.success);});
    this.putPhoto(objkey);
  }

  public editTopping(id:number, name:string, price:number){
    let response = this.http.post(this.url + "/add/topping", {id: id, name: name, price: price});
    response.subscribe(res => console.log(res.status));
    response.map((res:Response) => res.json()).subscribe(data => {console.log(data.success);});
  }

  public putPhoto(objkey: string){
    let response = this.http.get(this.url + "/upload?objkey=" + objkey);
    response.subscribe(res => console.log(res.status));
    response.map((res:Response) => res.json()).subscribe(data => {
      this.http.put(data.payload, this.pic, {headers: new Headers({'Content-Type': 'image/jpeg'})}).subscribe();
    });
  }

}
