import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMeta } from './crear-meta';

describe('CrearMeta', () => {
  let component: CrearMeta;
  let fixture: ComponentFixture<CrearMeta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearMeta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearMeta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
