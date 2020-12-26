import { BaseCRUD } from './_BaseCRUD';
import { PromotionType } from './../models/PromotionType';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PromotionTypeService extends BaseCRUD {
  private _docRef: string = 'promotionTypes';

  constructor(private firestore: AngularFirestore) {
    super(firestore);
  }

  listAll() {
    return super.listAll(this._docRef);
  }

  create(promotionType: PromotionType) {
    return super.create(promotionType, this._docRef);
  }

  update(promotionType: PromotionType) {
    super.update(promotionType, this._docRef);
  }

  hardDelete(id: string) {
    super.hardDelete(id, this._docRef);
  }
}
