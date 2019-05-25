import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
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
    return this.http.post(url, JSON.stringify(object))
    .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse) {
    // return an observable with a user-facing error message
    return throwError(error);
  }

}


