import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImmeubleNewComponent } from './page-immeuble-new.component';

describe('PageImmeubleNewComponent', () => {
  let component: PageImmeubleNewComponent;
  let fixture: ComponentFixture<PageImmeubleNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageImmeubleNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageImmeubleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
