import { BaseDatabaseModel } from './_BaseDatabaseModel';

export class QueueItem extends BaseDatabaseModel{
  userId: string;
  merchantId: string;
  userQueuePosition: number;
  canceledTime: Date = null;
  isActive: boolean = true;

  constructor(props: QueueItem) {
    super();
    Object.keys(props).forEach(prop => {
      const value = props[prop];
      this[prop] = value;
    });
  }
}
