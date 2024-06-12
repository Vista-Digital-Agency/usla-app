import { Component, OnInit } from '@angular/core';
import { ScoringDataService } from '../scoring-data.service';

@Component({
  selector: 'app-individual-points',
  templateUrl: './individual-points.page.html',
  styleUrls: ['./individual-points.page.scss'],
})
export class IndividualPointsPage implements OnInit {
  category: string = 'men';
  
    men: any = [];
    women: any = [];
  
    constructor(private dataProvider: ScoringDataService) {
      this.men = this.dataProvider.getIndividualMen();
      this.women = this.dataProvider.getIndividualWomen();
  
      //console.log(this.men);
    }

  ngOnInit() {
  }

}
