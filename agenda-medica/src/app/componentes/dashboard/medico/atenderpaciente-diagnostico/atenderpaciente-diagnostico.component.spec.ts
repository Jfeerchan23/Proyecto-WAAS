import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtenderpacienteDiagnosticoComponent } from './atenderpaciente-diagnostico.component';

describe('AtenderpacienteDiagnosticoComponent', () => {
  let component: AtenderpacienteDiagnosticoComponent;
  let fixture: ComponentFixture<AtenderpacienteDiagnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtenderpacienteDiagnosticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtenderpacienteDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
