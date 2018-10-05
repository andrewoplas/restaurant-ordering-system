import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../app/core/services/order.service';
import { Order, Status } from '../../../app/models/Order';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import 'datatables.net';

@Component({
  selector: 'app-admin-feedback',
  templateUrl: '../html/admin-feedback.component.html',
  styleUrls: ['../scss/admin-feedback.component.scss']
})
export class AdminFeedbackComponent implements OnInit {
  title = 'FEEDBACK';
  status = Status;
  orderModal;
  orderList: Array<Order> = new Array<Order>();

  constructor(private orderService: OrderService, private modalService: NgbModal) {}

  ngOnInit() {
    $("#table-orders").dataTable();
    $('.preloader').fadeOut();
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
            // alert('done');
          } else {
            // alert('error');
          }
      });
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

}
