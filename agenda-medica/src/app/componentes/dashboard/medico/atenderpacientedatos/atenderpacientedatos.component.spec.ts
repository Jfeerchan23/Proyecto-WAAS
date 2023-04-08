import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtenderpacientedatosComponent } from './atenderpacientedatos.component';

describe('AtenderpacientedatosComponent', () => {
  let component: AtenderpacientedatosComponent;
  let fixture: ComponentFixture<AtenderpacientedatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtenderpacientedatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtenderpacientedatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
