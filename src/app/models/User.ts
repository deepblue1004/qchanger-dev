import { UserRole } from 'app/shared/enum/UserRole.enum';
import { BaseDatabaseModel } from './_BaseDatabaseModel';

export class User extends BaseDatabaseModel {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  emailVerified: boolean;
  role: UserRole;
  lastLogin: Date;

  constructor(props: User) {
    super();
    Object.keys(props).forEach(prop => {
      const value = props[prop];
      this[prop] = value;
    });
  }
}
