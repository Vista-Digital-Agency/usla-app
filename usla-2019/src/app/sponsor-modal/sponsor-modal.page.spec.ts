import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorModalPage } from './sponsor-modal.page';

describe('SponsorModalPage', () => {
  let component: SponsorModalPage;
  let fixture: ComponentFixture<SponsorModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
