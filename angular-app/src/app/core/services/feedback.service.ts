import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { MessageService } from '@services/message.service';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';
import { Feedback } from '@models/Feedback';
import { ErrorHandlerService } from '@services/error-handler.service';
import { Globals } from '@models/Globals';

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
    private messageService: MessageService,
    private errHandler: ErrorHandlerService,
    private Global: Globals
  ) {
    this.baseUrl = this.Global.BASE_URL;
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
        catchError(this.errHandler.handleError)
      );
  }

  /** POST: add a new Feedback to the server */
  public addFeedback(feedback: Feedback): Observable<any> {
    return this.http
      .post<Feedback>(`${this.baseUrl}/feedback`, feedback, httpOptions)
      .pipe(
        tap(_ => this.log(`add Feedback with id=${feedback.id}`)),
        catchError(this.errHandler.handleError)
      );
  }

  /** Log a FeedbackService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`FeedbackService: ${message}`);
  }
}
