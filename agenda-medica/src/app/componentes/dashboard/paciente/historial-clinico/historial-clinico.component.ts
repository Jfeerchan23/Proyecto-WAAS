import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css']
})
export class HistorialClinicoComponent {

  public dataDashboard$!: Observable<Dashboard> ;
  constructor(
    dashboardService: DashboardService,
    
    ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'historial-clinico'
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;

  }
  displayedColumns: string[] = ['fecha', 'hora', 'medico', 'consultorio','informacion','opciones'];
  dataSource = new MatTableDataSource<cita>(cita);

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
  informacion: string;
}

const cita: cita[] = [
  {fecha: 1, medico: 'Hydrogen', hora: 1.0079, consultorio: 'H',informacion: "ahjsk"},
  {fecha: 2, medico: 'Helium', hora: 4.0026, consultorio: 'He',informacion: "ahjsk"},
  {fecha: 3, medico: 'Lithium', hora: 6.941, consultorio: 'Li',informacion: "ahjsk"},
  {fecha: 4, medico: 'Beryllium', hora: 9.0122, consultorio: 'Be',informacion: "ahjsk"},
  {fecha: 5, medico: 'Boron', hora: 10.811, consultorio: 'B',informacion: "ahjsk"},
  {fecha: 6, medico: 'Carbon', hora: 12.0107, consultorio: 'C',informacion: "ahjsk"},
  {fecha: 7, medico: 'Nitrogen', hora: 14.0067, consultorio: 'N',informacion: "ahjsk"},
  {fecha: 8, medico: 'Oxygen', hora: 15.9994, consultorio: 'O',informacion: "ahjsk"},
  {fecha: 9, medico: 'Fluorine', hora: 18.9984, consultorio: 'F',informacion: "ahjsk"},
  {fecha: 10, medico: 'Neon', hora: 20.1797, consultorio: 'Ne', informacion: "hajja"},
  {fecha: 11, medico: 'Sodium', hora: 22.9897, consultorio: 'Na',informacion: "hajja"},
  {fecha: 12, medico: 'Magnesium', hora: 24.305, consultorio: 'Mg',informacion: "hajja"},
  {fecha: 13, medico: 'Aluminum', hora: 26.9815, consultorio: 'Al',informacion: "hajja"},
  {fecha: 14, medico: 'Silicon', hora: 28.0855, consultorio: 'Si',informacion: "hajja"},
  {fecha: 15, medico: 'Phosphorus', hora: 30.9738, consultorio: 'P',informacion: "hajja"},
  {fecha: 16, medico: 'Sulfur', hora: 32.065, consultorio: 'S',informacion: "hajja"},
  {fecha: 17, medico: 'Chlorine', hora: 35.453, consultorio: 'Cl',informacion: "hajja"},
  {fecha: 18, medico: 'Argon', hora: 39.948, consultorio: 'Ar',informacion: "hajja"},
  {fecha: 19, medico: 'Potassium', hora: 39.0983, consultorio: 'K',informacion: "hajja"},
  {fecha: 20, medico: 'Calcium', hora: 40.078, consultorio: 'Ca',informacion: "hajja"},
];

