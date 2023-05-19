import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-atenderpaciente-diagnostico',
  templateUrl: './atenderpaciente-diagnostico.component.html',
  styleUrls: ['./atenderpaciente-diagnostico.component.css']
})
export class AtenderpacienteDiagnosticoComponent {
  public dataDashboard$!: Observable<Dashboard>;
 idPaciente:any;
 paciente:any;
 notasConsulta:any;
 idCita:any;
 hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  constructor(
    private dashboardService: DashboardService,
    private location: Location,
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
   private router: Router) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'lista-pacientes'
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;
  }


  ngOnInit(){
         //CUANDO SE ENCUENTRA EN EL PERFIL DE UN MEDICO
         this.route.params.subscribe((params) => {
          if (params['idPaciente']) {
            this.idPaciente= params['idPaciente'];
            this.usuariosService.obtenerPaciente(this.idPaciente).subscribe(
              (response)=>{
                console.log(response);
                this.paciente = response;
              }
            )
          }
          if (params['idCita']) {
            this.idCita= params['idCita'];
          }
        });
        setInterval(() => {
          this.increment();
        }, 1000); // Incrementa cada 1 segundo
  }

  regresar(): void {
    this.location.back();
  }

  guardarDiagnostico(){
    const cita = {
      notasConsultas:this.notasConsulta
    }
    this.usuariosService.actualizarCita(cita, this.idCita).subscribe(
      )
      this.router.navigate(['/dashboard/medico/lista-pacientes',sessionStorage.getItem('id')]);
      
  }
  increment() {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes === 60) {
        this.minutes = 0;
        this.hours++;
      }
    }
  }


}