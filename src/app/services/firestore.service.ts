import { Injectable } from '@angular/core';
import firebase from 'firebase';
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
    if (obj.id == null) {
      obj.id = this.firestore.createId();
    }
    return this.firestore.collection(docRef).doc(obj.id).set({...obj});
  }

  listAll(docRef: string) {
    return this.firestore.collection<T>(docRef).snapshotChanges();
  }

  getById(id: string, docRef: string) {
    return this.firestore.collection<T>(docRef).doc(id).snapshotChanges();
  }

  update(obj: T, docRef: string) {
    this.firestore.doc(docRef + obj.id).update(obj);
  }

  hardDelete(id: string, docRef: string) {
    return this.firestore.doc(`${docRef}/${id}`).delete();
  }

  /*
    Query collection by filter.
    Optional Args: <orderBy>, <limit>

    Sample filter:
      let filter = {
        'userId': ['==', userId],
        'merchantId': ['==', userId]
      };
    Sample orderBy:
      let orderBy = {
        'userQueuePosition': 'desc',
        'createdAt': 'asc'
      }

    Query operators: https://firebase.google.com/docs/firestore/query-data/queries#query_operators
    Order and limit: https://firebase.google.com/docs/firestore/query-data/order-limit-data

    Note: need create index inside firebase console in order to use orderBy
  */
  filterBy(filter: any, docRef: string, orderBy: any = null, limit?: number) {
    return this.firestore.collection(docRef, ref => {
      let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
      Object.keys(filter).forEach(f => {
        const value = filter[f];
        query = query.where(f, value[0], value[1]);
      });

      if(orderBy) {
        Object.keys(orderBy).forEach(o => {
          const direction = orderBy[o];
          query = query.orderBy(o, direction);
        });
      }
      if (limit) {
        query = query.limit(limit);
      }

      return query;
    }).snapshotChanges();
  }
}
