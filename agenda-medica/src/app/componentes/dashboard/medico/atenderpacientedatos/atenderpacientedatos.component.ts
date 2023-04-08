import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-atenderpacientedatos',
  templateUrl: './atenderpacientedatos.component.html',
  styleUrls: ['./atenderpacientedatos.component.css']
})
export class AtenderpacientedatosComponent {
  public dataDashboard$!: Observable<Dashboard>;

  constructor(private dashboardService: DashboardService) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'lista-pacientes'
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;
  }
}
