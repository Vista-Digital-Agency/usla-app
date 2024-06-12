import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuniorGuardResultsPage } from './junior-guard-results.page';

describe('JuniorGuardResultsPage', () => {
  let component: JuniorGuardResultsPage;
  let fixture: ComponentFixture<JuniorGuardResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuniorGuardResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuniorGuardResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
