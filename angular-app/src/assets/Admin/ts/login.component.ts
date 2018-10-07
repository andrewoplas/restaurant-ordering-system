import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from '@services/auth.service';
import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: '../html/login.component.html',
  styleUrls: ['../scss/login.component.scss']
})
export class LoginComponent implements OnInit {
  isError = false;

  forms = this.fb.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });
  
  constructor(
    private auth: AuthService, 
    private fb: FormBuilder) 
  { }

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
      password: this.forms.value.password,
    };

    $('.showbox').css('visibility', 'visible');
    $('.login-text').css('color', '#FBA62F');
    this.auth.successLogin(null);
    // this.auth.login(user).subscribe(
    //   response => {
    //     if(response != null) {
    //       this.auth.successLogin(response);
    //     } else {
    //       eval(
    //         'swal({' +
    //         'title: "Error",' +
    //         'text: "Invalid Username or Password!",' +
    //         'type: "error",' +
    //         'confirmButtonText: "Try Again",' +
    //         'confirmButtonColor: "#A40020"' +
    //         '});'
    //       );

    //       $('.showbox').css('visibility', 'hidden');
    //       $('.login-text').css('color', '#FFF');
    //     }
    // });
  }

}
