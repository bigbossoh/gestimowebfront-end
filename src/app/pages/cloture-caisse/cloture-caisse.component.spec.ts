import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotureCaisseComponent } from './cloture-caisse.component';

describe('ClotureCaisseComponent', () => {
  let component: ClotureCaisseComponent;
  let fixture: ComponentFixture<ClotureCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClotureCaisseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClotureCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
