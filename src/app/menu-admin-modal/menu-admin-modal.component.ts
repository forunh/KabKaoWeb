import {Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges} from '@angular/core';
import {ModalComponent} from "../modal/modal.component";

@Component({
  selector: 'app-menu-admin-modal',
  templateUrl: './menu-admin-modal.component.html',
  styleUrls: ['./menu-admin-modal.component.css']
})
export class MenuAdminModalComponent implements OnInit, OnChanges {
  title = "Menu";
  @Input() name: string;
  description: string;
  price: string;
  pic: string;
  isSubmit: true;
  message: string;
  @Input() show = true;
  @ViewChild('menuAdmin') menuAdmin: ModalComponent;

  constructor() { }

  ngOnInit() {
    this.menuAdmin.showChildModal();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['show'].currentValue) {
      this.menuAdmin.showChildModal();
    }
    else {
      this.menuAdmin.hideChildModal();
    }
  }

}
