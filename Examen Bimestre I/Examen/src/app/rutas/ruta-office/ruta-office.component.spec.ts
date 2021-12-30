import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaOfficeComponent } from './ruta-office.component';

describe('RutaOfficeComponent', () => {
  let component: RutaOfficeComponent;
  let fixture: ComponentFixture<RutaOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaOfficeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
