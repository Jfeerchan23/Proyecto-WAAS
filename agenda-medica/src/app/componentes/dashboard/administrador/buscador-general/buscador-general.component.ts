import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-buscador-general',
  templateUrl: './buscador-general.component.html',
  styleUrls: ['./buscador-general.component.css']
})
export class BuscadorGeneralComponent {
  form!: FormGroup;
  public dataDashboard$!: Observable<Dashboard> ;
  constructor(
    dashboardService: DashboardService,
    private fb: FormBuilder
    ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'buscador-general'
    };
    this.form = this.fb.group({
      curp: new FormControl('', Validators.required),
    });

  }
  //Columnas de la tabla
  displayedColumns: string[] = ['id', 'nombre', 'curp', 'telefono','opciones'];
  dataSource = new MatTableDataSource<usuario>(usuario);

  //Paginador
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface usuario {
  nombre: string;
  id: number;
  curp: number;
  telefono: string;
}

//Datos de ejemplo
const usuario: usuario[] = [
  {id: 1, nombre: 'Hydrogen', curp: 1.0079, telefono: 'H'},
  {id: 2, nombre: 'Helium', curp: 4.0026, telefono: 'He'},
  {id: 3, nombre: 'Lithium', curp: 6.941, telefono: 'Li'},
  {id: 4, nombre: 'Beryllium', curp: 9.0122, telefono: 'Be'},
  {id: 5, nombre: 'Boron', curp: 10.811, telefono: 'B'},
  {id: 6, nombre: 'Carbon', curp: 12.0107, telefono: 'C'},
  {id: 7, nombre: 'Nitrogen', curp: 14.0067, telefono: 'N'},
  {id: 8, nombre: 'Oxygen', curp: 15.9994, telefono: 'O'},
  {id: 9, nombre: 'Fluorine', curp: 18.9984, telefono: 'F'},
  {id: 10, nombre: 'Neon', curp: 20.1797, telefono: 'Ne'},
  {id: 11, nombre: 'Sodium', curp: 22.9897, telefono: 'Na'},
  {id: 12, nombre: 'Magnesium', curp: 24.305, telefono: 'Mg'},
  {id: 13, nombre: 'Aluminum', curp: 26.9815, telefono: 'Al'},
  {id: 14, nombre: 'Silicon', curp: 28.0855, telefono: 'Si'},
  {id: 15, nombre: 'Phosphorus', curp: 30.9738, telefono: 'P'},
  {id: 16, nombre: 'Sulfur', curp: 32.065, telefono: 'S'},
  {id: 17, nombre: 'Chlorine', curp: 35.453, telefono: 'Cl'},
  {id: 18, nombre: 'Argon', curp: 39.948, telefono: 'Ar'},
  {id: 19, nombre: 'Potassium', curp: 39.0983, telefono: 'K'},
  {id: 20, nombre: 'Calcium', curp: 40.078, telefono: 'Ca'},
];

