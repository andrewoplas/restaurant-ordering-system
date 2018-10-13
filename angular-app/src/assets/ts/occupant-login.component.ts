import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-occupant-login',
  templateUrl: '../html/occupant-login.component.html',
  styleUrls: ['../scss/occupant-login.component.scss']
})
export class OccupantLoginComponent implements OnInit {
  forms = this.fb.group({
    tableNumber: ["", [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    let tableNumber = this.forms.value.tableNumber;

    this.authService.loginOccupant(tableNumber).subscribe(
      response => {
        if(response == null) {
          this.authService.successLoginOccupant(response);
        } else {
          swal({
            title: "Error",
            text: response,
            type: "error",
            confirmButtonText: "Try Again",
            confirmButtonColor: "#A40020"
          });
        }
    }, 
    
    error => { this.displayError(error); }

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
