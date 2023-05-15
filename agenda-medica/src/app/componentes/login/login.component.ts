import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/servicios/storage/storage.service';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  dataUsuarios: any = {};
  datosUsuarios:any={};
  rol:any;
  id:any;
  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private usuariosService: UsuariosService,
    private route: ActivatedRoute,
    private storage:StorageService
  ) {
    this.form = this.fb.group({
      usuario: new FormControl('', Validators.required),
			password: new FormControl('', Validators.required),

    });
  }

 ngOnInit(){
  sessionStorage.removeItem('rol');
  sessionStorage.removeItem('id');
 }

  onSubmitLogin(){
    this.dataUsuarios.email_usuario = this.form.value.usuario;
    this.dataUsuarios.password_usuario = this.form.value.password;
    this.usuariosService.login(this.dataUsuarios).subscribe(
      (response)=>{
      
        this.datosUsuarios=response;
        this.storage.setItem('id',this.datosUsuarios.id);
        this.storage.setItem('rol',this.datosUsuarios.rol);
       this.id= this.storage.getItem('id');
       this.rol=this.storage.getItem('rol');

        switch(this.rol){
          case 1:
            this.router.navigate(['dashboard/paciente/agenda',this.id]);
          break;

          case 2:

          break;

          case 3:
            this.router.navigate(['dashboard/recepcion']);

          break;

          case 4:
            this.router.navigate(['dashboard/administracion']);

          break;
        }

      }
    )

  }

}
