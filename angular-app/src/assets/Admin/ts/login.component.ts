import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { FormBuilder, Validators, FormArray, FormGroupDirective } from "@angular/forms";
import { AuthService } from '../../../app/core/services/auth.service';
import { User } from '../../../app/models/User';

@Component({
  selector: 'app-login',
  templateUrl: '../html/login.component.html',
  styleUrls: ['../scss/login.component.scss']
})
export class LoginComponent implements OnInit {

  forms = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });
  
  constructor(private auth: AuthService, private fb: FormBuilder) { }

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

  login() {
    let user = {
      username: this.forms.value.username,
      password: this.forms.value.username,
    };

    this.auth.login(user).subscribe(
      response => {
        if(response != null) {
          this.auth.setLoggedInUser(response);
        }
    });
  }

}
