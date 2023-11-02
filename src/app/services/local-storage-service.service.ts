import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageServiceService {

  constructor() { }
  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getData(key: string): any {
    const data:any = localStorage.getItem(key);
    return JSON.parse(data);
  }
}
