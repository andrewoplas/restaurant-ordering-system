import { Component, OnInit, Input} from '@angular/core';
import { OrderService } from '../../../app/core/services/order.service';
import { Order, Status } from '../../../app/core/entity/Order';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-order',
  templateUrl: '../html/order.component.html',
  styleUrls: ['../scss/order.component.scss']
})
export class OrderComponent implements OnInit {
  title = 'ORDERS';
  status = Status;
  orderList: Array<Order> = new Array<Order>();

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    $("#table-orders").dataTable();
    this.orderService.getOrders();
    $('.preloader').fadeOut();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(
      data => {
        this.orderList = data;
        $("#table-orders").DataTable().clear();
        $('#table-orders').DataTable().destroy();
      }
    );
  }

  reinitialize(isLast: boolean) {
    if (isLast && !$.fn.DataTable.isDataTable('#table-orders')) {
      $('#table-orders').dataTable();
      eval("$('[data-toggle=tooltip]').tooltip();");
    }
  }

  delete(id: number) {
    this.orderService.deleteOrder(id)
      .subscribe(
        success => {
          if(success) {
            this.orderList = this.orderList.filter(o => o.id != id);
          }
      });
  }
}
