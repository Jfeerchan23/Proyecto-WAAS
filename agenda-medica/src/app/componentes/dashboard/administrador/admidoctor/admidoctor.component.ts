import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-admidoctor',
  templateUrl: './admidoctor.component.html',
  styleUrls: ['./admidoctor.component.css']
})
export class AdmidoctorComponent {
  public dataDashboard$!: Observable<Dashboard> ;
  constructor(
    dashboardService: DashboardService,
    
    ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'medico'
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;

  }
  
}
