import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-admipaciente',
  templateUrl: './admipaciente.component.html',
  styleUrls: ['./admipaciente.component.css']
})
export class AdmipacienteComponent {
  public dataDashboard$!: Observable<Dashboard> ;
  constructor(
    dashboardService: DashboardService,
    
    ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'paciente'
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;

  }

}
