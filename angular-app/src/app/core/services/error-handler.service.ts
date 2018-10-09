import { Injectable } from '@angular/core';
import {ErrorHandler} from "@angular/core";
import { ToastsManager } from 'ng2-toastr';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(private toast: ToastsManager) { }

  public handleError(error: any) {
    console.log("ERROR SULOD");
    console.error(error);
    this.toast.success('You are awesome!', 'Success!');

    return Observable.throw(error);
  }
}
