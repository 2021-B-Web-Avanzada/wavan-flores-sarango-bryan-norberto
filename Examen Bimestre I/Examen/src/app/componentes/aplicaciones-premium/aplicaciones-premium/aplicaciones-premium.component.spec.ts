import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionesPremiumComponent } from './aplicaciones-premium.component';

describe('AplicacionesPremiumComponent', () => {
  let component: AplicacionesPremiumComponent;
  let fixture: ComponentFixture<AplicacionesPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacionesPremiumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionesPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
