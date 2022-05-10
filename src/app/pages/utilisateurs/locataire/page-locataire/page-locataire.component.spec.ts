import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLocataireComponent } from './page-locataire.component';

describe('PageLocataireComponent', () => {
  let component: PageLocataireComponent;
  let fixture: ComponentFixture<PageLocataireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLocataireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLocataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
