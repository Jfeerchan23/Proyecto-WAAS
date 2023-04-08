import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAgendaComponent } from './crear-agenda.component';

describe('CrearAgendaComponent', () => {
  let component: CrearAgendaComponent;
  let fixture: ComponentFixture<CrearAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
