import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(localStorage.getItem('user')));
  }

  @Input() isOrder = false;
  isDetail = false;
  @Input() menuLists:Array<Object>;
  @Output() onOrderBodySent = new EventEmitter<boolean>();

  onOrderSent(isSent:boolean){
    if(isSent){
      this.menuLists = null;
      this.onOrderBodySent.emit(true);
      // this.isOrder=false;
      this.isDetail=true;
    }
  }
  onOrderDetailDone(isDone:boolean){
    if(isDone){
      this.isDetail=false;
    }
  }
}

