import { BaseDatabaseModel } from "./_BaseDatabaseModel";

export class PromotionType extends BaseDatabaseModel {
  title: string;
  description: string;

  constructor(props: PromotionType) {
    super();
    Object.keys(props).forEach(prop => {
      const value = props[prop];
      this[prop] = value;
    });
  }
}
