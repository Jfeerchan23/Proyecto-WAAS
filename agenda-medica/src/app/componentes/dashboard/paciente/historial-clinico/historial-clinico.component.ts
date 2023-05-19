import { Component, ViewChild } from '@angular/core';
import {  DashboardService } from 'src/app/servicios/dashboard.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.css']
})
export class HistorialClinicoComponent {
  idPaciente :any;
  citas: any = [];
  idCita:any;
  indice: any;
  fechaHoy:any;
  horaActual:any;
  constructor(
    dashboardService: DashboardService,
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'historial-clinico'
    };
  }
  /* Columnas de la tabla */
  displayedColumns: string[] = ['fecha', 'hora', 'medico', 'consultorio','modalidad','informacion','opciones'];
  dataSource :any;

 /*  Paginación de la tabla */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(){
       //CUANDO SE ENCUENTRA EN EL PERFIL DE UN PACIENTE
       this.route.params.subscribe((params) => {
        if (params['idPaciente']) {
          this.idPaciente = params['idPaciente'];
         this.usuariosService.obtenerHistorialClinico(this.idPaciente).subscribe(
          (response)=>{
           this.citas = response;
       
           this.dataSource = new MatTableDataSource(this.citas);
           this.dataSource.paginator = this.paginator;
           this.paginator.firstPage();
           this.fechaHoy = new Date().toISOString().slice(0, 10);
           
           const date = new Date();
           const options = { hour12: false };
           this.horaActual = date.toLocaleTimeString('es-ES', options);
          
          }
         )
        }
       
      });
     
  }

  seleccionarCita(id:any){
    this.idCita=id;
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

    this.usuariosService.actualizarCita(cita, this.idCita).subscribe(

    )
    
  }


}