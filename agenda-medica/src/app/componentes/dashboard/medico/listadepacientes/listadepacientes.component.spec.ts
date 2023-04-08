import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadepacientesComponent } from './listadepacientes.component';

describe('ListadepacientesComponent', () => {
  let component: ListadepacientesComponent;
  let fixture: ComponentFixture<ListadepacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadepacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadepacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
