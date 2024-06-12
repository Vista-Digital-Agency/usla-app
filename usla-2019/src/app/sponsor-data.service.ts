import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SponsorDataService {
  sponsors: any = [];

  constructor(private http: HttpClient) { 
  }
  
  loadData() {
    return this.http.get('https://api.mongolab.com/api/1/databases/vista_apps/collections/uslaSponsors?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB')
    .subscribe(data => {
      this.sponsors = data[0].sponsors;
    });
  }

  getSponsors() {
    return this.sponsors;
  }
}
