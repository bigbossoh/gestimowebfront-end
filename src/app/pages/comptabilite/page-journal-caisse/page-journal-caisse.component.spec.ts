import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJournalCaisseComponent } from './page-journal-caisse.component';

describe('PageJournalCaisseComponent', () => {
  let component: PageJournalCaisseComponent;
  let fixture: ComponentFixture<PageJournalCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageJournalCaisseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageJournalCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
