import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Dashboard, DashboardService} from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-formulario-cita',
  templateUrl: './formulario-cita.component.html',
  styleUrls: ['./formulario-cita.component.css']
})
export class FormularioCitaComponent {
  form: FormGroup;

  public dataDashboard$: Observable<Dashboard> | undefined;
  constructor(
    dashboardService: DashboardService,
    private fb: FormBuilder,
    ) {
    dashboardService.dashboardObservableData = {
      tituloSeccion: 'Paciente',
      menuActivo: 'nueva-cita',
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;
    this.form = this.fb.group({
      nombre: new FormControl('', Validators.required),
			curp: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
			telefono: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
			especialidad: new FormControl('', Validators.required),
      medico: new FormControl('', Validators.required),
			modalidad: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
			hora: new FormControl('', Validators.required)
    });
  }


    
  



  myControl = new FormControl('');
  options: string[] = ['Cardiología', 'Ortopedia','Pediatría'];
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  
}
