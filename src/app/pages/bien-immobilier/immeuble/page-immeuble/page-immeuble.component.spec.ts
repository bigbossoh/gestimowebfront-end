/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageImmeubleComponent } from './page-immeuble.component';

describe('PageImmeubleComponent', () => {
  let component: PageImmeubleComponent;
  let fixture: ComponentFixture<PageImmeubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageImmeubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
