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
  orderModal;
  orderList: Array<Order> = new Array<Order>();

  constructor(
    private orderService: OrderService, 
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.orderService.getOrders().subscribe(
      data => { this.orderList = data; },
      error => { 
        this.displayError(error);
      }
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
    swal({
      title: "Processing",
      text: "Please wait as we process your request",
      showConfirmButton: false,
    });

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
        },
    
      error => { 
        this.displayError(error);
      }
    );
  }

  open(content: any, order: Order) {
    this.orderModal = order;
    this.modalService.open(content, { 
      ariaLabelledBy: 'modal-basic-title' ,
      centered: true,
      windowClass: 'order-items-modal'
    }).result.then((result) => {
    }, (reason) => {
      // close
    });
  }

  displayError(error) {
    swal({
      title: error.title,
      text: error.message,
      type: "error",
      confirmButtonText: "Got it!",
      confirmButtonColor: "#A40020"
    });
  }
}
