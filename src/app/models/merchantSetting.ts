import { BaseDatabaseModel } from "./_BaseDatabaseModel";

export class MerchantSetting extends BaseDatabaseModel {
  bannerImageUrl: string;
  openFrom: number;
  openUntil: number;

  constructor(props: MerchantSetting) {
    super();
    Object.keys(props).forEach(prop => {
      const value = props[prop];
      this[prop] = value;
    });
  }
}
