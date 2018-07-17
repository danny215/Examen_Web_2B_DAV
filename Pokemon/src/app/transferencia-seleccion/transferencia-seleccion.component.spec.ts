import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaSeleccionComponent } from './transferencia-seleccion.component';

describe('TransferenciaSeleccionComponent', () => {
  let component: TransferenciaSeleccionComponent;
  let fixture: ComponentFixture<TransferenciaSeleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaSeleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
