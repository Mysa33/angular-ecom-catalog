import { Component, Input, Output } from '@angular/core';

import {HeaderComponent} from '../header/header.component';

export class CartCommon {
    
  //Cart
  isVisible:boolean = false;
  totalCart :number = 0;
  commercialOffersUrl:string ="";
  dataOffers;
  minus:number;
  percent:number;
  slice:number;
  sliceValue:number;
  priceMinus:number;
  priceSlice:number;
  pricePercent:number;
  //bestdeal widget
  bestdealVisibility:boolean = false;
  priceBestdeal:number = 0;
  offerSliceTxt:string;
  offerPercentTxt:string;
  offerMinusTxt:string;
  bestDealPercentTxt: string;
  bestDealMinusTxt: string;
  bestDealSliceTxt: string;
  bestDealPriceTxt: string;
  percentVis:boolean = false;
  minusVis:boolean = false;
  sliceVis:boolean = false;
  offersVisObj;

  constructor(){}

  // cartToggle
  cartToggle():void{
    if(this.totalCart !== 0){
      this.isVisible = !this.isVisible;
    }else{
      this.isVisible = this.isVisible;
    }
  }
  //calcBestdeal 
  calcBestdeal(
    totalCart,
    sliceValue,
    priceMinus,
    priceSlice,
    pricePercent,
    priceBestdeal,
    dataOffers,
    minus,
    percent,
    slice,
    offerSliceTxt,
    offerPercentTxt,
    offerMinusTxt,
    percentVis,
    minusVis,
    sliceVis,
    offersVisArray 
    ):void{
    percent = !this.dataOffers[0] ?  0: this.dataOffers[0].value;
    minus =  !this.dataOffers[1] ? 0 : this.dataOffers[1].value;
    slice = !this.dataOffers[2] ? 0 : this.dataOffers[2].value;
    sliceValue = !this.dataOffers[0] ? 0 : this.dataOffers[0].sliceValue;
    //pricePercent
    pricePercent = Math.floor(this.totalCart - ((this.totalCart/100)*percent));  
    //priceMinus
    priceMinus = pricePercent - minus;
    //priceBestdeal
    if(priceMinus<sliceValue){
      this.priceBestdeal = priceMinus;
    }else{
      this.priceBestdeal = priceMinus - slice;
    }
    //Set besdeal txt  
    this.offerPercentTxt = "Remise de : " + percent + " % ";
    this.offerMinusTxt = "Réduction immédiate en caisse d'un montant de " + minus + " Euro";
    this.offerSliceTxt = "Réduction d'un montant de "+ slice + " Euro";
    //Set visbility //Todo : finir
    this.percentVis = !this.dataOffers[0] ?  false : true;
    this.minusVis =  !this.dataOffers[1] ? false : true;
    this.sliceVis = !this.dataOffers[2] ? false : true;
    this.offersVisObj = {
      "percentVis" : this.percentVis,
      "minusVis" : this.percentVis,
      "sliceVis" : this.sliceVis,
    };
  }
  // Cart bestdealToggle //Todo : bestdeal component
  bestdealToggle():void{
    if(this.totalCart !== 0){
      this.bestdealVisibility = !this.bestdealVisibility;
    }else{
      this.bestdealVisibility = this.bestdealVisibility;
    }
  }
  //Clear Cart // Todo : corriger anomalie
  clearCart(totalCart):number{
    this.cartToggle();
    this.bestdealToggle();
    location.reload();
    return this.totalCart = 0;
  }
}