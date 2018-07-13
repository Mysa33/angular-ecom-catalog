import { Component, Input } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';

import {CartCommon} from '../shared/cart-common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends CartCommon{
  
  @Input()  booksCartArray: any;
  @Input()  booksCartLengthChild: number;

  constructor(private http:HttpClient) {
    super();
    
  }

  // Calc total
  calcPrice():void{
    if(!this.booksCartLengthChild){
      this.totalCart = 0;
    }else{
      const add = (a:number, b:number) => a + b;
      let booksArray:Array<any> = this.booksCartArray.sort();
      let itemPriceArray:Array<any> = [];
      for (let _k in booksArray){
        itemPriceArray.push(Number(booksArray[_k].price));
      }
      this.totalCart = itemPriceArray.reduce(add);
      //getBestdeal
      this.getBestdealData();
    }  
  }
  //getBestdeal
  getBestdealData(){
    //Get ISBNs from array
    let isbnArray:Array<any> = this.booksCartArray.map(data => data.isbn).sort()
    .filter(function(elem, index, self) {
      return index === self.indexOf(elem);
    });
    let doSetbestdealUrl:any = ()=>{
      for(let _o in isbnArray){
        this.commercialOffersUrl += isbnArray[_o] + "," ;
      }
      this.commercialOffersUrl = "http://henri-potier.xebia.fr/books/"+this.commercialOffersUrl+"/commercialOffers";
      return this.commercialOffersUrl;
    };
    doSetbestdealUrl();
    //Get data
    this.doGetCommercialOffers();
  }
  // doGetCommercialOffers //Todo : use service
  doGetCommercialOffers():any{
    if(this.booksCartLengthChild == 0){
      return
    }else{
      this.http.get(this.commercialOffersUrl).subscribe(
        data => { 
          this.dataOffers = data;
          this.dataOffers = this.dataOffers.offers; 
          return this.dataOffers;
        },
        err => {
          console.error("Erro : ",err);
          throw err;
        },
        () => console.log('done loading offers')
      );
    }
    
  }  
    
}

