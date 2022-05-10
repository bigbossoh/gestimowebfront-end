import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListeUtilisateursComponent } from './page-liste-utilisateurs.component';

describe('PageListeUtilisateursComponent', () => {
  let component: PageListeUtilisateursComponent;
  let fixture: ComponentFixture<PageListeUtilisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListeUtilisateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListeUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
