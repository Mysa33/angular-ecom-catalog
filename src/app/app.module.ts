import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {URLSearchParams} from '@angular/http';
import { Pipe, PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {ApiService} from './shared/services/api.service';
import {ComOffService} from './shared/services/com-off.service';
import { HeaderComponent } from './header/header.component';
import { FilterdataPipe } from './shared/filterdata.pipe';
import { BestdealComponent } from './header/bestdeal/bestdeal.component';
import { ModalBodyComponent } from './modal/modal-body/modal-body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterdataPipe,
    BestdealComponent,
    ModalBodyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService,ComOffService],
  bootstrap: [AppComponent]
})
export class AppModule { }
