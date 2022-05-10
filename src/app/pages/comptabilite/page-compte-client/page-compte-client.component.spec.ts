import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompteClientComponent } from './page-compte-client.component';

describe('PageCompteClientComponent', () => {
  let component: PageCompteClientComponent;
  let fixture: ComponentFixture<PageCompteClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCompteClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCompteClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
