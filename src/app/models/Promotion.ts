import { BaseDatabaseModel } from "./_BaseDatabaseModel";

export class Promotion extends BaseDatabaseModel {
  title: string;
  image: string;
  route: string;
  validFrom: Date;
  validTo: Date;

  constructor(props: Promotion) {
    super();
    Object.keys(props).forEach(prop => {
      const value = props[prop];
      this[prop] = value;
    });
  }
}
