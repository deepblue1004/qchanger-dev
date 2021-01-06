import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchantMainComponent } from './merchant-main/merchant-main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MerchantMainComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ]
})
export class MerchantModule { }
