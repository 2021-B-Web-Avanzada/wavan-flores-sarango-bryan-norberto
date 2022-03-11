import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Propiedad1Component } from './propiedad1.component';

describe('Propiedad1Component', () => {
  let component: Propiedad1Component;
  let fixture: ComponentFixture<Propiedad1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Propiedad1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Propiedad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
