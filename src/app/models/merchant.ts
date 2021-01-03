import { MerchantSetting } from './merchantSetting';
import { BaseDatabaseModel } from "./_BaseDatabaseModel";
import { MerchantProduct } from './merchantProduct';
import { MerchantReview } from './merchantReview';

export class Merchant extends BaseDatabaseModel{
  name: string;
  area: string;
  joinedAt: Date;
  fullAddress: string;

  setting: MerchantSetting;
  products: MerchantProduct[];
  reviews: MerchantReview[];

  constructor(props: Merchant) {
    super();
    Object.keys(props).forEach(prop => {
      const value = props[prop];
      this[prop] = value;
    });
  }
}
