import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrosinformativosComponent } from './cuadrosinformativos.component';

describe('CuadrosinformativosComponent', () => {
  let component: CuadrosinformativosComponent;
  let fixture: ComponentFixture<CuadrosinformativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrosinformativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrosinformativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
