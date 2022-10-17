import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatistiqueJournalierComponent } from './page-statistique-journalier.component';

describe('PageStatistiqueJournalierComponent', () => {
  let component: PageStatistiqueJournalierComponent;
  let fixture: ComponentFixture<PageStatistiqueJournalierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStatistiqueJournalierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStatistiqueJournalierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
