import { Component } from '@angular/core';
// import { MenuBarComponent } from './menubar.component';

@Component({
  selector: 'my-app',
  templateUrl: '../html/app.component.html',
})
export class AppComponent  { 
  name = 'KabKao';
  isLogin = false;
  hideModal: any;

  closeModal() {
    this.hideModal();
  }
}
