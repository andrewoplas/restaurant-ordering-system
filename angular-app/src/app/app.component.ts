import { Component } from '@angular/core';
import { HTTPStatus } from './core/interceptor/loading-http-interceptor';
import swal from 'sweetalert2';
import "animate.css";
import * as $ from "jquery";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  HTTPActivity: boolean;

  constructor(private httpStatus: HTTPStatus) {
    this.httpStatus.getHttpStatus()
      .subscribe(
        (hasRequested: boolean) => {
          if(hasRequested) {            
            swal({
              text: 'Loading',
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
}
