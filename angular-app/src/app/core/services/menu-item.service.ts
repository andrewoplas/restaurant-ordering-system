
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { MessageService } from "@services/message.service";
import { Observable } from "rxjs/Observable";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { MenuItem } from '@models/MenuItem';

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
    private messageService: MessageService
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
        catchError(this.handleError("get-all-items", []))
      );
  }

  /** POST: add a new menu to the server */
  addMenuItem(menuItem: MenuItem): Observable<any> {
    return this.http
      .post<MenuItem>(`${this.baseUrl}/add-item`, menuItem, httpOptions)
      .pipe(
        tap(_ => this.log(`add item with id=${menuItem.id}`)),
        catchError(this.handleError<MenuItem>("add-item"))
      );
  }

  /** DELETE: delete the menu from the server */
  public deleteMenuItem(menuItem: string | number): Observable<any> {
    return this.http
      .delete<MenuItem>(`${this.baseUrl}/delete-item/${menuItem}`)
      .pipe(
        tap(_ => this.log(`deleted item id=${menuItem}`)),
        catchError(this.handleError("delete-item", menuItem))
      );
  }

  /** PUT: update the menu on the server */
  updateMenuItem(menuItem: MenuItem): Observable<any> {
    return this.http
      .put(`${this.baseUrl}/update-item`, menuItem, httpOptions)
      .pipe(
        tap(_ => this.log(`updated item id=${menuItem.id}`)),
        catchError(this.handleError<any>("update-item"))
      );
  }

  /* Helper Methods */

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  load(): Promise<MenuItem[]> {
    this.menuItem = new Array<MenuItem>();
    return this.http
      .get<MenuItem[]>(`${this.baseUrl}/get-all-items`, httpOptions)
      .toPromise()
      .then((data: any) => (this.menuItem = data))
      .catch((err: any) => Promise.resolve());
  }

  /** Log a MenuItemService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MenuItemService: ${message}`);
  }
}