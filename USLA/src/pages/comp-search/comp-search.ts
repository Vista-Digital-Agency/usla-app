import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-comp-search',
  templateUrl: 'comp-search.html',
})
export class CompSearchPage {

  searchQuery: string = '';
  competitors: any = [];

  constructor(private dataProvider: DataProvider) {
    this.initializeItems();
  }

  initializeItems() {
    this.competitors = this.dataProvider.getCompetitors();
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.competitors = this.competitors.filter((v) => {
      if(v.first && v.last && q) {
        
        if (q.indexOf(' ') > -1) {
          var firstName = q.substring(0, q.indexOf(' '));

          var lastName = q.substring(q.indexOf(' ') + 1);

          //console.log(item.name.toLowerCase().indexOf(firstName.toLocaleLowerCase()) > -1 && item.name.toLowerCase().indexOf(lastName.toLocaleLowerCase()) > -1);

          if (v.first.toLowerCase().indexOf(firstName.toLocaleLowerCase()) > -1 && v.last.toLowerCase().indexOf(lastName.toLocaleLowerCase()) > -1) {
            return true;
          } else {
            return false;
          }

        } else {
          if (v.first.toLowerCase().indexOf(q.toLocaleLowerCase()) > -1 || v.last.toLowerCase().indexOf(q.toLocaleLowerCase()) > -1) {
            return true;
          } else {
            return false
          }
        }
        
      }
      });
    }

}
