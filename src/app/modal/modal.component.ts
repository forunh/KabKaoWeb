import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('childModal') public childModal:ModalDirective;
  @Input() title:String;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }

}
