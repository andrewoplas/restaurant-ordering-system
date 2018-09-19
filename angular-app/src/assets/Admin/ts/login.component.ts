import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: '../html/login.component.html',
  styleUrls: ['../scss/login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    this.showPassword();
  }

  showPassword() {
    $(function () {
      $(".view-password").click(function() {
        let icon = $(this);
        let input = $('#password');

        if (icon.text() == 'visibility_off') {
          icon.text("visibility");
          input.attr('type', 'password');
        } else {
          icon.text("visibility_off");
          input.attr('type', 'text');
        }
      });
    });
  }

}
