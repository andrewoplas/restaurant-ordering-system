import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import "animate.css";
import { OrderService } from '@services/order.service';
import { Order, MenuItemQuantity, Status } from '@models/Order';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

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
  cartItems;

  constructor(
    private orderService: OrderService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if(this.orderService.hasStartCountdown()) {
      swal({
        title: "Oops",
        text: "It seems you have a pending order. You will be redirected to the waiting area",
        type:   "warning",
        showConfirmButton: false,
        timer: 3000
      });

      setTimeout(
        () => {
          this.router.navigate(['waiting']);
      }, 3000);
    } else {
      this.initializeTableItems();
    }
  }

  initializeTableItems() {
    this.items = this.orderService.getOrder();
    this.calculateTotalAmount();

    this.cartItems = this.items.length;
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

  removeItem(menuItem: MenuItemQuantity) {
    var container = $('#' + menuItem.id);
    container.addClass('fadeOutLeft');

    setTimeout(
      () => {
        this.orderService.removeToCart(menuItem, this.items);
        this.initializeTableItems();
    }, 1000);
  }

  increaseQuantity(menuItem: MenuItemQuantity) {
    this.orderService.increaseQuantity(menuItem, 1, this.items);
    this.initializeTableItems();
  }

  decreaseQuantity(menuItem: MenuItemQuantity) {
    this.orderService.decreaseQuantity(menuItem, 1, this.items);
    this.initializeTableItems();
  }

  finalizeOrder() {
    let orderNumber = (new Date()).getTime();
    let tableNumber = this.auth.getTable().tableNumber;

    let order: Order = new Order(
      0, this.totalAmount, Status.PENDING, Number(tableNumber), orderNumber, this.items, new Date()
    );   

    sessionStorage.setItem("order_number", orderNumber.toString());

    this.orderService.addOrder(order)
    .subscribe(
      data => {
        if(data != null) {
          this.orderService.startCountdown();
          this.initializeTableItems();

          swal({
            title: "Success",
            text: "Successfully processed your order. You will be redirected to waiting screen in a second...",
            type:   "success",
            confirmButtonText: "Cool",
            confirmButtonColor: "#FBA62F"
          });

          setTimeout(
            () => {
              this.router.navigate(['waiting']);
          }, 2000);

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
    );
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
