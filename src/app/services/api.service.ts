import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'

//-- prod urls
export const apiUrl   = "https://api.anibook.app/";
export const mediaUrl = "https://api.anibook.app";

//-- dev urls
//export const apiUrl   = "http://localhost:8000/";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }


  getData(cp): Observable<any> {
    const httpOptions = {    
      headers: new HttpHeaders({'enctype': 'multipart/form-data;','Content-Type': 'application/json', 'Authorization':'Token ' + localStorage.getItem("token")})
  }
    return this.http.get(apiUrl + cp, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  postData(cp, cpin = {}): Observable<any> {
    const httpOptions = {    
      headers: new HttpHeaders({'enctype': 'multipart/form-data;', 'Content-Type': 'application/json', 'Authorization':'Token ' + localStorage.getItem("token")})
  }
    return this.http.post(apiUrl + cp, cpin, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }

  putData(cp, cpin = {}): Observable<any> {
    const httpOptions = {    
      headers: new HttpHeaders({'enctype': 'multipart/form-data;', 'Authorization':'Token ' + localStorage.getItem("token")})
  }
    return this.http.put(apiUrl + cp, cpin, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));

  }


}
