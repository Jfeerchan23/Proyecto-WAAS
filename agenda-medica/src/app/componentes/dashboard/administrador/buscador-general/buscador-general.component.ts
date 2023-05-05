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
  recepcionistas: any = {};
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
    this.formUsuario.tipo=1;
    this.usuariosService.obtenerTodosUsuarios().subscribe(
      (response) => {
        this.recuperados = response;
        this.recepcionistas = response.recepcionistas;

        for (let i = 0; i < this.recepcionistas.length; i++) {
          console.log(this.recepcionistas[i]);
          const objecto = {
            id: this.recepcionistas[i].idRecepcionista,
            nombre: this.recepcionistas[i].nombreRecepcionista,
            curp: this.recepcionistas[i].CURPRecepcionista,
            telefono: this.recepcionistas[i].telefonoRecepcionista,
          };
          this.usuarios.push(objecto);
        }
        this.dataSource = new MatTableDataSource(this.usuarios);
        this.dataSource.paginator = this.paginator;
        this.paginator.firstPage();
      },

      (error) => {
        console.log(error);
      }
    );
  }

  onSelectChange() {
    console.log('El valor seleccionado ha cambiado a: ' + this.formUsuario.tipo);
    // hacer algo más aquí
  }
}
