import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
  
  get<T>(key: string): T {
    const data = window.localStorage.getItem(key);
    if (!data) { return undefined };

    return JSON.parse(data) as T;
  }

  store(key: string, value: object) {
    if (!value) { return; }
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getOrders(): Order[] {
    const data = this.get<Order[]>('orders');
    return !data
      ? []
      : data;
  }
}
