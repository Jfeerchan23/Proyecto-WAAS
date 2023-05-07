import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import {
  Dashboard,
  DashboardService,
} from 'src/app/servicios/dashboard.service';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';

interface Especialidad {
  idEspecialidad: number;
  nombreEspecialidad: string;
}

@Component({
  selector: 'app-admidoctor',
  templateUrl: './admidoctor.component.html',
  styleUrls: ['./admidoctor.component.css'],
})
export class AdmidoctorComponent {
  medico: any = {};
  idMedico:any;
  form: FormGroup;
  titulo:any = "Agregar Medico";
  public dataDashboard$!: Observable<Dashboard>;
  constructor(
    dashboardService: DashboardService,
    private usuariosService: UsuariosService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'medico',
    };

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

   /* Valores inicializados */
   options: Especialidad[] = [];
   filteredOptions!: Observable<Especialidad[]>;

  ngOnInit():void{


    
    this.route.params.subscribe((params) => {
      if (params['idMedico']) {
        this.idMedico = params['idMedico'];
        this.obtenerMedico(this.idMedico);
        this.titulo = 'Editar Medico';
      }
  
    });
  

    this.usuariosService.obtenerEspecialidades().subscribe(
      (response)=>{
        this.options = response.map((especialidad:Especialidad)=> especialidad);
        console.log(this.options);
        this.filteredOptions = this._setupFilterObservable(
          this.form.controls['especialidadMedico'],
          this.options
        );
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
  private _setupFilterObservable(
    control: AbstractControl,
    options: Especialidad[]
  ): Observable<Especialidad[]> {
    return control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(options, value))
    );
  }
  
  private _filter(options: Especialidad[], value: string): Especialidad[] {
    const filterValue = String(value).toLowerCase();
    const filteredOptions = options.filter((option) =>
    option.nombreEspecialidad.toLowerCase().includes(filterValue)
  );
   console.log(options);
    return options.filter((option) =>
      option.nombreEspecialidad.toLowerCase().includes(filterValue)
    );
  }

}