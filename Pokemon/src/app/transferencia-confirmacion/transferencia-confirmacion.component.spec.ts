import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaConfirmacionComponent } from './transferencia-confirmacion.component';

describe('TransferenciaConfirmacionComponent', () => {
  let component: TransferenciaConfirmacionComponent;
  let fixture: ComponentFixture<TransferenciaConfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferenciaConfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferenciaConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
