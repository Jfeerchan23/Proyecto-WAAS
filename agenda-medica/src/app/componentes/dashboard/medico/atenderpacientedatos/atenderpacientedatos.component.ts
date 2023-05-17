import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-atenderpacientedatos',
  templateUrl: './atenderpacientedatos.component.html',
  styleUrls: ['./atenderpacientedatos.component.css']
})
export class AtenderpacientedatosComponent {
  public dataDashboard$!: Observable<Dashboard>;
 idPaciente:any;
 paciente:any={};
 idCita:any;
  constructor(
    private dashboardService: DashboardService,
    private usuariosService: UsuariosService,
     private route: ActivatedRoute,
     private location: Location,
    private router: Router
    ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'lista-pacientes'
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;
  }

  ngOnInit():void{
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
          if(params['idCita']){
            this.idCita=params['idCita'];

          }
        });
  }

  regresar(): void {
    this.location.back();
  }

  historialClinicoPaciente(){
    this.router.navigate(['dashboard/medico/historial-clinico',this.idPaciente]);
    
  }
  atenderPaciente(){
    this.router.navigate(['dashboard/medico/paciente-diagnostico',this.idPaciente, this.idCita]);
    
  }
}
