import { BaseDatabaseModel } from "./_BaseDatabaseModel";

export class MerchantReview extends BaseDatabaseModel{
  userId: string;
  merchantId: string;
  content: string;
  rating: number;

  userProfilePicUrl: string = null;

  constructor(props: MerchantReview) {
    super();
    Object.keys(props).forEach(prop => {
      const value = props[prop];
      this[prop] = value;
    });
  }
}
