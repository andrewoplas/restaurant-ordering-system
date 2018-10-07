import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { MessageService } from '@services/message.service';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { User, Role } from "@models/User";


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string;

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private router: Router
  ) {
    this.baseUrl = "http://localhost:8080";
  } 

   /** POST: Retrieve user */
  login(user: LoginUser): Observable<any> {
    return this.http
      .post<LoginUser>(`${this.baseUrl}/login`, user, httpOptions)
      .pipe(
        tap(_ => this.log(`login user with username=${user.username}`)),
        catchError(this.handleError<LoginUser>("login"))
      );
  }

  successLogin(user: User) {
    localStorage.setItem('user_credentials', JSON.stringify(user));
    this.router.navigate(['admin']);   
  }

  isAdmin() {
    let user: User = this.getUser();
    return user != null && user.role == Role.ADMIN;
  }

  isloggedIn() {
    return localStorage.getItem("user_credentials");
  }

  logout() {
    localStorage.removeItem('user_credentials');
    this.router.navigate(['/']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user_credentials'));
  }


  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  /** Log a OrderService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`OrderService: ${message}`);
  }
}
