import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePaiementResidenceComponent } from './page-paiement-residence.component';

describe('PagePaiementResidenceComponent', () => {
  let component: PagePaiementResidenceComponent;
  let fixture: ComponentFixture<PagePaiementResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePaiementResidenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePaiementResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
