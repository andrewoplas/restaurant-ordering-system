import { Component, OnInit } from '@angular/core';
import { AuthService } from '@services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  template: '<p>Logging Out...</p>'
})
export class LogoutComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.logout();
  }

  logout() {
    let tableNumber = this.auth.getTable().tableNumber;

    this.auth.logoutOccupant(tableNumber).subscribe(
      response => {
        if(response.error) {
          swal({
            title: "Error",
            text: response.message,
            type: "error",
            confirmButtonText: "Try Again",
            confirmButtonColor: "#A40020"
          });
        } else {
          this.auth.clearTable();
        }
      }, 
    );
  }
}
