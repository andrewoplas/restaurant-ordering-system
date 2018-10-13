import { Component } from '@angular/core';
import { HTTPStatus } from './core/interceptor/interceptor';
import swal from 'sweetalert2';
import "animate.css";
import * as $ from "jquery";
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  HTTPActivity: boolean;

  constructor(private httpStatus: HTTPStatus) {
    this.interceptLoading();
    this.interceptError();
  }

  public interceptLoading() {
    this.httpStatus.getHttpStatus()
      .subscribe(
        (hasRequested: boolean) => {
          if(hasRequested) {            
            swal({
              title: 'Loading',
              animation: false,
              customClass: 'animated fadeIn faster loadingSwal',
              allowOutsideClick: false,
              allowEscapeKey: false,
            })
            swal.showLoading();
          } else {
            if ($('.loadingSwal').length) {
              $('body').removeClass('swal2-shown');
            }

            $('.loadingSwal').parents('.swal2-container').remove();
          }
        }
      );
  }

  public interceptError() {
    this.httpStatus.getError()
      .subscribe(
        (response) => {
          if(response != null) {            
            swal({
              title: response.title,
              text: response.message,
              type: "error",
              confirmButtonText: "Got it!",
              confirmButtonColor: "#A40020",
            });
          }
        }
      );
  }
}
