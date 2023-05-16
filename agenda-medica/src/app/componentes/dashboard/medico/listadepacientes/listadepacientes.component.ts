import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';

@Component({
  selector: 'app-listadepacientes',
  templateUrl: './listadepacientes.component.html',
  styleUrls: ['./listadepacientes.component.css']
})
export class ListadepacientesComponent {
  public dataDashboard$!: Observable<Dashboard>;
  idMedico:any;
  idPaciente :any;
  citas: any = [];
  idCita:any;
  indice: any;
  medicos:any={};
  curpPaciente:any;
  citasGeneral:any=[];

  constructor(private dashboardService: DashboardService,
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'lista-pacientes'
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;
  }
    /* Columnas de la tabla */
    displayedColumns: string[] = ['fecha', 'horaInicio', 'horaFin', 'paciente', 'modalidad', 'consultorio','opciones'];
    dataSource :any;

  ngOnInit():void{
     //CUANDO SE ENCUENTRA EN EL PERFIL DE UN PACIENTE
     this.route.params.subscribe((params) => {
      if (params['idMedico']) {
        this.idMedico= params['idMedico'];
        this.usuariosService.citasProgramadasMedico(this.idMedico).subscribe(
          (response)=>{
            this.citas=response;
            this.dataSource = new MatTableDataSource(this.citas);
            this.dataSource.paginator = this.paginator;
            this.paginator.firstPage();
          }
        )
   
      }
    });

  }

   
 /*  Paginación de la tabla */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  seleccionarCita(idCita:any){
    this.idCita=idCita;
  }
  cancelarCita(){
    const cita = {
      idPaciente: null,
      modalidad:null
    }
    this.indice = this.citas.findIndex(
      (cita: any) => cita.idCita === this.idCita
    );

    if (this.indice !== -1) {
      this.citas.splice(this.indice, 1);
      this.dataSource = new MatTableDataSource(this.citas);
      this.dataSource.paginator = this.paginator;
      this.paginator.firstPage();
    }
   
  
    this.usuariosService.editarCita(cita, this.idCita).subscribe(

    )
    }
}
