
import { Component, OnInit } from '@angular/core';
import {UserService} from "../service/user.service";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  // @ViewChild(SebmGoogleMap) sebmGoogleMap: SebmGoogleMap;
  title: string = 'Select your destination';
   lat: number = 13.729052;
   lng: number = 100.775567;
   zoom: number = 13;
   marker =
	  {
		  lat: 13.729052,
		  lng: 100.775567,
		  label: 'A',
		  draggable: false
	  };

  constructor(private userService:UserService) { }

  ngOnInit() {
    
  }
  
  ngAfterViewChecked() {
    // this.sebmGoogleMap.triggerResize().then(res =>{
    //   this.lat= 13.730981141073448
		//   this.lng= 100.78131762536941
    // })
  }

  mapClicked($event: any) {
    
    console.log($event)
    this.marker={
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      label:'',
      draggable:true
    };
    // this.lat = $event.coords.lat;
    // this.lng = $event.coords.lng;
   
  }
    // markerDragEnd(m:Array<Object>, $event: any) {
    // console.log('dragEnd', m, $event);
  // }
}


