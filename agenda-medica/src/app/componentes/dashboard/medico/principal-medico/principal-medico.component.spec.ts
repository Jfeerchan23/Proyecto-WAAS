import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMedicoComponent } from './principal-medico.component';

describe('PrincipalMedicoComponent', () => {
  let component: PrincipalMedicoComponent;
  let fixture: ComponentFixture<PrincipalMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
