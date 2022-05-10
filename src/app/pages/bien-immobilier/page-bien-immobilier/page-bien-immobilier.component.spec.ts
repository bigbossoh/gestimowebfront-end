import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBienImmobilierComponent } from './page-bien-immobilier.component';

describe('PageBienImmobilierComponent', () => {
  let component: PageBienImmobilierComponent;
  let fixture: ComponentFixture<PageBienImmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBienImmobilierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBienImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
