import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaRecepcionComponent } from './agenda-recepcion.component';

describe('AgendaRecepcionComponent', () => {
  let component: AgendaRecepcionComponent;
  let fixture: ComponentFixture<AgendaRecepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaRecepcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaRecepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
