import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class ProxyService {

  private httpOptions: any;

  constructor(private http:HttpClient, private _cookieService:CookieService) {
    // CSRF token is needed to make API calls work when logged in
    let csrf = this._cookieService.get("csrftoken");
    // the Angular HttpHeaders class throws an exception if any of the values are undefined
    if (typeof(csrf) === 'undefined') {
      csrf = '';
    }
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': csrf })
    };
}

  public getByName(name, url) {
    return this.http.get(url + name)
            .pipe(
              retry(5),
              catchError(this.handleError));
  }

  public getAll(url) {
    return this.http.get(url)
            .pipe(
              retry(5),
              catchError(this.handleError));
  }

  public postElement(url, object) {
    return this.http.post(url, JSON.stringify(object),this.httpOptions)
            .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}


