import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerInicioSesionComponent } from './banner-inicio-sesion.component';

describe('BannerInicioSesionComponent', () => {
  let component: BannerInicioSesionComponent;
  let fixture: ComponentFixture<BannerInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerInicioSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
