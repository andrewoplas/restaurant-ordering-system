import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Order } from '../entity/Order';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  private baseUrl: string;
  private orders: Array<Order>;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:8080";
  }

  get orderList(): Array<Order> {
    return this.orders;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  load(): Promise<Order[]> {
    this.orders = new Array<Order>();

    return this.http.get<Order[]>(`${this.baseUrl}/get-all-orders`, httpOptions)
      .toPromise()
      .then((data: any) => this.orders = data)
      .catch((err: any) => Promise.resolve());
  }
}
