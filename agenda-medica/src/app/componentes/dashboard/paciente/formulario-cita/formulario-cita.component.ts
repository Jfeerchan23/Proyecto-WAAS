import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService} from 'src/app/servicios/dashboard.service';

@Component({
  selector: 'app-formulario-cita',
  templateUrl: './formulario-cita.component.html',
  styleUrls: ['./formulario-cita.component.css']
})
export class FormularioCitaComponent {

  public dataDashboard$: Observable<Dashboard> | undefined;
  constructor(private dashboardService: DashboardService) {
    dashboardService.dashboardObservableData = {
      tituloSeccion: 'Paciente',
      menuActivo: 'nueva-cita',
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;
  }
  ngOnInit(): void {}


  
}
