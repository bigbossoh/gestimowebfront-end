import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelsLoyersComponent } from './appels-loyers.component';

describe('AppelsLoyersComponent', () => {
  let component: AppelsLoyersComponent;
  let fixture: ComponentFixture<AppelsLoyersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppelsLoyersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppelsLoyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
