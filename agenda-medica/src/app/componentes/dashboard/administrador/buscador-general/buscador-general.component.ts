import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-buscador-general',
  templateUrl: './buscador-general.component.html',
  styleUrls: ['./buscador-general.component.css']
})
export class BuscadorGeneralComponent {
  public dataDashboard$!: Observable<Dashboard> ;
  constructor(
    dashboardService: DashboardService,
    
    ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'buscador-general'
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;

  }
}
