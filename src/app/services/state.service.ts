import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  store: BehaviorSubject<object> = new BehaviorSubject({});

  constructor() { }

  update(key: string, value: object): void  {
    this.store.next({...this.store.value, [key]: value});
  }

  fetch(key: string): Observable<object> {
    return this.store.pipe(map(value => value[key]));
  }
}
