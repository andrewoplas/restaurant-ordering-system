import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '@services/message.service';
import { ErrorHandlerService } from '@services/error-handler.service';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Order } from '@models/Order';
import 'rxjs/add/observable/throw';


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class OrderService {
  private baseUrl: string;
  public orders: Array<Order>;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private errHandler:ErrorHandlerService
  ) {
    this.baseUrl = "http://localhost:8080";
  }

  get orderList(): Array<Order> {
    return this.orders;
  }

  /** GET: retrieve orders from the server */
  public getOrders(): Observable<Order[]> {
    return this.http
      .get<Order[]>(`${this.baseUrl}/get-all-orders`, httpOptions)
      .pipe(
        tap(() => this.log("get-all-orders")),
        catchError(this.errHandler.handleError)
      );
  }

  /** POST: add a new order to the server */
  addOrder(order: Order): Observable<any> {
    return this.http
      .post<Order>(`${this.baseUrl}/add-order`, order, httpOptions)
      .pipe(
        tap(_ => this.log(`add order with id=${order.id}`)),
        catchError(this.handleError<Order>("add-order"))
      );
  }

  /** DELETE: delete the order from the server */
  public deleteOrder(order: string | number): Observable<any> {
    return this.http
      .delete<Order>(`${this.baseUrl}/delete-order/${order}`)
      .pipe(
        tap(_ => this.log(`deleted order id=${order}`)),
        catchError(this.handleError("delete-order", order))
      );
  }

  /** PUT: update the order on the server */
  updateOrder(order: Order): Observable<any> {
    return this.http
      .put(`${this.baseUrl}/update-order`, order, httpOptions)
      .pipe(
        tap(_ => this.log(`updated order id=${order.id}`)),
        catchError(this.handleError<any>("update-order"))
      );
  }

  /* Helper Methods */
  private errorHandler(error: HttpErrorResponse) {
    console.log(error);
    return Observable.throw(error);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  load(): Promise<Order[]> {
    this.orders = new Array<Order>();
    return this.http
      .get<Order[]>(`${this.baseUrl}/get-all-orders`, httpOptions)
      .toPromise()
      .then((data: any) => (this.orders = data))
      .catch((err: any) => Promise.resolve());
  }

  /** Log a OrderService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`OrderService: ${message}`);
  }
}
