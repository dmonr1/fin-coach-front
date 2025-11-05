import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTransaccion } from './agregar-transaccion';

describe('AgregarTransaccion', () => {
  let component: AgregarTransaccion;
  let fixture: ComponentFixture<AgregarTransaccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarTransaccion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTransaccion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
