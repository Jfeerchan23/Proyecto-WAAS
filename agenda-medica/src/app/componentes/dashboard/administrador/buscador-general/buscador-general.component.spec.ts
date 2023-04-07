import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorGeneralComponent } from './buscador-general.component';

describe('BuscadorGeneralComponent', () => {
  let component: BuscadorGeneralComponent;
  let fixture: ComponentFixture<BuscadorGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
