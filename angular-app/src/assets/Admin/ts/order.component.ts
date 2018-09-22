import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import * as $ from "jquery";
import "datatables.net-bs";

@Component({
  selector: "app-order",
  templateUrl: "../html/order.component.html",
  styleUrls: ["../scss/order.component.scss"]
})
export class OrderComponent implements OnInit {
  title = "ORDERS";

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    $("#table-orders").dataTable();
  }
  
}
