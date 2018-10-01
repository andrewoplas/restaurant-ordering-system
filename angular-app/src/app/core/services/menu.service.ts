import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { MessageService } from "../services/message.service";
import { Observable } from "rxjs/Observable";
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs/observable/of";
import { Menu } from "../entity/Menu";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class MenuService {
  private baseUrl: string;
  public menu: Array<Menu>;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.baseUrl = "http://localhost:8080";
  }

  get menuList(): Array<Menu> {
    return this.menu;
  }

  /** GET: retrieve menu from the server */
  public getOrders(): Observable<Menu[]> {
    return this.http
      .get<Menu[]>(`${this.baseUrl}/get-all-menu`, httpOptions)
      .pipe(
        tap(() => this.log("get-all-menu")),
        catchError(this.handleError("get-all-menu", []))
      );
  }

  /** POST: add a new menu to the server */
  public addMenu(menu: Menu): Observable<any> {
    return this.http
      .put<Menu>(`${this.baseUrl}/add-menu`, menu, httpOptions)
      .pipe(
        tap(_ => this.log(`add menu with id=${menu.id}`)),
        catchError(this.handleError<Menu>("add-menu"))
      );
  }

  /** DELETE: delete the menu from the server */
  public deleteMenu(menu: string | number): Observable<any> {
    return this.http
      .delete<Menu>(`${this.baseUrl}/delete-menu/${menu}`)
      .pipe(
        tap(_ => this.log(`deleted menu id=${menu}`)),
        catchError(this.handleError("delete-menu", menu))
      );
  }

  /** PUT: update the menu on the server */
  public updateHero(menu: Menu): Observable<any> {
    return this.http
      .put(`${this.baseUrl}/update-menu`, menu, httpOptions)
      .pipe(
        tap(_ => this.log(`updated menu id=${menu.id}`)),
        catchError(this.handleError<any>("update-menu"))
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

  load(): Promise<Menu[]> {
    this.menu = new Array<Menu>();
    return this.http
      .get<Menu[]>(`${this.baseUrl}/get-all-menu`, httpOptions)
      .toPromise()
      .then((data: any) => (this.menu = data))
      .catch((err: any) => Promise.resolve());
  }

  /** Log a MenuService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MenuService: ${message}`);
  }
}
