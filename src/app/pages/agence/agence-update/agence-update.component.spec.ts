import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenceUpdateComponent } from './agence-update.component';

describe('AgenceUpdateComponent', () => {
  let component: AgenceUpdateComponent;
  let fixture: ComponentFixture<AgenceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgenceUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
