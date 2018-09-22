import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-order",
  templateUrl: "../html/order.component.html",
  styleUrls: ["../scss/order.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class OrderComponent implements OnInit {
  title = "ORDERS";

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    $("#table-orders").dataTable();
  }
}
