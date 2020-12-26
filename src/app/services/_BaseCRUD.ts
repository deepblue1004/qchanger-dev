import { BaseDatabaseModel } from './../models/_BaseDatabaseModel';
import { AngularFirestore } from "@angular/fire/firestore";

export class BaseCRUD {

  private _firestore: AngularFirestore;
  constructor(firestore: AngularFirestore) {
    this._firestore = firestore;
  }

  create(obj: BaseDatabaseModel, docRef: string) {
    return this._firestore.collection(docRef).add(obj);
  }

  listAll(docRef: string) {
    return this._firestore.collection(docRef).snapshotChanges();
  }

  update(obj: BaseDatabaseModel, docRef: string) {
    this._firestore.doc(docRef + obj.id).update(obj);
  }

  hardDelete(id: string, docRef: string) {
    this._firestore.doc(`${docRef}/${id}`).delete();
  }
}
