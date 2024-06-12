import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySchedulePage } from './my-schedule.page';

describe('MySchedulePage', () => {
  let component: MySchedulePage;
  let fixture: ComponentFixture<MySchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySchedulePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
