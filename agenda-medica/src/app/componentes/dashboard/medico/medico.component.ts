import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent {
  public dataDashboard$!: Observable<Dashboard>;
  constructor(
    private dashboardService: DashboardService, 
  ) { 
   
    this.dataDashboard$ = dashboardService.dashboardObservable;
  }
  ngOnInit(): void {
    
  }


}
