import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BaseDatabaseModel } from 'app/models/_BaseDatabaseModel';

@Injectable({
  providedIn: 'root'
})
/*
*   @Param:
*   type T         => data model class inherit from BaseDatabaseModel class
*   obj: T         => instance of data model type T
*   docRef: string => document reference to firestore database, define in DocRef.enum.ts
*/

export class FirestoreService<T extends BaseDatabaseModel> {
  constructor(private firestore: AngularFirestore) {
  }

  create(obj: T, docRef: string) {
    return this.firestore.collection(docRef).add(obj);
  }

  listAll(docRef: string) {
    return this.firestore.collection<T>(docRef).snapshotChanges();
  }

  update(obj: T, docRef: string) {
    this.firestore.doc(docRef + obj.id).update(obj);
  }

  hardDelete(id: string, docRef: string) {
    this.firestore.doc(`${docRef}/${id}`).delete();
  }
}
