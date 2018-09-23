import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import "animate.css";

@Component({
  selector: "app-occupant-order",
  templateUrl: "../html/occupant-order.component.html",
  styleUrls: [
    "../scss/occupant-order.component.scss",
    "../../plugins/bootstrap/dist/css/bootstrap.min.css",
    "../../../node_modules/animate.css/animate.min.css"
  ]
})
export class OccupantOrderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initializeTableItems();
    this.removeOrderItem();
  }

  initializeTableItems() {
    $(function () {
      $(".table-order tbody")
        .find("tr")
        .after('<tr _ngcontent-c1 class="spacer"><td _ngcontent-c1 colspan="6"></td></tr>');
    });
  }

  removeOrderItem() {
    $(function() {
      $(document).on('click', '.remove-order', function () {
        var container = $(this).parents("tr");
        container.addClass('fadeOutLeft');
        
        setTimeout(function () { 
          container.next().remove();
          container.remove();
        }, 750);
      });
    });
  }
}
