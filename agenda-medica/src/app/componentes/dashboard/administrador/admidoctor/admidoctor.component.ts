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
  idEspecialidad:any;
  show:any;
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

  

  }

   /* Valores inicializados */
   options: any = [];
   filteredOptions!: Observable<any>;

  ngOnInit():void{
    this.usuariosService.obtenerEspecialidades().subscribe(
      (response)=>{
        this.options = response.map((especialidad:any)=> especialidad);
        console.log(this.options);
        this.filteredOptions = this._setupFilterObservable(
          this.form.controls['especialidadMedico'],
          this.options
        );
      }
    );  

    
    this.route.params.subscribe((params) => {
      if (params['idMedico']) {
        this.idMedico = params['idMedico'];
        this.obtenerMedico(this.idMedico);
        this.titulo = 'Editar Medico';
        this.show=false;
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
          bloqueadoMedico: new FormControl(this.medico.bloqueadoMedico),
        });
      }else{
        this.show=true;
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
          contrasenaMedico: new FormControl(this.medico.contrasenaMedico, Validators.required),
          bloqueadoMedico: new FormControl(this.medico.bloqueadoMedico),
        });
      }
  
    });
  

  
  }
  formSubmit() {

    console.log(this.idMedico);
    this.medico.bloqueadoMedico===false? 0:1;
    this.medico.especialidadMedico=this.idEspecialidad;
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
        this.idEspecialidad=this.medico.especialidadMedico;
        const user = this.options.filter((u:any) => u.idEspecialidad === this.medico.especialidadMedico)[0];
        this.medico.especialidadMedico=user.nombreEspecialidad;
      },
      error => {
        console.log(error);
      }
    )

  }
  private _setupFilterObservable(
    control: AbstractControl,
    options: any
  ): Observable<any> {
    return control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(options, value))
    );
  }
  
  private _filter(options: any, value: string): any{
    const filterValue = String(value).toLowerCase();
    const filteredOptions = options.filter((option:any) =>
    option.nombreEspecialidad.toLowerCase().includes(filterValue)
  );
    return options.filter((option:any) =>
      option.nombreEspecialidad.toLowerCase().includes(filterValue)
    );
  }

  onSelectionChange(event: any){
   console.log(event.option.value);
   this.medico.especialidadMedico=event.option.value.nombreEspecialidad;
   this.idEspecialidad=event.option.value.idEspecialidad;
   
  }

}