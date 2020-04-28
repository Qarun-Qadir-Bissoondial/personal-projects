import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage = window.localStorage;

  constructor() { }

  get<T>(key: string): T {
    return JSON.parse(this.storage.getItem(key)) as T;
  }

  save<T>(key: string, value: T): void {
    return this.storage.setItem(key, JSON.stringify(value));
  }

  delete(key: string): void {
    return this.storage.removeItem(key);
  }
}
