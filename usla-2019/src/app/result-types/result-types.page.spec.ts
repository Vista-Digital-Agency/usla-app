import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTypesPage } from './result-types.page';

describe('ResultTypesPage', () => {
  let component: ResultTypesPage;
  let fixture: ComponentFixture<ResultTypesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultTypesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTypesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
