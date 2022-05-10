import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGerantComponent } from './page-gerant.component';

describe('PageGerantComponent', () => {
  let component: PageGerantComponent;
  let fixture: ComponentFixture<PageGerantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageGerantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageGerantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
