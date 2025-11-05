import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesFinanzas } from './reportes-finanzas';

describe('ReportesFinanzas', () => {
  let component: ReportesFinanzas;
  let fixture: ComponentFixture<ReportesFinanzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesFinanzas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportesFinanzas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
