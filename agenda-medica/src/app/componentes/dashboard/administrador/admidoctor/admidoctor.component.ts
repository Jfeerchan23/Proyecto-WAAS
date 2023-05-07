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
  selector: 'app-admidoctor',
  templateUrl: './admidoctor.component.html',
  styleUrls: ['./admidoctor.component.css'],
})
export class AdmidoctorComponent {
  medico: any = {};
  idMedico:any;
  form!: FormGroup;
  titulo:any = "Agregar Medico";
  public dataDashboard$!: Observable<Dashboard>;
  constructor(
    dashboardService: DashboardService,
    private usuariosService: UsuariosService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'medico',
    };


  }


  ngOnInit():void{
    this.route.params.subscribe(
      params => {

        if (params['idMedico']) {
        
        this.idMedico=params['idMedico'];
        this.obtenerMedico(this.idMedico);
        this.titulo="Editar Medico";
				}
        this.form = new FormGroup({
          nombreMedico: new FormControl(this.medico.nombreMedico, Validators.required),
          CURPMedico: new FormControl(this.medico.CURPMedico, Validators.required),
          fechaNacimientoMedico: new FormControl(this.medico.fechaNacimientoMedico, Validators.required),
          correoMedico: new FormControl(this.medico.correoMedico, Validators.required),
          telefonoMedico: new FormControl(this.medico.telefonoMedico, Validators.required),
          direccionMedico: new FormControl(this.medico.direccionMedico, Validators.required),
          consultorioMedico: new FormControl(this.medico.consultorioMedico, Validators.required),
          especialidadMedico: new FormControl(this.medico.especialidadMedico, Validators.required),
          cedulaProfesionalMedico: new FormControl(this.medico.cedulaProfesionalMedico, Validators.required),
          bloqueadoMedico: new FormControl(this.medico.bloqueadoMedico, Validators.required),
        });
 
      }

    );
    
  }
  formSubmit() {

    console.log(this.idMedico);
    this.medico.bloqueadoMedico===false? 0:1;
    if (this.idMedico) {
      this.usuariosService
        .editarMedico(this.medico, this.idMedico)
        .subscribe();
      this._snackBar.open('Medico actualizado', '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      this.router.navigate(['/dashboard/administracion']);
    } else {
      this.usuariosService.guardarMedico(this.medico).subscribe();
      this._snackBar.open('Medico creado', '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });

    }

    this.form.reset();

  }

  obtenerMedico(id:any){
    this.usuariosService.obtenerMedico(id).subscribe(
      response => {
        this.medico = response;
        console.log(this.medico);
      },
      error => {
        console.log(error);
      }
    )

  }
}
