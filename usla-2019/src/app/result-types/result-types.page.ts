import { Component, OnInit } from '@angular/core';
import { ScoringDataService } from '../scoring-data.service';

@Component({
  selector: 'app-result-types',
  templateUrl: './result-types.page.html',
  styleUrls: ['./result-types.page.scss'],
})
export class ResultTypesPage implements OnInit {

  constructor(private scoringData: ScoringDataService) { }

  ngOnInit() {
  }

}
