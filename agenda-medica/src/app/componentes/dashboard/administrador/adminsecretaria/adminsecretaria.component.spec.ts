import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsecretariaComponent } from './adminsecretaria.component';

describe('AdminsecretariaComponent', () => {
  let component: AdminsecretariaComponent;
  let fixture: ComponentFixture<AdminsecretariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsecretariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsecretariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
