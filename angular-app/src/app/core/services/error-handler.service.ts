import { Injectable } from '@angular/core';
import {ErrorHandler} from "@angular/core";
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import * as Status  from 'http-status-codes';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor() { }

  public handleError(error: HttpErrorResponse) { 
    let title = '';
    let message = '';

    if(!error.ok) {
      let status = error.status;

      switch(status) {
        case Status.ACCEPTED:
          title = "";
          message = "";
          break;

        case Status.BAD_GATEWAY:
          title = "";
          message = "";
          break;

        case Status.BAD_REQUEST:
          title = "";
          message = "";
          break;

        case Status.CONFLICT:
          title = "";
          message = "";
          break;

        case Status.CONTINUE:
          title = "";
          message = "";
          break;

        case Status.CREATED:
          title = "";
          message = "";
          break;

        case Status.EXPECTATION_FAILED:
          title = "";
          message = "";
          break;

        case Status.FAILED_DEPENDENCY:
          title = "";
          message = "";
          break;

        case Status.FORBIDDEN:
          title = "";
          message = "";
          break;

        case Status.GATEWAY_TIMEOUT:
          title = "";
          message = "";
          break;

        case Status.GONE:
          title = "";
          message = "";
          break;

        case Status.HTTP_VERSION_NOT_SUPPORTED:
          title = "";
          message = "";
          break;

        case Status.IM_A_TEAPOT:
          title = "";
          message = "";
          break;

        case Status.INSUFFICIENT_SPACE_ON_RESOURCE:
          title = "";
          message = "";
          break;

        case Status.INSUFFICIENT_STORAGE:
          title = "";
          message = "";
          break;

        case Status.INTERNAL_SERVER_ERROR:
          title = "";
          message = "";
          break;

        case Status.LENGTH_REQUIRED:
          title = "";
          message = "";
          break;

        case Status.LOCKED:
          title = "";
          message = "";
          break;

        case Status.METHOD_FAILURE:
          title = "";
          message = "";
          break;

        case Status.METHOD_NOT_ALLOWED:
          title = "";
          message = "";
          break;

        case Status.MOVED_PERMANENTLY:
          title = "";
          message = "";
          break;

        case Status.MOVED_TEMPORARILY:
          title = "";
          message = "";
          break;

        case Status.MULTI_STATUS:
          title = "";
          message = "";
          break;

        case Status.MULTIPLE_CHOICES:
          title = "";
          message = "";
          break;

        case Status.NETWORK_AUTHENTICATION_REQUIRED:
          title = "";
          message = "";
          break;

        case Status.NO_CONTENT:
          title = "";
          message = "";
          break;

        case Status.NON_AUTHORITATIVE_INFORMATION:
          title = "";
          message = "";
          break;

        case Status.NOT_ACCEPTABLE:
          title = "";
          message = "";
          break;

        case Status.NOT_FOUND:
          title = "";
          message = "";
          break;

        case Status.NOT_IMPLEMENTED:
          title = "";
          message = "";
          break;

        case Status.NOT_MODIFIED:
          title = "";
          message = "";
          break;

        case Status.OK:
          title = "";
          message = "";
          break;

        case Status.PARTIAL_CONTENT:
          title = "";
          message = "";
          break;

        case Status.PAYMENT_REQUIRED:
          title = "";
          message = "";
          break;

        case Status.PERMANENT_REDIRECT:
          title = "";
          message = "";
          break;

        case Status.PRECONDITION_FAILED:
          title = "";
          message = "";
          break;

        case Status.PRECONDITION_REQUIRED:
          title = "";
          message = "";
          break;

        case Status.PROCESSING:
          title = "";
          message = "";
          break;

        case Status.PROXY_AUTHENTICATION_REQUIRED:
          title = "";
          message = "";
          break;

        case Status.REQUEST_HEADER_FIELDS_TOO_LARGE:
          title = "";
          message = "";
          break;

        case Status.REQUEST_TIMEOUT:
          title = "";
          message = "";
          break;

        case Status.REQUEST_TOO_LONG:
          title = "";
          message = "";
          break;

        case Status.REQUEST_URI_TOO_LONG:
          title = "";
          message = "";
          break;

        case Status.REQUESTED_RANGE_NOT_SATISFIABLE:
          title = "";
          message = "";
          break;

        case Status.RESET_CONTENT:
          title = "";
          message = "";
          break;

        case Status.SEE_OTHER:
          title = "";
          message = "";
          break;

        case Status.SERVICE_UNAVAILABLE:
          title = "";
          message = "";
          break;

        case Status.SWITCHING_PROTOCOLS:
          title = "";
          message = "";
          break;

        case Status.TEMPORARY_REDIRECT:
          title = "";
          message = "";
          break;

        case Status.TOO_MANY_REQUESTS:
          title = "";
          message = "";
          break;

        case Status.UNAUTHORIZED:
          title = "";
          message = "";
          break;

        case Status.UNPROCESSABLE_ENTITY:
          title = "";
          message = "";
          break;

        case Status.UNSUPPORTED_MEDIA_TYPE:
          title = "";
          message = "";
          break;

        case Status.USE_PROXY:
          title = "";
          message = "";
          break;

        default: 
          title = "Error";
          message = "There might be a problem in the server. You may try again later.";
          break;
      }
    }
  
    return Observable.throw({
      title: title,
      message:message
    });
  }
}
