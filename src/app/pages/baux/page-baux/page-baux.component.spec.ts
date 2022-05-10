import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBauxComponent } from './page-baux.component';

describe('PageBauxComponent', () => {
  let component: PageBauxComponent;
  let fixture: ComponentFixture<PageBauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
