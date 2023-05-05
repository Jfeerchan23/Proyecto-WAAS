import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  form!: FormGroup;
  public dataDashboard$!: Observable<Dashboard>;
  constructor(
    dashboardService: DashboardService,
    private usuariosService: UsuariosService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'recepcion',
    };

  }

  ngOnInit(): void{
    this.form = new FormGroup({
      nombreRecepcionista: new FormControl(this.recepcionista.nombreRecepcionista, Validators.required),
      CURPRecepcionista: new FormControl(this.recepcionista.CURPRecepcionista, Validators.required),
      fechaNacimientoRecepcionista: new FormControl(this.recepcionista.fechaNacimientoRecepcionista, Validators.required),
      correoRecepcionista: new FormControl(this.recepcionista.correoRecepcionista, Validators.required),
      telefonoRecepcionista: new FormControl(this.recepcionista.telefonoRecepcionista, Validators.required),
      direccionRecepcionista: new FormControl(this.recepcionista.direccionRecepcionista, Validators.required),
    });



  }
  formSubmit() {
    /*  Se deberán guardar los datos del formulario */
    
this.usuariosService.guardarRecepcionista(this.recepcionista).subscribe(

)
    

    this._snackBar.open('Recepcionista creado', '', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
    
    this.form.reset();
  }
  
}
