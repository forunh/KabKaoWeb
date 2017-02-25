import { Component, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
 
@Component({
  selector: 'modal',
  templateUrl: '../html/modal.component.html'
})
export class ModalComponent {
  @ViewChild('childModal') public childModal:ModalDirective;
  @Input() title:String;

  public showChildModal():void {
    this.childModal.show();
  }
 
  public hideChildModal():void {
    this.childModal.hide();
  }
}
