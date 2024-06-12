import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
//import { Http, HttpResponse } from '@capacitor-community/http';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  data: any[];
  events: any[];

  constructor(
    private http: HTTP
  ) { }
  
  async loadData() {
    
    /*const options = {
      url: 'https://mongo-data-api-vista.herokuapp.com/api/1/databases/vista_apps/collections/uslaProgram?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB'
    };

    const response: HttpResponse = await Http.get(options);

    //console.log(response);

    this.events = response.data[0].program;*/

    
    this.http.get('https://mongo-data-api-vista.herokuapp.com/api/1/databases/vista_apps/collections/uslaProgram?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB', {}, {})
    .then( data => {

      this.data = JSON.parse(data['data']);

      this.events = this.data[0].program;

    },
    err => {
      console.log(err);
    });
  }

  getProgram() {
    return this.events;
  }

}
