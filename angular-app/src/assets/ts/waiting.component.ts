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
    }, 

    error => { this.displayError(error); }
    
    );
  }

  async payBill() {
    let billAmount = 0;
    let order = this.orderService.getOrder();

    let i: number;
    let price: number = 0;
    for (i=0; i<order.length; i++) {
      price = order[i].item.salePrice > 0? order[i].item.salePrice : order[i].item.price;
      billAmount += price * order[i].quantity;
    }

    const {value: money} = await swal({
      title: 'Pay Bill',
      input: 'number',
      showCancelButton: true,
      confirmButtonText: "Confirm",
      confirmButtonColor: "#A40020",
      type: 'info',
      inputPlaceholder: "Input Amount",
      text: "Your current total bill is ₱" + billAmount,
      inputValidator: (value) => {
        return !value && 'You need to write something!'
      }
    })

    if (money) {
      if(money > billAmount) {
        let orderNumber = sessionStorage.getItem("order_number");
        this.orderService.payOrder(orderNumber)
        .subscribe(
          data => {
            if(data != null) {
              swal({
                title: "Success",
                text: "Successfully paid your bill. You will redirected to landing page!",
                type: "success",
                timer: 3000
              });
    
              this.orderService.clearOrder();
    
              setTimeout(
                () => {
                  this.router.navigate(['/']);
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
        }, 
        
        error => { this.displayError(error); }
        
        );
      } else {
        swal({
          title: "Ooops!",
          text: "Your money is less than your bill. Try again please!",
          type: "error",
          confirmButtonText: "Try Again",
          confirmButtonColor: "#A40020"
        }); 
      }
    }
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
