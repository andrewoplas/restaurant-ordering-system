import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-occupant-order',
    templateUrl: '../html/occupant-order.component.html',
    styleUrls: [
        '../scss/occupant-order.component.scss',
        '../../plugins/bootstrap/dist/css/bootstrap.min.css'
    ]
}) 
export class OccupantOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initializeTableItems();
  }

  initializeTableItems() {
      $(document).ready(function () {
        $(".table-order tbody")
          .find("tr")
          .after('<tr _ngcontent-c2 class="spacer"><td _ngcontent-c2 colspan="6"></td></tr>');
      });
  }
}
