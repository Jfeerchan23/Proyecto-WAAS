import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-atenderpaciente-diagnostico',
  templateUrl: './atenderpaciente-diagnostico.component.html',
  styleUrls: ['./atenderpaciente-diagnostico.component.css']
})
export class AtenderpacienteDiagnosticoComponent {
  public dataDashboard$!: Observable<Dashboard>;

  constructor(private dashboardService: DashboardService) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'lista-pacientes'
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;
  }
}
