import { Promotion } from './../../../models/Promotion';
import { PromotionService } from './../../../services/promotion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {

  promotions: Promotion[];

  constructor(private promotionService: PromotionService) { }

  ngOnInit() {
    this.promotionService.listAllPromotions().subscribe(data => {
      this.promotions = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Promotion
      });
    });
  }

}
