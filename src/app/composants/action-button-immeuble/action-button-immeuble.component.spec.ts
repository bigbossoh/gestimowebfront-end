import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonImmeubleComponent } from './action-button-immeuble.component';

describe('ActionButtonImmeubleComponent', () => {
  let component: ActionButtonImmeubleComponent;
  let fixture: ComponentFixture<ActionButtonImmeubleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonImmeubleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonImmeubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
