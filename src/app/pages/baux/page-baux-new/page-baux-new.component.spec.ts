import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBauxNewComponent } from './page-baux-new.component';

describe('PageBauxNewComponent', () => {
  let component: PageBauxNewComponent;
  let fixture: ComponentFixture<PageBauxNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBauxNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBauxNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
