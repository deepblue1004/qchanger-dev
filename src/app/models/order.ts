export interface Order {
  id: number,
  merchantName: string,
  merchantIcon: string,
  merchantStars: number[],
  location: string,
  currentQueueNumber: number,
  myQueueNumber: number,
  estimatedTimeOfArrival: number,
  acknowledged: boolean,
  acknowledgedTime: Date,
  createdTime: Date,
  canceledTime: Date
}
