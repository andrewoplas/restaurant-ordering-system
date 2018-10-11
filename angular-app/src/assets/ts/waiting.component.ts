import { Component, OnInit } from '@angular/core';
import { OrderService } from '@services/order.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-waiting',
  templateUrl: '../html/waiting.component.html',
  styleUrls: ['../scss/waiting.component.scss']
})
export class WaitingComponent implements OnInit {
  minutes: number;
  seconds: number;
  hideTimer: boolean;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.minutes = 0;
    this.seconds = 0;
    if(!this.orderService.hasStartCountdown()) {
      swal({
        title: "Oops",
        text: "It seems you have not finalize any order yet. You will be redirected to the menu screen",
        type:   "warning",
        showConfirmButton: false,
        timer: 3000
      });

      setTimeout(
        () => {
          this.router.navigate(['menu']);
      }, 3000);
    } else {
      this.hideTimer = false;
      this.startTimer();
    }    
  }

  startTimer() {
    let expectedTime: any = this.orderService.countDownTimer().getTime();
    
    var x = setInterval(() => {
      let distance = expectedTime - new Date().getTime();

      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        this.hideTimer = true;
        clearInterval(x);
      }
    }, 1000);
  }

  cancelOrder() {
    let orderNumber = sessionStorage.getItem("order_number");
    this.orderService.cancelOrder(orderNumber)
    .subscribe(
      data => {
        if(data != null) {
          swal({
            title: "Success",
            text: "Successfully cancelled your order. You'll be redirected the menu page",
            type: "success",
            timer: 3000
          });

          this.orderService.clearOrder();

          setTimeout(
            () => {
              this.router.navigate(['menu']);
          }, 3000);
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
