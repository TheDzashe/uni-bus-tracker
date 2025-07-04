// home.page.ts
declare var google: any;


import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  @ViewChild('mapContainer', { static: true }) mapContainer!: ElementRef;
  panelExpanded = false;
  nearbyStops = [
    { name: 'Hatfield Plaza', distance: '2 min walk' },
    { name: 'Burnett Street', distance: '5 min walk' },
    { name: 'Sunnyside', distance: '8 min walk' }
  ];

  async ngOnInit() {
    await this.initMap();
    this.loadNearbyStops();
  }

  togglePanel() {
    this.panelExpanded = !this.panelExpanded;
  }

  selectDestination(destination: string) {
    console.log('Selected destination:', destination);
    // Implement navigation logic
  }

  private async initMap() {
    // Implement your map initialization
    // Example using Google Maps:
    const position = await Geolocation.getCurrentPosition();
    const map = new google.maps.Map(this.mapContainer.nativeElement, {
      center: { lat: position.coords.latitude, lng: position.coords.longitude },
      zoom: 15,
      disableDefaultUI: true
    });
    
    // Add bus stop markers
    this.nearbyStops.forEach(stop => {
      new google.maps.Marker({
        position: { lat: position.coords.latitude + (Math.random() * 0.01 - 0.005), 
                   lng: position.coords.longitude + (Math.random() * 0.01 - 0.005) },
        map,
        icon: {
          url: 'assets/icon/bus-stop.png',
          scaledSize: new google.maps.Size(30, 30)
        }
      });
    });
  }

  private loadNearbyStops() {
    // Implement API call to get real bus stops
  }
}