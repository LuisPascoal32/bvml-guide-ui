import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.html',
  styleUrls: ['./map.scss'],
  imports: [
    GoogleMapsModule,
    GoogleMap
  ],
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;
  @Input() leakRadius!: number; //meters
  @Input() fireRadius!: number; //meters

  zoom = 14;
  center!: google.maps.LatLngLiteral;
  leakCircle: google.maps.CircleOptions = {
    strokeColor: '#ffb217',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#ffb217',
    fillOpacity: 0.3,
    clickable: false,
    editable: false,
    draggable: false
  };
  fireCircle: google.maps.CircleOptions = {
    strokeColor: '#ff0026',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#ff0026',
    fillOpacity: 0.1,
    clickable: false,
    editable: false,
    draggable: false
  };

  markerOptions: google.maps.MarkerOptions = {
    draggable: true
  };

  ngOnInit(): void {
    console.log(this.leakRadius);
    console.log(this.fireRadius);
    this.getUserLocation();
  }

  getUserLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    } else {
      alert('Geolocation not supported by your browser.');
    }
  }

  onMarkerDragEnd(event: google.maps.MapMouseEvent): void {
  if (event.latLng) {
    this.center = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
  }
}
}
