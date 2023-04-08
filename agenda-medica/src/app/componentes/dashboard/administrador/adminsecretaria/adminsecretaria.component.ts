import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-adminsecretaria',
  templateUrl: './adminsecretaria.component.html',
  styleUrls: ['./adminsecretaria.component.css']
})
export class AdminsecretariaComponent {
  public dataDashboard$!: Observable<Dashboard> ;
  constructor(
    dashboardService: DashboardService,
    
    ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'recepcion'
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;

  }
}
