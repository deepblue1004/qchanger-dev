import { Promotion } from './../models/Promotion';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseCRUD } from './_BaseCRUD';

@Injectable({
  providedIn: 'root'
})
export class PromotionService extends BaseCRUD{
  private _docRef: string = 'promotions';

  constructor(private firestore: AngularFirestore) {
    super(firestore);
  }

  listAll() {
    return super.listAll(this._docRef);
  }

  create(promotion: Promotion) {
    return super.create(promotion, this._docRef);
  }

  update(promotion: Promotion) {
    super.update(promotion, this._docRef);
  }

  hardDelete(id: string) {
    super.hardDelete(id, this._docRef);
  }
}
