import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMetas } from './lista-metas';

describe('ListaMetas', () => {
  let component: ListaMetas;
  let fixture: ComponentFixture<ListaMetas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMetas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMetas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
