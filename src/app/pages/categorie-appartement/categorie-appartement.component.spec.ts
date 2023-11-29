import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieAppartementComponent } from './categorie-appartement.component';

describe('CategorieAppartementComponent', () => {
  let component: CategorieAppartementComponent;
  let fixture: ComponentFixture<CategorieAppartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieAppartementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieAppartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
