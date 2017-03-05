import {Component, OnInit, Input, ViewChild, OnChanges} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-menu-admin-modal',
  templateUrl: './menu-admin-modal.component.html',
  styleUrls: ['./menu-admin-modal.component.css']
})
export class MenuAdminModalComponent implements OnInit {
  title = 'Menu';
  @Input() name: string;
  @Input() escription: string;
  @Input() price: string;
  pic: string;
  isSubmit = true;
  message: string;
  @ViewChild('menuAdmin') menuAdmin: ModalComponent;

  constructor() { }

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
    return 0;
  }

}
