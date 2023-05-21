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
  selector: 'app-adminsecretaria',
  templateUrl: './adminsecretaria.component.html',
  styleUrls: ['./adminsecretaria.component.css'],
})
export class AdminsecretariaComponent {
  recepcionista: any = {};
  idRecepcionista: any;
  form!: FormGroup;
  show:any;
  titulo: any = 'Agregar Recepcionista';

  public dataDashboard$!: Observable<Dashboard>;
  constructor(
    dashboardService: DashboardService,
    private usuariosService: UsuariosService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'recepcion',
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['idRecepcionista']) {
        this.idRecepcionista = params['idRecepcionista'];
        this.obtenerRecepcionista(this.idRecepcionista);
        this.titulo = 'Editar Recepcionista';
        this.show=false;
        this.form = new FormGroup({
          nombreRecepcionista: new FormControl(this.recepcionista.nombreRecepcionista,Validators.required),
          CURPRecepcionista: new FormControl(this.recepcionista.CURPRecepcionista,Validators.required),
          fechaNacimientoRecepcionista: new FormControl(this.recepcionista.fechaNacimientoRecepcionista,Validators.required),
          correoRecepcionista: new FormControl(this.recepcionista.correoRecepcionista,Validators.required),
          telefonoRecepcionista: new FormControl(this.recepcionista.telefonoRecepcionista,Validators.required),
          direccionRecepcionista: new FormControl(this.recepcionista.direccionRecepcionista,Validators.required),
          bloqueadoRecepcionista: new FormControl(this.recepcionista.bloqueadoRecepcionista),
        });
      }else{
        this.show=true;
        this.form = new FormGroup({
          nombreRecepcionista: new FormControl(this.recepcionista.nombreRecepcionista,Validators.required),
          CURPRecepcionista: new FormControl(this.recepcionista.CURPRecepcionista,Validators.required),
          fechaNacimientoRecepcionista: new FormControl(this.recepcionista.fechaNacimientoRecepcionista,Validators.required),
          correoRecepcionista: new FormControl(this.recepcionista.correoRecepcionista,Validators.required),
          telefonoRecepcionista: new FormControl(this.recepcionista.telefonoRecepcionista,Validators.required),
          direccionRecepcionista: new FormControl(this.recepcionista.direccionRecepcionista,Validators.required),
          contrasenaRecepcionista: new FormControl(this.recepcionista.contrasenaRecepcionista,Validators.required),
          bloqueadoRecepcionista: new FormControl(this.recepcionista.bloqueadoRecepcionista),
        });
      }

    });
  }
  formSubmit() {
    
    this.recepcionista.bloqueadoRecepcionista===false? 0:1;
    console.log(this.recepcionista);
    if (this.idRecepcionista) {
      this.usuariosService
        .editarRecepcionista(this.recepcionista, this.idRecepcionista)
        .subscribe(
          (response)=>{
            this._snackBar.open(response, '', {
              duration: 1000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          }
        );
      this.router.navigate(['/dashboard/administracion']);
    } else {
      this.usuariosService.guardarRecepcionista(this.recepcionista).subscribe(
        (response)=>{
          this._snackBar.open(response, '', {
            duration: 1000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
          });
           this.form.reset();
           this.recepcionista.bloqueadoRecepcionista=false;
        }
      );
     
    }
   
 
  }

  obtenerRecepcionista(id: any) {
    this.usuariosService.obtenerRecepcionista(id).subscribe(
      (response) => {
        this.recepcionista = response;
        console.log(this.recepcionista);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
