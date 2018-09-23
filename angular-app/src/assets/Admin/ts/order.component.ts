import { Component, OnInit, Input} from '@angular/core';
import { OrderService } from '../../../app/core/services/order.service';
import { Order, Status } from '../../../app/core/entity/Order';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  orderModal;
  orderList: Array<Order> = new Array<Order>();

  constructor(private orderService: OrderService, private modalService: NgbModal) {}

  ngOnInit() {
    $("#table-orders").dataTable();
    this.getOrders();
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
