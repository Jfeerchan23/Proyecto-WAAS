import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaPacienteComponent } from './agenda-paciente.component';

describe('AgendaPacienteComponent', () => {
  let component: AgendaPacienteComponent;
  let fixture: ComponentFixture<AgendaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
