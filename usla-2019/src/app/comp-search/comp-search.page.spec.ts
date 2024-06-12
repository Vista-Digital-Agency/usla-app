import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompSearchPage } from './comp-search.page';

describe('CompSearchPage', () => {
  let component: CompSearchPage;
  let fixture: ComponentFixture<CompSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
