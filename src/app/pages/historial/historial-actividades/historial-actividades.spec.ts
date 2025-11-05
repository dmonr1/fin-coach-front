import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialActividades } from './historial-actividades';

describe('HistorialActividades', () => {
  let component: HistorialActividades;
  let fixture: ComponentFixture<HistorialActividades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialActividades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialActividades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
