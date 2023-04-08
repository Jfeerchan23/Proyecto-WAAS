import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-listadepacientes',
  templateUrl: './listadepacientes.component.html',
  styleUrls: ['./listadepacientes.component.css']
})
export class ListadepacientesComponent {
  public dataDashboard$!: Observable<Dashboard>;

  constructor(private dashboardService: DashboardService) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'lista-pacientes'
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;
  }
}
