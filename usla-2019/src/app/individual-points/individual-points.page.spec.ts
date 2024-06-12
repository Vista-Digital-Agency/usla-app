import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPointsPage } from './individual-points.page';

describe('IndividualPointsPage', () => {
  let component: IndividualPointsPage;
  let fixture: ComponentFixture<IndividualPointsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualPointsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualPointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
