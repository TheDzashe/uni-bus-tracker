declare var google: any;

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: false,
})
export class MapPage implements OnInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  
  constructor() { }
  async ngOnInit() {
    await this.initMap();
  }
  
  private async initMap() {
      const position = await Geolocation.getCurrentPosition();
      const map = new google.maps.Map(this.mapContainer.nativeElement, {
        center: { lat: position.coords.latitude, lng: position.coords.longitude },
        zoom: 15,
        disableDefaultUI: true,
      });
    }


  

  

}