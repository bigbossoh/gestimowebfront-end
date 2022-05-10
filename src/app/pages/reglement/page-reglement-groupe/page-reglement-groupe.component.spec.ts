import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReglementGroupeComponent } from './page-reglement-groupe.component';

describe('PageReglementGroupeComponent', () => {
  let component: PageReglementGroupeComponent;
  let fixture: ComponentFixture<PageReglementGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReglementGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReglementGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
