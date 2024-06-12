import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-individual-points',
  templateUrl: 'individual-points.html',
})
export class IndividualPointsPage {

  category: string = 'men';

  men: any = [];
  women: any = [];

  constructor(private dataProvider: DataProvider) {
    this.men = this.dataProvider.getIndividualMen();
    this.women = this.dataProvider.getIndividualWomen();

    //console.log(this.men);
  }


  

}
