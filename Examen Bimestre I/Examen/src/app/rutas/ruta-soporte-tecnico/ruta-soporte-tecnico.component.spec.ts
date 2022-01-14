import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaSoporteTecnicoComponent } from './ruta-soporte-tecnico.component';

describe('RutaSoporteTecnicoComponent', () => {
  let component: RutaSoporteTecnicoComponent;
  let fixture: ComponentFixture<RutaSoporteTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaSoporteTecnicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaSoporteTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
