import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompteAgenceComponent } from './page-compte-agence.component';

describe('PageCompteAgenceComponent', () => {
  let component: PageCompteAgenceComponent;
  let fixture: ComponentFixture<PageCompteAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCompteAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCompteAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
