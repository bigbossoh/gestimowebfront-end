import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdateAgenceComponent } from './page-update-agence.component';

describe('PageUpdateAgenceComponent', () => {
  let component: PageUpdateAgenceComponent;
  let fixture: ComponentFixture<PageUpdateAgenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUpdateAgenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUpdateAgenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
