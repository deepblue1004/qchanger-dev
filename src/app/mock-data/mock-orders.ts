import {Order} from '../models/order';

export const ORDERS: Order[] = [
  {
    id: 1,
    merchantName: 'KOI cafe',
    merchantIcon: 'assets/icon-koi.png',
    merchantStars: [0, 1, 2, 3],
    location: '304 Orchard',
    currentQueueNumber: 82,
    myQueueNumber: 96,
    estimatedTimeOfArrival: 10,
    acknowledged: false,
    createdTime: new Date(2020, 11, 27, 0, 0, 0, 0),
    acknowledgedTime: new Date(2020, 11, 27, 0, 0, 0, 0),
    canceledTime: null
  },
  {
    id: 2,
    merchantName: 'DBS',
    merchantIcon: 'assets/dbs-bank-vector-logo-small.png',
    merchantStars: [0, 1, 2],
    location: 'Plaza Singapore',
    currentQueueNumber: 150,
    myQueueNumber: 158,
    estimatedTimeOfArrival: 50,
    acknowledged: false,
    createdTime: new Date(2020, 11, 27, 0, 0, 0, 0),
    acknowledgedTime: new Date(2020, 11, 27, 0, 0, 0, 0),
    canceledTime: null
  },
  {
    id: 3,
    merchantName: 'Singapore post',
    merchantIcon: '',
    merchantStars: [0, 1, 2],
    location: 'Orchard Branch',
    currentQueueNumber: 0,
    myQueueNumber: 0,
    estimatedTimeOfArrival: 0,
    acknowledged: true,
    createdTime: new Date(2020, 11, 23, 0, 0, 0, 0),
    acknowledgedTime: new Date(2020, 11, 23, 0, 0, 0, 0),
    canceledTime: null
  },
  {
    id: 4,
    merchantName: 'Maybank',
    merchantIcon: '',
    merchantStars: [0, 1, 2],
    location: 'China Town',
    currentQueueNumber: 0,
    myQueueNumber: 0,
    estimatedTimeOfArrival: 0,
    acknowledged: true,
    createdTime: new Date(2020, 11, 18, 0, 0, 0, 0),
    acknowledgedTime: new Date(2020, 11, 18, 0, 0, 0, 0),
    canceledTime: null
  },
  {
    id: 5,
    merchantName: 'KOI',
    merchantIcon: '',
    merchantStars: [0, 1, 2],
    location: '313 Orchard',
    currentQueueNumber: 0,
    myQueueNumber: 0,
    estimatedTimeOfArrival: 0,
    acknowledged: true,
    createdTime: new Date(2020, 11, 12, 0, 0, 0, 0),
    acknowledgedTime: new Date(2020, 11, 12, 0, 0, 0, 0),
    canceledTime: null
  },
  {
    id: 6,
    merchantName: 'Singapore post',
    merchantIcon: '',
    merchantStars: [0, 1, 2],
    location: 'Orchard Branch',
    currentQueueNumber: 0,
    myQueueNumber: 0,
    estimatedTimeOfArrival: 0,
    acknowledged: true,
    createdTime: new Date(2020, 11, 2, 0, 0, 0, 0),
    acknowledgedTime: new Date(2020, 11, 2, 0, 0, 0, 0),
    canceledTime: null
  },
  {
    id: 7,
    merchantName: 'HaiDiLao',
    merchantIcon: '',
    merchantStars: [0, 1, 2],
    location: 'Jurong East',
    currentQueueNumber: 0,
    myQueueNumber: 0,
    estimatedTimeOfArrival: 0,
    acknowledged: true,
    createdTime: new Date(2020, 10, 21, 0, 0, 0, 0),
    acknowledgedTime: new Date(2020, 10, 21, 0, 0, 0, 0),
    canceledTime: null
  },
  {
    id: 8,
    merchantName: 'TAN YU',
    merchantIcon: '',
    merchantStars: [0, 1, 2],
    location: 'Orchard Road',
    currentQueueNumber: 0,
    myQueueNumber: 0,
    estimatedTimeOfArrival: 0,
    acknowledged: true,
    createdTime: new Date(2020, 10, 14, 0, 0, 0, 0),
    acknowledgedTime: new Date(2020, 10, 14, 0, 0, 0, 0),
    canceledTime: null
  }
]
