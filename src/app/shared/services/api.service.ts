import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/_esm2015/observable'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
  apiRoot: string = "http://henri-potier.xebia.fr/books";
  constructor(private http:HttpClient) {} 
  //Get Books
  getBooks() {
    return this.http.get(this.apiRoot);
  }
}