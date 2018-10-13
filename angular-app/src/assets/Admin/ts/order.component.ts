import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { OrderService } from '@services/order.service';
import { Order, Status } from '@models/Order';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import 'datatables.net';
import swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: '../html/order.component.html',
  styleUrls: ['../scss/order.component.scss']
})
export class OrderComponent implements OnInit {
  title = 'ORDERS';
  status = Status;
  orderModal = {
    menuItem: []
  };
  orderList: Array<Order> = new Array<Order>();
  totalAmount: number;

  constructor(
    private orderService: OrderService, 
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(
      data => { this.orderList = data; }
    );
  }

  reinitialize(isLast: boolean) {
    if (isLast && !$.fn.DataTable.isDataTable('#table-orders')) {
      setTimeout(function(){
        $('#table-orders').dataTable();
      }, 500);

      eval("$('[data-toggle=tooltip]').tooltip();");
    }
  }

  delete(id: number) {
    this.orderService.deleteOrder(id)
      .subscribe(
        data => {
          if(data != null) {
            if ($.fn.DataTable.isDataTable("#table-orders")) {
              $('#table-orders').DataTable().clear().destroy();
            }

            this.orderList = data;

            swal({
              title: "Success",
              text: "Successfully removed order!",
              type:   "success",
              confirmButtonText: "Okay",
              confirmButtonColor: "#FBA62F"
            });
          } else {
            swal({
              title: "Ooops!",
              text: "There was an error during the process. Please try again!",
              type: "error",
              confirmButtonText: "Try Again",
              confirmButtonColor: "#A40020"
            });
          }
        }
    );
  }

  getOrderModal(order: Order) {
    this.orderModal = order;

    this.totalAmount = 0;
    let i: number;
    for (i=0; i<this.orderModal.menuItem.length; i++) {      
      this.totalAmount += order.menuItem[i].price * order.menuItem[i].quantity;
    }
  }
}
