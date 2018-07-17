import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaSeleccionAComponent } from './transferencia-seleccion-a.component';

describe('TransferenciaSeleccionAComponent', () => {
  let component: TransferenciaSeleccionAComponent;
  let fixture: ComponentFixture<TransferenciaSeleccionAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaSeleccionAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaSeleccionAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
