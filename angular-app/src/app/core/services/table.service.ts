import { Injectable } from '@angular/core';
import { Table } from '@models/Table';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from '@services/message.service';
import { ErrorHandlerService } from '@services/error-handler.service';
import { Globals } from '@models/Globals';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: "root"
})
export class TableService {

  private baseUrl: string;
  public tables: Array<Table>;
  public table: Table;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private errHandler:ErrorHandlerService,
    private Global: Globals
  ) {
    this.baseUrl = this.Global.BASE_URL;
  }

  get tableList(): Array<Table> {
    return this.tables;
  }

  /** GET: retrieve Tables from the server */
  public getTables(): Observable<Table[]> {
    return this.http
      .get<Table[]>(`${this.baseUrl}/get-all-tables`, httpOptions)
      .pipe(
        tap(() => this.log("get-all-tables")),
        catchError(this.errHandler.handleError)
      );
  }

  /** POST: add a new Table to the server */
  public addTable(table: Table): Observable<any> {
    return this.http
      .post<Table>(`${this.baseUrl}/table`, table, httpOptions)
      .pipe(
        tap(_ => this.log(`add table with id=${table.id}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** DELETE: delete the Table from the server */
  public deleteTable(table: string | number): Observable<any> {
    return this.http
      .delete<Table>(`${this.baseUrl}/delete-table/${table}`)
      .pipe(
        tap(_ => this.log(`deleted table id=${table}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** PUT: update the Table on the server */
  public updateTable(table: Table): Observable<any> {
    return this.http
      .put(`${this.baseUrl}/update-table`, table, httpOptions)
      .pipe(
        tap(_ => this.log(`updated table id=${table.id}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** Log a TableService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`TableService: ${message}`);
  }
}
