import { Component, Input, OnInit } from '@angular/core';

import {CartCommon} from '../../shared/cart-common';
@Component({
  selector: 'app-bestdeal',
  templateUrl: './bestdeal.component.html',
  styleUrls: ['./bestdeal.component.scss']
})
export class BestdealComponent extends CartCommon {
  
  @Input()  bestDealPercentTxt: string;
  @Input()  bestDealMinusTxt: string;
  @Input()  bestDealSliceTxt: string;
  @Input()  bestDealPriceTxt: string;
  @Input()  offersVisArrayChild;

  constructor() {
    super();
  }
  
}
