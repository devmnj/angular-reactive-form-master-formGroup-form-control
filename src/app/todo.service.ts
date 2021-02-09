import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Todo } from './todo';
import {catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  _url = 'http://localhost:3004/todo';
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }
  todoPost(todo: Todo): any {
    return this._http.post<any>(this._url, todo).pipe(catchError(this.ErrorHandler));
  }
  ErrorHandler(error: HttpErrorResponse): any {
    return throwError(error);
  }
}
