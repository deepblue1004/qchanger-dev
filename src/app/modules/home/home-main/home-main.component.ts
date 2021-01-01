import { DocRef } from '../../../shared/enum/DocRef.enum';
import { PromotionType } from './../../../models/PromotionType';
import { Promotion } from './../../../models/Promotion';
import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'app/services/firestore.service';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  promotionTypes: PromotionType[] = [];

  constructor(
    private promotionTypeService: FirestoreService<PromotionType>,
    private promotionService: FirestoreService<Promotion>
  ) { }

  ngOnInit() {
    // Get promotion type list
    this.promotionTypeService.listAll(DocRef.PROMOTION_TYPE).subscribe(data => {
      this.promotionTypes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      });

      // Assign promotions list to every promotion list
      this.promotionTypes.map(pt => {
        this.promotionService.listAll(`${DocRef.PROMOTION_TYPE}/${pt.id}/${DocRef.PROMOTION}`).subscribe(pData => {
          pt.promotions = pData.map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data()
            }
          });
        });
      });
    });
  }
}
