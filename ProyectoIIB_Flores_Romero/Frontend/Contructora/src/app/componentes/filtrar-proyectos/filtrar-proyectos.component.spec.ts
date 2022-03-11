import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarProyectosComponent } from './filtrar-proyectos.component';

describe('FiltrarProyectosComponent', () => {
  let component: FiltrarProyectosComponent;
  let fixture: ComponentFixture<FiltrarProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrarProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrarProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
