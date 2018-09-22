import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import * as $ from "jquery";
import { OrderService } from "../../../app/core/services/order.service";
import { Order } from "../../../app/core/entity/Order";

@Component({
  selector: "app-order",
  templateUrl: "../html/order.component.html",
  styleUrls: ["../scss/order.component.scss"],
})
export class OrderComponent implements OnInit {
  title = "ORDERS";
  orderList: Array<Order> = new Array<Order>();

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orderList = this.orderService.orderList;
  }

  ngAfterViewInit() {
    $("#table-orders").dataTable();
  }
}
