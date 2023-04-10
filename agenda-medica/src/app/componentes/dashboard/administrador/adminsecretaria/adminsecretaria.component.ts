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

@Component({
  selector: 'app-adminsecretaria',
  templateUrl: './adminsecretaria.component.html',
  styleUrls: ['./adminsecretaria.component.css'],
})
export class AdminsecretariaComponent {
  form: FormGroup;
  public dataDashboard$!: Observable<Dashboard>;
  constructor(
    dashboardService: DashboardService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'recepcion',
    };

    this.form = this.fb.group({
      nombre: new FormControl('', Validators.required),
      curp: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
    });
  }
  formSubmit() {
    /*  Se deberán guardar los datos del formulario */
    console.log(this.form.value);

    this._snackBar.open('Usuario creado', '', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
    this.form.reset();
  }
}
