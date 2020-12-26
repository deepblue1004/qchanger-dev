import { DocRef } from './../../../services/DocRef.enum';
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

  promotionTypes: PromotionType[];
  promotions: Promotion[];

  constructor(
     private promotionTypeService: FirestoreService<PromotionType>,
    private promotionService: FirestoreService<Promotion>
  ) { }

  ngOnInit() {
    this.promotionService.listAll(DocRef.PROMOTION).subscribe(data => {
      this.promotions = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Promotion
        }
      });
    });

    this.promotionTypeService.listAll(DocRef.PROMOTION_TYPE).subscribe(data => {
      this.promotionTypes = data.map(e => {
        console.log(e.payload.doc);
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as PromotionType
        }
      })
    });
  }

}
