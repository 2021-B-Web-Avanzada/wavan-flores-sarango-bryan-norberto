import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensaje2Component } from './mensaje2.component';

describe('Mensaje2Component', () => {
  let component: Mensaje2Component;
  let fixture: ComponentFixture<Mensaje2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensaje2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensaje2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
