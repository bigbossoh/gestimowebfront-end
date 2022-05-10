import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDetailBailLoyerComponent } from './app-detail-bail-loyer.component';

describe('AppDetailBailLoyerComponent', () => {
  let component: AppDetailBailLoyerComponent;
  let fixture: ComponentFixture<AppDetailBailLoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDetailBailLoyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDetailBailLoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
