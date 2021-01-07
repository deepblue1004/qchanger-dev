export class Order {
  id: number;
  merchantId?: string;
  merchantName: string;
  merchantIcon: string;
  merchantStars: number[];
  location: string;
  currentQueueNumber: number;
  myQueueNumber: number;
  estimatedTimeOfArrival: number;
  acknowledged: boolean;
  acknowledgedTime: Date;
  createdTime: Date;
  canceledTime: Date;
}
