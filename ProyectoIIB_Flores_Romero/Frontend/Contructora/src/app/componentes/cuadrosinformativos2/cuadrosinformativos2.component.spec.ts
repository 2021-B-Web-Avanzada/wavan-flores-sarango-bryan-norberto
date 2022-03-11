import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cuadrosinformativos2Component } from './cuadrosinformativos2.component';

describe('Cuadrosinformativos2Component', () => {
  let component: Cuadrosinformativos2Component;
  let fixture: ComponentFixture<Cuadrosinformativos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cuadrosinformativos2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cuadrosinformativos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
