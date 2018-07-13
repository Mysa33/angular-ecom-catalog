import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/_esm2015/observable'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ComOffService {

  constructor(private http:HttpClient) { }
  apiCom: string ="";
  
  getCommercialOffers (apiCom) {
    return this.http.get(this.apiCom);
  }

}
