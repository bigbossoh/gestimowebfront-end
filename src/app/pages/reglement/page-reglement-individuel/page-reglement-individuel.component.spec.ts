import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReglementIndividuelComponent } from './page-reglement-individuel.component';

describe('PageReglementIndividuelComponent', () => {
  let component: PageReglementIndividuelComponent;
  let fixture: ComponentFixture<PageReglementIndividuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReglementIndividuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReglementIndividuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
