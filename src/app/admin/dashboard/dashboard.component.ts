import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Offer } from 'src/app/interfaces/offer';
import { OffersService } from 'src/app/services/offers.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  offerForm!: FormGroup;
  offers: Offer[] = [];



  constructor(
    // le paramettre qui va recupere le id avec la route
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private offerService : OffersService
  ) {
  }

    // s'execute au chargement du composant
  ngOnInit(): void {
    // recupere l id depui le url
    // console.log(this.activatedRoute.snapshot.paramMap.get('id'));

    // const carId = this.activatedRoute.snapshot.paramMap.get('id')
    // // <String> pour que il le compare meme si carId est un string
    // this.currentCar = this.cars.find(el =>el.id === +<string>carId);
    // console.log(this.currentCar)

    this.initOfferForm();
    this.offers = this.offerService.getOffers()
  }

  initOfferForm():void {
    this.offerForm = this.formBuilder.group({
      index: [0],
      title: ['',Validators.required],
      brand: ['',Validators.maxLength(100)],
      modele: ['',Validators.required],
      desc: ['',Validators.required],
      price: 0,

    })
  }

  onSubmitOfferForm(): void{
    // il ajoute un el au tableau
    // la valeur du index
    const offerIndex = this.offerForm.value.index;
    // la val du formulaire
    let offer = this.offerForm.value;
    // si c'est une creation ou pas
    if(offerIndex == null || offerIndex == undefined){
      delete offer.index;
      // offer en argument qui est la nouvelle offre
      this.offers = this.offerService.createOffer(offer)
    }else {
      delete offer.index;
      this.offers = this.offerService.editOffer(offer, offerIndex)
    }

    this.offerForm.reset();
    console.log(this.offers)

  }

  onEditOffer(offer: Offer, index :number):void {
    this.offerForm.setValue({...offer, index})
  }

  onDeleteOffer(index: number){
    this.offers = this.offerService.deleteOffer(index)
  }

}
