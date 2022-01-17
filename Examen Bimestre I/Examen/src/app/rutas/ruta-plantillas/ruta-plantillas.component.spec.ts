import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaPlantillasComponent } from './ruta-plantillas.component';

describe('RutaPlantillasComponent', () => {
  let component: RutaPlantillasComponent;
  let fixture: ComponentFixture<RutaPlantillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaPlantillasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaPlantillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
