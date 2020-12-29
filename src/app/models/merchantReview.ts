import { BaseDatabaseModel } from "./_BaseDatabaseModel";

export class MerchantReview extends BaseDatabaseModel{
  createdById: string;
  content: string;
  rating: number;

  constructor(props: MerchantReview) {
    super();
    Object.keys(props).forEach(prop => {
      const value = props[prop];
      this[prop] = value;
    });
  }
}
