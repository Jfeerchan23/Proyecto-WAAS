import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, startWith, map } from 'rxjs';
import { DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-citas-programadas',
  templateUrl: './citas-programadas.component.html',
  styleUrls: ['./citas-programadas.component.css']
})
export class CitasProgramadasComponent {
  form: FormGroup;
  medicos: string[] = ['José López', 'Arturo Ramirez', 'Jesús Hernández'];
  filteredMedicos!: Observable<string[]>;
  constructor(dashboardService: DashboardService, private fb: FormBuilder) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'citas-programadas',
    };
    this.form = this.fb.group({
      curp: new FormControl('', Validators.required),
      medico: new FormControl('', Validators.required),
    });
    
  }
  /* Columnas de la tabla */
  displayedColumns: string[] = ['fecha', 'hora', 'paciente','medico', 'consultorio','opciones'];
  dataSource = new MatTableDataSource<cita>(cita);

  ngOnInit() {
    //Autocompletado del campo médico
    this.filteredMedicos = this._setupFilterObservable(
      this.form.controls['medico'],
      this.medicos
    );
  }

  //Filtrado del autocompletado
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

  

 /*  Paginación de la tabla */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
export interface cita {
  medico: string;
  fecha: number;
  hora: number;
  consultorio: string;
  paciente: string;
}
/* Datos de ejemplo */
const cita: cita[] = [
  {fecha: 1, medico: 'Hydrogen', hora: 1.0079, consultorio: 'H',paciente: "ahjsk"},
  {fecha: 2, medico: 'Helium', hora: 4.0026, consultorio: 'He',paciente: "ahjsk"},
  {fecha: 3, medico: 'Lithium', hora: 6.941, consultorio: 'Li',paciente: "ahjsk"},
  {fecha: 4, medico: 'Beryllium', hora: 9.0122, consultorio: 'Be',paciente: "ahjsk"},
  {fecha: 5, medico: 'Boron', hora: 10.811, consultorio: 'B',paciente: "ahjsk"},
  {fecha: 6, medico: 'Carbon', hora: 12.0107, consultorio: 'C',paciente: "ahjsk"},
  {fecha: 7, medico: 'Nitrogen', hora: 14.0067, consultorio: 'N',paciente: "ahjsk"},
  {fecha: 8, medico: 'Oxygen', hora: 15.9994, consultorio: 'O',paciente: "ahjsk"},
  {fecha: 9, medico: 'Fluorine', hora: 18.9984, consultorio: 'F',paciente: "ahjsk"},
  {fecha: 10, medico: 'Neon', hora: 20.1797, consultorio: 'Ne', paciente: "hajja"},
  {fecha: 11, medico: 'Sodium', hora: 22.9897, consultorio: 'Na',paciente: "hajja"},
  {fecha: 12, medico: 'Magnesium', hora: 24.305, consultorio: 'Mg',paciente: "hajja"},
  {fecha: 13, medico: 'Aluminum', hora: 26.9815, consultorio: 'Al',paciente: "hajja"},
  {fecha: 14, medico: 'Silicon', hora: 28.0855, consultorio: 'Si',paciente: "hajja"},
  {fecha: 15, medico: 'Phosphorus', hora: 30.9738, consultorio: 'P',paciente: "hajja"},
  {fecha: 16, medico: 'Sulfur', hora: 32.065, consultorio: 'S',paciente: "hajja"},
  {fecha: 17, medico: 'Chlorine', hora: 35.453, consultorio: 'Cl',paciente: "hajja"},
  {fecha: 18, medico: 'Argon', hora: 39.948, consultorio: 'Ar',paciente: "hajja"},
  {fecha: 19, medico: 'Potassium', hora: 39.0983, consultorio: 'K',paciente: "hajja"},
  {fecha: 20, medico: 'Calcium', hora: 40.078, consultorio: 'Ca',paciente: "hajja"},
];

