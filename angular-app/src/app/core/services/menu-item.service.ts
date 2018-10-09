import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { MessageService } from "@services/message.service";
import { Observable } from "rxjs/Observable";
import { catchError, tap } from "rxjs/operators";
import { MenuItem } from '@models/MenuItem';
import { ErrorHandlerService } from "@services/error-handler.service";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class MenuItemService {
  private baseUrl: string;
  public menuItem: Array<MenuItem>;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private errHandler: ErrorHandlerService
  ) {
    this.baseUrl = "http://localhost:8080";
  }

  get menuItemList(): Array<MenuItem> {
    return this.menuItem;
  }

  /** GET: retrieve menuItem from the server */
  public getAllMenuItems(): Observable<MenuItem[]> {
    return this.http
      .get<MenuItem[]>(`${this.baseUrl}/get-all-items`, httpOptions)
      .pipe(
        tap(() => this.log("get-all-items")),
        catchError(this.errHandler.handleError)
      );
  }

  /** POST: add a new menu to the server */
  public addMenuItem(menuItem: MenuItem): Observable<any> {
    return this.http
      .post<MenuItem>(`${this.baseUrl}/add-item`, menuItem, httpOptions)
      .pipe(
        tap(_ => this.log(`add item with id=${menuItem.id}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** DELETE: delete the menu from the server */
  public deleteMenuItem(menuItem: string | number): Observable<any> {
    return this.http
      .delete<MenuItem>(`${this.baseUrl}/delete-item/${menuItem}`)
      .pipe(
        tap(_ => this.log(`deleted item id=${menuItem}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** PUT: update the menu on the server */
  public updateMenuItem(menuItem: MenuItem): Observable<any> {
    return this.http
      .put(`${this.baseUrl}/update-item`, menuItem, httpOptions)
      .pipe(
        tap(_ => this.log(`updated item id=${menuItem.id}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** Log a MenuItemService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MenuItemService: ${message}`);
  }
}