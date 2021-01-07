import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { DocRef } from './../shared/enum/DocRef.enum';
import { QueueItem } from '../models/queueItem';
import { FirestoreService } from './firestore.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(
    private queueItemService: FirestoreService<QueueItem>
  ) { }

  // Add user to queue in a merchant, return a promise
  addToQueue(userId: string, merchantId: string) {
    return this.generateQueueNo(merchantId).then(queueNo => {
      let queueItem = new QueueItem({
        id: null,
        userId: userId,
        merchantId: merchantId,
        userQueuePosition: queueNo,
      } as QueueItem);
      return this.queueItemService.create(queueItem, DocRef.QUEUE);
    })
  }

  // Check is user already in merchant's queue, return a promise
  isInQueue(userId: string, merchantId: string) {
    let filter = {
      'userId': ['==', userId],
      'merchantId': ['==', merchantId]
    };
    let promise = new Promise<boolean>((resolve, reject) => {
      try {
        this.queueItemService.filterBy(filter, DocRef.QUEUE).subscribe(q => {
          // If user in queue
          if(q.length > 0) {
            resolve(true);
          }
          else {
            resolve(false);
          }
        })
      }
      catch (err) {
        reject(err);
      }
    });

    return promise;
  }

  // Get the list of merchantId that given user queing, return a promise
  getUserQueueList(userId: string) {
    let filter = {
      'userId': ['==', userId]
    };

    let promise = new Promise<string[]>((resolve, reject) => {
      try {
        this.queueItemService.filterBy(filter, DocRef.QUEUE, null, 0).subscribe(q => {
          //console.log(q);
          if(q.length > 0) {
            let qList = [];
            q.forEach(qItem => {
              qList.push(qItem.payload.doc.data()['merchantId'])
            });
            resolve(qList);
          }
          else {
            resolve([]);
          }
        })
      }
      catch (err) {
        reject(err);
      }
    });

    return promise;
  }

  // Get the list of userId that queue inside given merchant, return a promise
  getMerchantQueueList(merchantId: string) {
    let filter = {
      'merchantId': ['==', merchantId]
    };

    let promise = new Promise<string[]>((resolve, reject) => {
      try {
        this.queueItemService.filterBy(filter, DocRef.QUEUE).subscribe(q => {
          if(q.length > 0) {
            let qList = [];
            q.forEach(qItem => {
              qList.push(qItem.payload.doc.data()['userId'])
            });
            resolve(qList);
          }
          else {
            resolve([]);
          }
        })
      }
      catch (err) {
        reject(err);
      }
    });

    return promise;
  }

  // Generate queue position number, return a promise
  generateQueueNo(merchantId: string) {
    let filter = {
      'merchantId': ['==', merchantId],
      'isActive': ['==', true],
    };

    let orderBy = {
      'userQueuePosition': 'desc',
      'createdAt': 'asc'
    }

    let promise = new Promise<number>((resolve, reject) => {
      try {
        this.queueItemService.filterBy(filter, DocRef.QUEUE, orderBy, 1).subscribe(q => {
          if(q.length > 0) {
            resolve(q[0].payload.doc.data()['userQueuePosition'] + 1)
          }
          else {
            resolve(1);
          }
        })
      }
      catch (err) {
        reject(err);
      }
    });

    return promise;
  }

  // Get queue position of given user
  getUserPosition(userId: string, merchantId: string) {
    let filter = {
      'userId': ['==', userId],
      'merchantId': ['==', merchantId]
    };
    let promise = new Promise<number>((resolve, reject) => {
      try {
        this.queueItemService.filterBy(filter, DocRef.QUEUE).subscribe(q => {
          // If user in queue
          if(q.length > 0) {
            resolve(q[0].payload.doc.data()['userQueuePosition'])
          }
          else {
            reject('user not in queue');
          }
        })
      }
      catch (err) {
        reject(err);
      }
    });

    return promise;
  }

  // Get merchantId of given user with lessest waiting time, return a promise
  // TODO: rewrite this method to get the average waiting time, currently assume every merchant's waiting time is same
  getFastestMerchant(userId: string) {
    let filter = {
      'userId': ['==', userId]
    };

    let orderBy = {
      'userQueuePosition': 'asc'
    }

    let promise = new Promise<string>((resolve, reject) => {
      try {
        this.queueItemService.filterBy(filter, DocRef.QUEUE, orderBy, 1).subscribe(q => {
          // If user in queue
          if(q.length > 0) {
            resolve(q[0].payload.doc.data()['merchantId'])
          }
          else {
            reject('user not in queue');
          }
        })
      }
      catch (err) {
        reject(err);
      }
    });

    return promise;
  }

  cancelQueue(userId: string, merchantId: string) {
    let filter = {
      'userId': ['==', userId],
      'merchantId': ['==', merchantId]
    };


    return new Promise<string>(resolve => {
      this.queueItemService.filterBy(filter, DocRef.QUEUE).subscribe(q => {
        // If user in queue
        if(q.length > 0) {
          this.queueItemService.hardDelete(q[0].payload.doc.id, DocRef.QUEUE).then(a => {
            resolve("done");
          })
        }
      })
    })
  }
}
