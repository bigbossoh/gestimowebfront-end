import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonBienComponent } from './action-button-bien.component';

describe('ActionButtonBienComponent', () => {
  let component: ActionButtonBienComponent;
  let fixture: ComponentFixture<ActionButtonBienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonBienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonBienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
