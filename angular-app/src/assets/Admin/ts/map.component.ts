import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'map',
  templateUrl: '../html/map.component.html',
  styleUrls: ["../sass/bower_components/vectormap/jquery-jvectormap-2.0.2.css"]
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#usa').vectorMap({
      map: 'us_aea_en',
      markers: [
          {
              latLng: [36.77, -119.41],
              name: 'California visit : 250'

    },
          {
              latLng: [34.15, -105],
              name: 'New Maxico visit : 250'

    },
          {
              latLng: [41.49, -99.90],
              name: 'Nebraska visit   : 1250'

    },
          {
              latLng: [25.20, 55.27],
              name: 'UAE : 250'

    }],

      backgroundColor: 'transparent',
      regionStyle: {
          initial: {
              fill: '#2cabe3'
          }
      }
  });
  }

}
