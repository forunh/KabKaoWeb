import { Component,Input } from '@angular/core';
// import { MenuBarComponent } from './menubar.component';

@Component({
  selector: 'body-app',
  templateUrl: '../html/body.component.html',
})
export class BodyComponent  { 
    @Input() isOrder = false;
}
