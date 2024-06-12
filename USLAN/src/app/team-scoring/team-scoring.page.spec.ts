import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamScoringPage } from './team-scoring.page';

describe('TeamScoringPage', () => {
  let component: TeamScoringPage;
  let fixture: ComponentFixture<TeamScoringPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamScoringPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamScoringPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
