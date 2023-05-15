import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  dataUsuarios: any = {};
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      usuario: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),

    });
  }

  ingresar() {
    this.router.navigate(['dashboard/paciente']);
    /* this._snackBar.open('Usuario o contraseña inválidos', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    }); */
  }


  onSubmitLogin(){
    this.dataUsuarios.email_usuario = this.form.value.usuario;
    this.dataUsuarios.password_usuario = this.form.value.password;
    this.usuariosService.login(this.dataUsuarios).subscribe(
      (response)=>{
        console.log(response);
      }
    )

  }

}
