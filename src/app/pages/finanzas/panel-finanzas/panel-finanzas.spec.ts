import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelFinanzas } from './panel-finanzas';

describe('PanelFinanzas', () => {
  let component: PanelFinanzas;
  let fixture: ComponentFixture<PanelFinanzas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelFinanzas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelFinanzas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
