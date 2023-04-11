import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitasProgramadasComponent } from './citas-programadas.component';

describe('CitasProgramadasComponent', () => {
  let component: CitasProgramadasComponent;
  let fixture: ComponentFixture<CitasProgramadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitasProgramadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitasProgramadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
