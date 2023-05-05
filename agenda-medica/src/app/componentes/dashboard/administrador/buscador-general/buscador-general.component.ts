import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import {
  Dashboard,
  DashboardService,
} from 'src/app/servicios/dashboard.service';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';

@Component({
  selector: 'app-buscador-general',
  templateUrl: './buscador-general.component.html',
  styleUrls: ['./buscador-general.component.css'],
})
export class BuscadorGeneralComponent {
  form!: FormGroup;
  medicos: any = {};
  formUsuario: any = {};

  public dataDashboard$!: Observable<Dashboard>;

  //Columnas de la tabla
  displayedColumns: string[] = ['id', 'nombre', 'curp', 'telefono', 'opciones'];

  //Datos de ejemplo
  usuarios: any[] = [];
  recuperados: any = {};
  dataSource: any;

  //Paginador
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    dashboardService: DashboardService,
    private usuariosService: UsuariosService,
    private fb: FormBuilder
  ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'buscador-general',
    };
    this.form = new FormGroup({
      tipo: new FormControl(this.formUsuario.tipo, Validators.required),
      curp: new FormControl(this.formUsuario.curp, Validators.required),
    });
  }

  ngOnInit(): void {
    this.inicializar();
  }

  inicializar() {
    this.formUsuario.tipo = '1';
    this.usuariosService.obtenerTodosUsuarios().subscribe(
      (response) => {
        this.recuperados = response;
       this.onSelectChange(this.formUsuario.tipo);
      },

      (error) => {
        console.log(error);
      }
    );
  }

  onSelectChange(tipo: string) {
    this.usuarios = [];
    switch (tipo) {
      case '1':
        let medico = this.recuperados.medicos;

        for (let i = 0; i < medico.length; i++) {
          const objecto = {
            id: medico[i].idMedico,
            nombre: medico[i].nombreMedico,
            curp: medico[i].CURPMedico,
            telefono: medico[i].telefonoMedico,
          };
          this.usuarios.push(objecto);
        }
        break;
      case '2':
        let paciente = this.recuperados.pacientes;

        for (let i = 0; i < paciente.length; i++) {
          const objecto = {
            id: paciente[i].idPaciente,
            nombre: paciente[i].nombrePaciente,
            curp: paciente[i].CURPPaciente,
            telefono: paciente[i].telefonoPaciente,
          };
          this.usuarios.push(objecto);
        }
        break;
      case '3':
        let recepcionistas = this.recuperados.recepcionistas;

        for (let i = 0; i < recepcionistas.length; i++) {
          const objecto = {
            id: recepcionistas[i].idRecepcionista,
            nombre: recepcionistas[i].nombreRecepcionista,
            curp: recepcionistas[i].CURPRecepcionista,
            telefono: recepcionistas[i].telefonoRecepcionista,
          };
          this.usuarios.push(objecto);
        }
       ;
        break;
    }
    this.dataSource = new MatTableDataSource(this.usuarios);
    this.dataSource.paginator = this.paginator;
    this.paginator.firstPage()
  }
}
