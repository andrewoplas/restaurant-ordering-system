import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import "animate.css";
import { OrderService } from '@services/order.service';
import { Order, MenuItemQuantity, Status } from '@models/Order';
import swal from 'sweetalert2';

@Component({
  selector: "app-occupant-order",
  templateUrl: "../html/occupant-order.component.html",
  styleUrls: [
    "../scss/occupant-order.component.scss",
    "../../../node_modules/animate.css/animate.min.css"
  ]
})
export class OccupantOrderComponent implements OnInit {
  items: Array<MenuItemQuantity>;
  totalAmount;  

  constructor(
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.initializeTableItems();
    this.removeOrderItem();
  }

  initializeTableItems() {
    this.items = this.orderService.getOrder();
    this.calculateTotalAmount();

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

  calculateTotalAmount() {
    this.totalAmount = 0;

    let i: number;
    let price: number = 0;
    for (i=0; i<this.items.length; i++) {
      price = this.items[i].item.salePrice > 0? this.items[i].item.salePrice : this.items[i].item.price;
      this.totalAmount += price * this.items[i].quantity;
    }
  }

  increaseQuantity(index: number) {
    this.items[index].quantity += 1;
    this.calculateTotalAmount();
  }

  decreaseQuantity(index: number) {
    this.items[index].quantity -= 1;
    this.calculateTotalAmount();
  }

  finalizeOrder() {
    swal({
      title: "Processing",
      text: "Please wait as we process your request",
      showConfirmButton: false,
    });

    let order: Order = new Order(
      0, this.totalAmount, Status.PENDING, 0, 0, this.items, new Date()
    );   

    console.log(order);

    this.orderService.addOrder(order)
    .subscribe(
      data => {
        if(data != null) {
          swal({
            title: "Success",
            text: "Successfully processed your order.!",
            type:   "success",
            confirmButtonText: "Cool",
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
    });
  }
}
