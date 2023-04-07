import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmipacienteComponent } from './admipaciente.component';

describe('AdmipacienteComponent', () => {
  let component: AdmipacienteComponent;
  let fixture: ComponentFixture<AdmipacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmipacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmipacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
