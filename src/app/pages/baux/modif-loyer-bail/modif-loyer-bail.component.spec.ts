import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifLoyerBailComponent } from './modif-loyer-bail.component';

describe('ModifLoyerBailComponent', () => {
  let component: ModifLoyerBailComponent;
  let fixture: ComponentFixture<ModifLoyerBailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifLoyerBailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifLoyerBailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
