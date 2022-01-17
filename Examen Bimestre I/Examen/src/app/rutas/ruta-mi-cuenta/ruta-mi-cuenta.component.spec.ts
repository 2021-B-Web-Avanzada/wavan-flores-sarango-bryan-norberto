import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMiCuentaComponent } from './ruta-mi-cuenta.component';

describe('RutaMiCuentaComponent', () => {
  let component: RutaMiCuentaComponent;
  let fixture: ComponentFixture<RutaMiCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaMiCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMiCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
