/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageEtageComponent } from './page-etage.component';

describe('PageEtageComponent', () => {
  let component: PageEtageComponent;
  let fixture: ComponentFixture<PageEtageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEtageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEtageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
