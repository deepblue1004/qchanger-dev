import { rejects } from 'assert';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { QueueService } from './../../../services/queue.service';
import { AuthService } from './../../../services/auth.service';
import { MerchantReview } from './../../../models/merchantReview';
import { FirestoreService } from 'app/services/firestore.service';
import { Merchant } from './../../../models/merchant';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocRef } from 'app/shared/enum/DocRef.enum';
import { MerchantProduct } from 'app/models/merchantProduct';
import * as ons from 'onsenui';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-merchant-main',
  templateUrl: './merchant-main.component.html',
  styleUrls: ['./merchant-main.component.css']
})
export class MerchantMainComponent implements OnInit {

  id: string;
  merchant: Merchant;
  merchantReviews: MerchantReview[] = [];

  queueCount: Promise<number>;
  waitingTime: Promise<number>;
  isUserLogin: Promise<boolean>;
  userId: Promise<string> | null = null;

  newReview: MerchantReview = null;

  constructor(
    private route: ActivatedRoute,
    private merchantService: FirestoreService<Merchant>,
    private merchantProductService: FirestoreService<MerchantProduct>,
    private merchantReviewService: FirestoreService<MerchantReview>,
    private queueService: QueueService,
    private router: Router,
    private auth: AuthService,
    private modalService: NgbModal,
    config: NgbModalConfig
  ) {
    config.backdrop = 'static';
    config.centered = true;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.merchantService.getById(this.id, DocRef.MERCHANT).subscribe(m => {
        this.merchant = m.payload.data();

        if (this.merchant) {   // If merchant exist
          this.merchant.id = this.id;

          // Assign popular product
          this.merchantProductService.listAll(`${DocRef.MERCHANT}/${this.id}/${DocRef.MERCHANT_PRODUCT}`).subscribe(pData => {
            this.merchant.products = pData.map(e => {
              return {
                id: e.payload.doc.id,
                ...e.payload.doc.data()
              }
            });
          });

          // Assign reviews
          let filter = {
            'merchantId': ['==', this.id]
          };
          this.merchantReviewService.filterBy(filter, DocRef.MERCHANT_REVIEW).subscribe(reviews => {
            reviews.forEach(r => {
              let reviewItem = new MerchantReview(r.payload.doc.data() as MerchantReview);
              this.auth.getProfilePic(reviewItem.userId).then(url => {
                reviewItem.userProfilePicUrl = url;
                // Check Dulplicate
                if (this.merchantReviews.every(rd => rd.id != reviewItem.id))
                {
                  this.merchantReviews.push(reviewItem);
                }
              });
            });
          });
        }
        else {
          this.router.navigate(['/home']);
        }
      });

      this.initialisePromise();

      this.userId.then(uid => {
        this.newReview = new MerchantReview({
          userId: uid,
          merchantId: this.id,
          rating: 5,
          content: null
        } as MerchantReview);
      })
    });
  }

  openModal(content) {
    this.modalService.open(content);
  }

  backToHome() {
    this.router.navigate(['/home']);
  }

  initialisePromise() {
    this.queueCount = new Promise<number>(resolve => {
      this.queueService.getMerchantQueueList(this.id).then(q => {
       resolve(q.length);
      })
    });

    this.waitingTime = new Promise<number>(resolve => {
      // TODO: create another method in queueService to calculate waiting time
      this.queueService.getMerchantQueueList(this.id).then(q => {
        resolve(q.length * 5);
      });
    });

    this.userId = new Promise<string>(resolve => {
      this.auth.createUser().then(currentUser => {
        if (currentUser) {
          resolve(currentUser.id);
        }
        else {
          resolve(null);
        }
      })
      .catch(err => {
        resolve(null);
      });
    });
  }

  getRating() {
    var result = 0;

    if (this.merchantReviews.length > 0) {         // Check got review or not
      this.merchantReviews.forEach(r => {
        result += r.rating;
      });
      result = result / this.merchantReviews.length;
    }
    return result;
  }

  getUserProfile(userId?: string) {
    // let promise: Promise<string>;
    // this.userId.then(id => {
    //   if(userId == null) {
    //     userId = id;
    //   }

    //   promise = new Promise((resolve, reject) => {
    //     this.auth.getProfilePic(userId).then(url => {
    //       resolve(url);
    //     })
    //     .catch(err => {
    //       reject(err);
    //     });
    //   });
    // });

    // return promise;

    // this.userId.then(id => {
    //     if(userId == null) {
    //       userId = id;
    //     }

    //      this.auth.getProfilePic(userId).subscribe(a=>{
    //       return a
    //     })
    //   });
    console.log("call");
    return "aaa";
  }

  saveReview() {
    this.newReview.createdAt = new Date();
    this.merchantReviewService.create(this.newReview, DocRef.MERCHANT_REVIEW).then(() => {
      this.modalService.dismissAll();
      this.newReview.rating = 5;
      this.newReview.content = null;
    });

    console.log(this.newReview);
  }

  queue() {
    this.auth.createUser().then(currentUser => {
      // If user logged in
      try {
        this.queueService.isInQueue(currentUser.id, this.id).then(isInQueue => {
          // If already queue
          if(isInQueue) {
            ons.notification.alert('You already in queue.').then(() => {
              this.router.navigate([`/queue/${this.id}`]);
            });
          }
          else {
            ons.notification.confirm(
              `Are you sure want to queue at ${this.merchant.name}?`,
              { buttonLabels: ['No', 'Queue'] }
            ).then(selectQueue => {
              if (selectQueue) {
                this.queueService.addToQueue(currentUser.id, this.id);
                this.router.navigate([`/queue/${this.id}`]);
              }
            });
          }
        });
      }
      catch(err) {
        console.log(err);
      }
    }).catch(err => {
      console.log(err);
      // If user not login
      ons.notification.confirm("You need to Login first!", { buttonLabels: ['Cancel', 'Login'] })
      .then(selectLogin => {
        if (selectLogin) {
          this.router.navigate([`/login/${this.id}`]);
        }
      });
    });
  }
}
