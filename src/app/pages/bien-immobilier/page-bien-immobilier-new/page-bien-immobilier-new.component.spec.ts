import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBienImmobilierNewComponent } from './page-bien-immobilier-new.component';

describe('PageBienImmobilierNewComponent', () => {
  let component: PageBienImmobilierNewComponent;
  let fixture: ComponentFixture<PageBienImmobilierNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBienImmobilierNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBienImmobilierNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
