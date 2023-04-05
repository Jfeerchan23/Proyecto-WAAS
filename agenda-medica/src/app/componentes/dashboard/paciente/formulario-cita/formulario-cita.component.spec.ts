import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCitaComponent } from './formulario-cita.component';

describe('FormularioCitaComponent', () => {
  let component: FormularioCitaComponent;
  let fixture: ComponentFixture<FormularioCitaComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
