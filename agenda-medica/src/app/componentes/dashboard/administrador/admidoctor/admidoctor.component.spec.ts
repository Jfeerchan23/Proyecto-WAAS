import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmidoctorComponent } from './admidoctor.component';

describe('AdmidoctorComponent', () => {
  let component: AdmidoctorComponent;
  let fixture: ComponentFixture<AdmidoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmidoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmidoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
