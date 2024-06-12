import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventResultsPage } from './event-results.page';

describe('EventResultsPage', () => {
  let component: EventResultsPage;
  let fixture: ComponentFixture<EventResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
