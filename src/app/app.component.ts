import { Component, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterdataPipe } from './shared/filterdata.pipe';
import { ApiService } from './shared/services/api.service';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  
  public books;
  public booksCart = [];
  public booksCartLength :number = 0;
  public bookModalObj = [];
  public modalVisibility:boolean = false;
  
  constructor(private _bookService: ApiService) {
  }

  ngOnInit() {
    this.getBooksData();  
  }
  getBooksData(){
    this._bookService.getBooks().subscribe(
      data => { this.books = data},
      err => console.error(err),
      () => console.log('done loading books')
    );
  }
  addToCart(i){
    let bookToCart = {
       "isbn" : this.books[i].isbn,
       "title": this.books[i].title,
       "price": this.books[i].price,
       "cover": this.books[i].cover
    };
    this.booksCart.push(bookToCart);
    this.booksCartLength = this.booksCart.length;
  }
  openModal(i){
    let bookModal = {
      "isbn" : this.books[i].isbn,
       "title": this.books[i].title,
       "price": this.books[i].price,
       "cover": this.books[i].cover,
       "synopsis":this.books[i].synopsis[0]
    }
    this.bookModalObj.push(bookModal);
    this.modalVisibility = true;
    return this.bookModalObj;
  }
  closeModal(){
    this.bookModalObj = [];
    this.modalVisibility = false;
    return this.modalVisibility;
  }
  
}
