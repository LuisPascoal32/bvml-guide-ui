import { NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.html',
  styleUrls: ['./map.scss'],
  imports: [
    GoogleMapsModule,
    GoogleMap,
    NgIf
  ],
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;

  zoom = 15;
  center!: google.maps.LatLngLiteral;
  radius = 1000; // meters
  circleOptions: google.maps.CircleOptions = {
    strokeColor: '#007BFF',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#007BFF',
    fillOpacity: 0.2,
    clickable: false,
    editable: false,
    draggable: false
  };

  markerOptions: google.maps.MarkerOptions = {
    draggable: false
  };

  ngOnInit(): void {
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
}
