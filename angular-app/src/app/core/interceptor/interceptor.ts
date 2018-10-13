import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { catchError, finalize, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import { ErrorHandlerService } from '@services/error-handler.service';

@Injectable()
export class HTTPStatus {
  private requestInFlight$: BehaviorSubject<boolean>;
  private error$: BehaviorSubject<{title,message}>;

  constructor() {
    this.requestInFlight$ = new BehaviorSubject(false);
    this.error$ = new BehaviorSubject(null);
  }

  setHttpStatus(inFlight: boolean) {
    this.requestInFlight$.next(inFlight);
  }

  setError(error) {
    this.error$.next(error);
  }

  getHttpStatus(): Observable<boolean> {
    return this.requestInFlight$.asObservable();
  }

  getError(): Observable<{title,message}> {
    return this.error$.asObservable();
  }
}

@Injectable()
export class HTTPListener implements HttpInterceptor {
  constructor(
    private status: HTTPStatus,
    private errHandler: ErrorHandlerService
  ) {}
  
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.status.setHttpStatus(true);

    return next.handle(req).pipe(
      map(event => {
        return event;
      }),
      catchError(error => {
        this.status.setError(this.errHandler.handleErrorV2(error)) ;

        return Observable.throw(error);
      }),
      finalize(() => {
        this.status.setHttpStatus(false);
      })
    )
  }
}