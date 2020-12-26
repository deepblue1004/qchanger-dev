import { Promotion } from './../models/Promotion';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private firestore: AngularFirestore) { }

  listAllPromotions() {
    return this.firestore.collection('promotions').snapshotChanges();
  }

  createPromotion(promotion: Promotion) {
    return this.firestore.collection('promotions').add(promotion);
  }

  updatePromotion(promotion: Promotion) {
    this.firestore.doc('promotions/' + promotion.id).update(Promotion);
  }
}
