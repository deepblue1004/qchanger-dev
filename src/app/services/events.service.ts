import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  public routeChanged = new BehaviorSubject({ currentRoute: '/' });

  constructor() {
  }
}
