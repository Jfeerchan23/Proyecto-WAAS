import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  Dashboard,
  DashboardService,
} from 'src/app/servicios/dashboard.service';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';

@Component({
  selector: 'app-admipaciente',
  templateUrl: './admipaciente.component.html',
  styleUrls: ['./admipaciente.component.css'],
})
export class AdmipacienteComponent {
  paciente: any = {};
  idPaciente:any;
  form!: FormGroup;

  titulo:any = "Agregar Paciente";

  public dataDashboard$!: Observable<Dashboard>;
  constructor(
    dashboardService: DashboardService,
    private usuariosService: UsuariosService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'paciente',
    };
  }

  ngOnInit():void{
    this.route.params.subscribe(
      params => {

        if (params['idPaciente']) {
          this.idPaciente=params['idPaciente'];
         this.obtenerPaciente(this.idPaciente);
         this.titulo="Editar Paciente";
				}
        this.form = new FormGroup({
          nombrePaciente: new FormControl(this.paciente.nombrePaciente, Validators.required),
          CURPPaciente: new FormControl(this.paciente.CURPPaciente, Validators.required),
          fechaNacimientoPaciente: new FormControl(this.paciente.fechaNacimientoPaciente, Validators.required),
          correoPaciente: new FormControl(this.paciente.correoPaciente, Validators.required),
          telefonoPaciente: new FormControl(this.paciente.telefonoPaciente, Validators.required),
          direccionPaciente: new FormControl(this.paciente.direccionPaciente, Validators.required),
          bloqueadoPaciente: new FormControl(this.paciente.bloqueadoPaciente, Validators.required),
        });
      }

    );
  }
  formSubmit() {
    console.log(this.idPaciente);
    this.paciente.bloqueadoPaciente===false? 0:1;
    if (this.idPaciente) {
      this.usuariosService
        .editarPaciente(this.paciente, this.idPaciente)
        .subscribe();
      this._snackBar.open('Paciente actualizado', '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      this.router.navigate(['/dashboard/administracion']);
    } else {
      this.usuariosService.guardarPaciente(this.paciente).subscribe();
      this._snackBar.open('Paciente creado', '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
    this.form.reset();
  }

  obtenerPaciente(id:any){
    this.usuariosService.obtenerPaciente(id).subscribe(
      response => {
        this.paciente = response;
        console.log(this.paciente);
      },
      error => {
        console.log(error);
      }
    )
  }
}
