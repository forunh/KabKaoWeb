import { Component,Input } from '@angular/core';
// import { MenuBarComponent } from './menubar.component';
import { ExampleService} from './service/example.service';
import { Foursquare } from './model/foursquare';

@Component({
  selector: 'body-app',
  templateUrl: '../html/body.component.html',
})
export class BodyComponent  { 
    @Input() isOrder = false;
    foursquareData:Foursquare;

    constructor(private exampleService:ExampleService){

    }

    private getExample(){
      this.exampleService.getFoursquare().subscribe(
      data => {
        console.log(data)
        this.foursquareData = data[0]
      }
      // No error or completion callbacks here. They are optional, but
      // you will get console errors if the Observable is in an error state.
    );
    }
}
