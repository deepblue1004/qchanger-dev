import { Promotion } from './Promotion';
import { BaseDatabaseModel } from "./_BaseDatabaseModel";

export class PromotionType extends BaseDatabaseModel {
  title: string;
  description: string;
  promotions: Promotion;

  constructor(props: PromotionType) {
    super();
    Object.keys(props).forEach(prop => {
      const value = props[prop];
      this[prop] = value;
    });
  }
}
