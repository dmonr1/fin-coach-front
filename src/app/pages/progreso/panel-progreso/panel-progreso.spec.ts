import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProgreso } from './panel-progreso';

describe('PanelProgreso', () => {
  let component: PanelProgreso;
  let fixture: ComponentFixture<PanelProgreso>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelProgreso]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelProgreso);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
