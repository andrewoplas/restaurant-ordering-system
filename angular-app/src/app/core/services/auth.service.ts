import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { User } from "../../models/User";


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
  private user: User;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.baseUrl = "http://localhost:8080";
  } 

   /** POST: Retrieve user */
  login(user: LoginUser): Observable<any> {
    return this.http
      .put<LoginUser>(`${this.baseUrl}/login`, user, httpOptions)
      .pipe(
        tap(_ => this.log(`login user with username=${user.username}`)),
        catchError(this.handleError<LoginUser>("login"))
      );
  }

  setLoggedInUser(user: User) {
    this.user = user;
  }

  isAdmin() {
    return this.user.isAdmin;
  }

  isloggedIn() {
    return this.user != null;
  }

  // handleAuth() {
  //   // When Auth0 hash parsed, get profile
  //   this._auth0.parseHash(window.location.href, (err, authResult) => {
  //     ...
  //     } else if (err) {
  //       this._clearRedirect();
  //       this.router.navigate(['/']);
  //       console.error(`Error authenticating: ${err.error}`);
  //     }
  //   });
  // }

  // private _getProfile(authResult) {
  //   ...
  //     if (profile) {
  //       ...
  //       this._redirect();
  //     } else if (err) {
  //     ...
  //   });
  // }

  // ...

  // private _redirect() {
  //   const redirect = decodeURI(localStorage.getItem('authRedirect'));
  //   const navArr = [redirect || '/'];

  //   this.router.navigate(navArr);
  //   // Redirection completed; clear redirect from storage
  //   this._clearRedirect();
  // }

  // private _clearRedirect() {
  //   // Remove redirect from localStorage
  //   localStorage.removeItem('authRedirect');
  // }

  // logout() {
  //   // Remove data from localStorage
  //   ...
  //   this._clearRedirect();
  //   ...
  // }

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
