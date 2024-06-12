import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
//import { Http, HttpResponse } from '@capacitor-community/http';


@Injectable({
  providedIn: 'root'
})
export class SponsorDataService {

  data:any = [];
  sponsors: any = [];

  constructor(
    private http: HTTP
    ) { }

    async loadData() {
      //console.log('hey');
      //const doGet = async () => {
        /*const options = {
          url: 'https://mongo-data-api-vista.herokuapp.com/api/1/databases/vista_apps/collections/uslaSponsors?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB'
        };

        const response: HttpResponse = await Http.get(options);

        console.log(JSON.stringify(response));

        this.sponsors = response.data[0].sponsors; */

        //console.log(this.sponsors);
      //};
      this.http.get('https://mongo-data-api-vista.herokuapp.com/api/1/databases/vista_apps/collections/uslaSponsors?apiKey=jwntwY-_3Okrwow28lzugmAS3V4z68OB', {}, {})
      .then( data => {

        this.data = JSON.parse(data['data']);
        //console.log(this.data);

        this.sponsors = this.data[0].sponsors;

      },
      err => {
        console.log(err);
      });
    }

    getSponsors() {
      return this.sponsors;
    }
}
