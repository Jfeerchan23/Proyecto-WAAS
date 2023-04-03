import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public dataDashboard$: Observable<Dashboard>;
  constructor(
    private dashboardService: DashboardService, 
  ) { 
    this.dataDashboard$ = dashboardService.dashboardObservable;
  }
  ngOnInit(): void {
  }
}
