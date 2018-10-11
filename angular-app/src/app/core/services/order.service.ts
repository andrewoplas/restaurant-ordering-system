import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '@services/message.service';
import { ErrorHandlerService } from '@services/error-handler.service';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { Order, Status, MenuItemQuantity } from '@models/Order';
import 'rxjs/add/observable/throw';
import { Globals } from '@models/Globals';
import { MenuItem } from '@models/MenuItem';

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
  public order: Order;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private errHandler:ErrorHandlerService,
    private Global: Globals
  ) {
    this.baseUrl = this.Global.BASE_URL;
  }

  get orderList(): Array<Order> {
    return this.orders;
  }

  public addToCart(item: MenuItem, quantity: number) {
    let items: Array<MenuItemQuantity> = this.getOrder();
    
    let i: number;
    let exists: boolean = false;
    for(i = 0; i<items.length; i++) {
      if(items[i].item.id == item.id) {
        items[i].quantity += quantity;
        exists = true;
        break;
      }
    }

    if(!exists) {
      items.push({
        id: item.id,
        item: item,
        price: item.salePrice > 0? item.salePrice : item.price,
        onSale: item.salePrice > 0? true : false,
        quantity: quantity
      });
    }

    sessionStorage.setItem("order", JSON.stringify(items));
  }

  public removeToCart(item: MenuItemQuantity, items: Array<MenuItemQuantity>) {
    items = items.filter(obj => obj.id !== item.id);
    
    sessionStorage.setItem("order", JSON.stringify(items));
  }

  public increaseQuantity(item: MenuItemQuantity,  quantity: number, items: Array<MenuItemQuantity>) {
    let i: number;
    for(i = 0; i<items.length; i++) {
      if(items[i].item.id == item.id) {
        items[i].quantity += quantity;
      }
    }

    sessionStorage.setItem("order", JSON.stringify(items));
  }

  public decreaseQuantity(item: MenuItemQuantity, quantity: number, items: Array<MenuItemQuantity>) {
    let i: number;
    for(i = 0; i<items.length; i++) {
      if(items[i].item.id == item.id) {
        items[i].quantity -= quantity;
      }
    }

    sessionStorage.setItem("order", JSON.stringify(items));
  }

  public getOrder() {
    let items: Array<MenuItemQuantity>;

    if (sessionStorage.getItem("order") !== null) {
      items = JSON.parse(sessionStorage.getItem("order"));
    } else {
      items = [];
    }

    return items;
  }

  public clearOrder() {
    sessionStorage.removeItem("order");
    sessionStorage.removeItem("countdown_timer");
    sessionStorage.removeItem("countdown");
  }

  public startCountdown() {
    let now = new Date();
    now.setMinutes(now.getMinutes() + 3);
    
    sessionStorage.setItem("countdown_timer", now.getTime().toString());
    sessionStorage.setItem("countdown", "true");  
  }

  public hasStartCountdown(){
    return sessionStorage.getItem("countdown") !== null && sessionStorage.getItem("countdown") == "true";
  }

  public countDownTimer() {
    return new Date(parseInt(sessionStorage.getItem("countdown_timer")));
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
  public addOrder(order: Order): Observable<any> {
    return this.http
      .post<Order>(`${this.baseUrl}/add-order`, order, httpOptions)
      .pipe(
        tap(_ => this.log(`add order with id=${order.id}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** DELETE: delete the order from the server */
  public deleteOrder(order: string | number): Observable<any> {
    return this.http
      .delete<Order>(`${this.baseUrl}/delete-order/${order}`)
      .pipe(
        tap(_ => this.log(`deleted order id=${order}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** PUT: update the order on the server */
  public updateOrder(order: Order): Observable<any> {
    return this.http
      .put(`${this.baseUrl}/update-order`, order, httpOptions)
      .pipe(
        tap(_ => this.log(`updated order id=${order.id}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** POST: cancel an order to the server */
  public cancelOrder(order: string | number): Observable<any> {
    return this.http
      .post<Order>(`${this.baseUrl}/cancel-order`, order, httpOptions)
      .pipe(
        tap(_ => this.log(`cancel order with id=${order}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** Log a OrderService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`OrderService: ${message}`);
  }
}
