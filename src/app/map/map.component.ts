import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }
   
  
  mapClicked($event: any) {
    console.log($event)
    this.marker={
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      label:'',
      draggable:true
    };
  }
    // markerDragEnd(m:Array<Object>, $event: any) {
    // console.log('dragEnd', m, $event);
  // }
}

