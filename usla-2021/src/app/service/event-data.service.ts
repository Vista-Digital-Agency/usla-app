import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
//import { Http, HttpResponse } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class EventDataService {

  data: any[];
  events: any[];

  constructor(
    private http: HTTP
  ) { }

  async loadData() {
    
    /*const options = {
      url: 'https://mongo-data-api-vista.herokuapp.com/api/1/databases/vista_apps/collections/uslaEvents?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB'
    };

    const response: HttpResponse = await Http.get(options);

    //console.log(JSON.stringify(response));

    this.events = response.data[0].events;*/


    this.http.get('https://mongo-data-api-vista.herokuapp.com/api/1/databases/vista_apps/collections/uslaEvents?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB', {}, {})
    .then( data => {
      
      this.data = JSON.parse(data['data']);
      //console.log(this.data[0].events);

      this.events = this.data[0].events;
      

    },
    err => {
      console.log(err);
    });
  }

  getEvents() {
    return this.events;
  }
}
