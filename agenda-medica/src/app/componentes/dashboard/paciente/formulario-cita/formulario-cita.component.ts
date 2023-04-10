import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, map, startWith } from 'rxjs';
import {
  Dashboard,
  DashboardService,
} from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-formulario-cita',
  templateUrl: './formulario-cita.component.html',
  styleUrls: ['./formulario-cita.component.css'],
})
export class FormularioCitaComponent {
  form: FormGroup;
  constructor(
    dashboardService: DashboardService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'nueva-cita',
    };

    this.form = this.fb.group({
      nombre: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      curp: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      especialidad: new FormControl('', Validators.required),
      medico: new FormControl('', Validators.required),
      modalidad: new FormControl('', Validators.required),
      fecha: new FormControl('', Validators.required),
      hora: new FormControl('', Validators.required),
    });
  }

  /* Valores inicializados */
  options: string[] = ['Cardiología', 'Ortopedia', 'Pediatría'];
  medicos: string[] = ['José López', 'Arturo Ramirez', 'Jesús Hernández'];
  filteredOptions!: Observable<string[]>;
  filteredMedicos!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this._setupFilterObservable(
      this.form.controls['especialidad'],
      this.options
    );
    this.filteredMedicos = this._setupFilterObservable(
      this.form.controls['medico'],
      this.medicos
    );
  }

  //Métodos para el autocompletado de los campos especialidad y médicos
  private _setupFilterObservable(
    control: AbstractControl,
    options: string[]
  ): Observable<string[]> {
    return control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(options, value))
    );
  }

  private _filter(options: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  formSubmit() {
    /*  Se deberán guardar los datos del formulario */
    console.log(this.form.value);

    this._snackBar.open('Cita guardada', '', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
    this.form.reset();
  }
}
