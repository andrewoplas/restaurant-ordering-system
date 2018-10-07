import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { MessageService } from '@services/message.service';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Feedback } from '@models/Feedback';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseUrl: string;
  public feedback: Array<Feedback>;

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {
    this.baseUrl = "http://ros-2018.appspot.com/";
  }

  get FeedbackList(): Array<Feedback> {
    return this.feedback;
  }

  /** GET: retrieve Feedbacks from the server */
  public getFeedbacks(): Observable<Feedback[]> {
    return this.http
      .get<Feedback[]>(`${this.baseUrl}/get-all-feedbacks`, httpOptions)
      .pipe(
        tap(() => this.log("get-all-Feedbacks")),
        catchError(this.handleError("get-all-Feedbacks", []))
      );
  }

  /** POST: add a new Feedback to the server */
  addFeedback(feedback: Feedback): Observable<any> {
    return this.http
      .post<Feedback>(`${this.baseUrl}/feedback`, feedback, httpOptions)
      .pipe(
        tap(_ => this.log(`add Feedback with id=${feedback.id}`)),
        catchError(this.handleError<Feedback>("add-Feedback"))
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

  load(): Promise<Feedback[]> {
    this.feedback = new Array<Feedback>();
    return this.http
      .get<Feedback[]>(`${this.baseUrl}/get-all-Feedbacks`, httpOptions)
      .toPromise()
      .then((data: any) => (this.feedback = data))
      .catch((err: any) => Promise.resolve());
  }

  /** Log a FeedbackService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FeedbackService: ${message}`);
  }
}
