import { BaseDatabaseModel } from "./_BaseDatabaseModel";

export class Promotion extends BaseDatabaseModel {
  title: string;
  description: string;
  image: string;
  route: string;
  validFrom: Date;
  validTo: Date;
  type: string;

  constructor(props: Promotion) {
    super();
    Object.keys(props).forEach(prop => {
      const value = props[prop];
      this[prop] = value;
    });
  }
}
