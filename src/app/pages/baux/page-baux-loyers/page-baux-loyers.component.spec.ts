import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBauxLoyersComponent } from './page-baux-loyers.component';

describe('PageBauxLoyersComponent', () => {
  let component: PageBauxLoyersComponent;
  let fixture: ComponentFixture<PageBauxLoyersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBauxLoyersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBauxLoyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
