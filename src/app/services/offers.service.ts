import { Injectable } from '@angular/core';
import { Offer } from '../interfaces/offer';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  private offers : Offer[] = []

  constructor() { }

  // il va retourner un tableau d'offfes
  getOffers(): Offer[]{
    return this.offers
  }


  createOffer(offer: Offer): Offer[]{
    this.offers.push(offer)
    return this.offers
  }


  editOffer(offer: Offer, index: number): Offer[]{
    // c'est l offer avec cette index quidoit etre mit a jour
    this.offers[index] = offer;
    return this.offers
  }


  deleteOffer(offerIndex:  number): Offer[]{
    // 1 en parametre pour supp 1 seul element
    this.offers.splice(offerIndex, 1);
    return this.offers
  }
}
