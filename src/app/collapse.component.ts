import { Component } from '@angular/core';
 
@Component({
  selector: 'collapse',
  templateUrl: '../html/collapse.component.html'
})
export class CollapseComponent {
  public isCollapsed:boolean = false;
 
  public collapsed(event:any):void {
    console.log(event);
  }
 
  public expanded(event:any):void {
    console.log(event);
  }
}