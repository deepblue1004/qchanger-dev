import { BaseDatabaseModel } from "./_BaseDatabaseModel";

export class MerchantProduct extends BaseDatabaseModel {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  discount: number;

  constructor(props: MerchantProduct) {
    super();
    Object.keys(props).forEach(prop => {
      const value = props[prop];
      this[prop] = value;
    });
  }
}
