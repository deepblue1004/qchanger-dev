import { PromotionTypeService } from './../../../services/promotion-type.service';
import { PromotionType } from './../../../models/PromotionType';
import { Promotion } from './../../../models/Promotion';
import { PromotionService } from './../../../services/promotion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  promotionTypes: PromotionType[];
  promotions: Promotion[];

  constructor(
    private promotionService: PromotionService,
    private promotionTypeService: PromotionTypeService
  ) { }

  ngOnInit() {
    this.promotionService.listAll().subscribe(data => {
      this.promotions = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as Promotion
        }
      });
    });

    this.promotionTypeService.listAll().subscribe(data => {
      this.promotionTypes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as PromotionType
        }
      })
    });
  }

}
