import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  events: any = [];

  constructor(private http: HttpClient) {
  }
  
  loadData() {
    return this.http.get('https://api.mongolab.com/api/1/databases/vista_apps/collections/uslaEvents?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB')
    .subscribe(data => {
      this.events = data[0].events;
    });
  }

  getEvents() {
    return this.events;
  }
}
