import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Req } from './fetch-players/req-interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http
      .get<Req>('http://localhost:8080/', {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return of();
        })
      );
  }

  getDefs() {
    return this.http
      .get<Req>('http://localhost:8080/defender', {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return of();
        })
      );
  }

  getMids() {
    return this.http
      .get<Req>('http://localhost:8080/midfielder', {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return of();
        })
      );
  }

  getStrikers() {
    return this.http
      .get<Req>('http://localhost:8080/striker', {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return of();
        })
      );
  }
}
