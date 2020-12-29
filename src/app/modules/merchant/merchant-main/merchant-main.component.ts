import { MerchantReview } from './../../../models/merchantReview';
import { FirestoreService } from 'app/services/firestore.service';
import { Merchant } from './../../../models/merchant';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocRef } from 'app/services/DocRef.enum';
import { MerchantProduct } from 'app/models/merchantProduct';
import * as ons from 'onsenui';

@Component({
  selector: 'app-merchant-main',
  templateUrl: './merchant-main.component.html',
  styleUrls: ['./merchant-main.component.css']
})
export class MerchantMainComponent implements OnInit {

  id: string;
  merchant: Merchant;

  constructor(
    private route: ActivatedRoute,
    private merchantService: FirestoreService<Merchant>,
    private merchantProductService: FirestoreService<MerchantProduct>,
    private merchantReviewService: FirestoreService<MerchantReview>,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.merchantService.getById(this.id, DocRef.MERCHANT).subscribe(m => {
        this.merchant = m.payload.data();
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
        this.merchantReviewService.listAll(`${DocRef.MERCHANT}/${this.id}/${DocRef.MERCHANT_REVIEW}`).subscribe(pData => {
          this.merchant.reviews = pData.map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            }
          });
        });
      });
    });
  }

  backToHome() {
    this.router.navigate(['/home']);
  }

  getQueueCount() {
    return 7;
  }

  getRating() {
    var result = 0;

    if (this.merchant?.reviews) {         // Check got review or not
      this.merchant.reviews.forEach(r => {
        result += r.rating;
      });
      result = result/this.merchant.reviews.length;
    }
    return result;
  }

  getWaitingTime() {
    return 50;
  }

  queue() {
    ons.notification.confirm("You need to Login first!", {buttonLabels: ['Cancel', 'Login']})
    .then(selectLogin => {
      if(selectLogin) {
        ons.notification.alert('Havent create login module lah....');
      }
    })
  }
}
