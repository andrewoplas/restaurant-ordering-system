import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { MessageService } from "@services/message.service";
import { Observable } from "rxjs/Observable";
import { catchError, tap } from "rxjs/operators";
import { Menu } from "@models/Menu";
import { ErrorHandlerService } from "@services/error-handler.service";

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
    private messageService: MessageService,
    private errHandler: ErrorHandlerService
  ) {
    this.baseUrl = "http://localhost:8080";
  }

  get menuList(): Array<Menu> {
    return this.menu;
  }

  /** GET: retrieve menu from the server */
  public getMenus(): Observable<Menu[]> {
    return this.http
      .get<Menu[]>(`${this.baseUrl}/get-all-menus`, httpOptions)
      .pipe(
        tap(() => this.log("get-all-menus")),
        catchError(this.errHandler.handleError)
      );
  }

  /** GET: retrieve single menu from the server */
  public getMenu(id: number): Observable<Menu> {
    return this.http
      .get<Menu>(`${this.baseUrl}/get-menu/${id}`, httpOptions)
      .pipe(
        tap(() => this.log("get-menu")),
        catchError(this.errHandler.handleError)
      );
  }

  /** POST: add a new menu to the server */
  public addMenu(menu: Menu): Observable<any> {
    return this.http
      .post<Menu>(`${this.baseUrl}/add-menu`, menu, httpOptions)
      .pipe(
        tap(_ => this.log(`add menu with id=${menu.id}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** DELETE: delete the menu from the server */
  public deleteMenu(menu: string | number): Observable<any> {
    return this.http
      .delete<Menu>(`${this.baseUrl}/delete-menu/${menu}`)
      .pipe(
        tap(_ => this.log(`deleted menu id=${menu}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** PUT: update the menu on the server */
  public updateMenu(menu: Menu): Observable<any> {
    return this.http
      .put(`${this.baseUrl}/update-menu`, menu, httpOptions)
      .pipe(
        tap(_ => this.log(`updated menu id=${menu.id}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** Log a MenuService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`MenuService: ${message}`);
  }
}
