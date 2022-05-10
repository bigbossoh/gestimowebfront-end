import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAgenceComponent } from './page-agence.component';

describe('PageAgenceComponent', () => {
  let component: PageAgenceComponent;
  let fixture: ComponentFixture<PageAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
