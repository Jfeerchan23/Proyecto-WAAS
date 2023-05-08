import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import {
  Dashboard,
  DashboardService,
} from 'src/app/servicios/dashboard.service';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';

@Component({
  selector: 'app-formulario-cita',
  templateUrl: './formulario-cita.component.html',
  styleUrls: ['./formulario-cita.component.css'],
})
export class FormularioCitaComponent {
  form: FormGroup;
  cita: any = {};
  medicos:any={};
  idPaciente :any;
  isReadOnly = false;
  idEspecialidad:any;
  idMedico:any;
  citasDisponibles:any=[];
  pacientes:any={};
  autocompletadoPaciente=false;
  isReadOnlyNombre = false;

  constructor(
    dashboardService: DashboardService,
    private usuariosService: UsuariosService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'nueva-cita',
    };

    this.form = new FormGroup({
      nombrePaciente: new FormControl(this.cita.nombrePaciente, Validators.required),
      fechaNacimientoPaciente: new FormControl(this.cita.fechaNacimientoPaciente, Validators.required),
      CURPPaciente: new FormControl(this.cita.CURPPaciente, Validators.required),
      correoPaciente: new FormControl(this.cita.correoPaciente, Validators.required),
      telefonoPaciente: new FormControl(this.cita.telefonoPaciente, Validators.required),
      direccionPaciente: new FormControl(this.cita.direccionPaciente, Validators.required),
      especialidadMedico: new FormControl(this.cita.especialidadMedico, Validators.required),
      medico: new FormControl(this.cita.medico, Validators.required),
      modalidad: new FormControl(this.cita.modalidad, Validators.required),
      fecha: new FormControl(this.cita.fecha, Validators.required),
      hora: new FormControl(this.cita.hora, Validators.required),
    });
  }



 /* Valores inicializados */
 optionsEspecialidades: any = [];
 optionsMedicos: any = [];
 optionsPacientes: any = [];
 filteredEspecialidades!: Observable<any>;
 filteredMedicos!: Observable<any>;
 filteredPacientes!: Observable<any>;
  ngOnInit() {
    this.isReadOnly=true;
    //CUANDO SE ENCUENTRA EN EL PERFIL DE UN PACIENTE
    this.route.params.subscribe((params) => {
      if (params['idPaciente']) {
        this.idPaciente = params['idPaciente'];
        this.obtenerPaciente(this.idPaciente);
        
        this.isReadOnlyNombre=true;
      }else{
        console.log("no se encuentra en el perfil de paciente");
        this.usuariosService.obtenerPacientes().subscribe(
          (response)=>{
            this.autocompletadoPaciente=true;
            this.optionsPacientes = response.map((item:any)=> item);
            this.filteredPacientes =  this._setupFilterObservable(
              this.form.controls['nombrePaciente'], 
              this.optionsPacientes,
               'nombrePaciente');
          }
        )
      }
    });
    this.usuariosService.obtenerEspecialidades().subscribe(
      (response)=>{

        this.optionsEspecialidades = response.map((item:any)=> item);

        this.filteredEspecialidades =  this._setupFilterObservable(
          this.form.controls['especialidadMedico'], 
          this.optionsEspecialidades,
           'nombreEspecialidad');

      }
    )
    this.usuariosService.obtenerMedicos().subscribe(

      (response)=>{
        this.medicos = response.map((item:any)=> item);
      }
    )
  

  }

  obtenerPaciente(id:any){
    this.usuariosService.obtenerPaciente(id).subscribe(
      (response)=>{
        this.cita=response;
      }
    )

  }


  formSubmit() {
    /*  Se deberán guardar los datos del formulario */
    console.log(this.idMedico);
    if(this.idMedico!==undefined && this.cita.hora!==undefined){
    
      const cita = {
        idCita:this.cita.hora,
        idPaciente : this.cita.idPaciente,
      }
  
      this.usuariosService.editarCita(cita,this.cita.hora).subscribe(
        
      );
      this._snackBar.open('Cita guardada', '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });

      this.form.reset();
      this.router.navigate(['/dashboard/paciente']);
    }else{
      this._snackBar.open('Verifica el nombre del medico', '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
    
    
  }
 

  private _setupFilterObservable(
    control: AbstractControl,
    options: any,
    property: string
  ): Observable<any> {
    return control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(options, value, property))
    );
  }
  
  private _filter(options: any, value: string, property: string): any {
    const filterValue = String(value).toLowerCase();
    return options.filter((option:any) =>
      option[property].toLowerCase().includes(filterValue)
    );
  }



  onSelectionChange(event: any){
    this.cita.especialidadMedico=event.option.value.nombreEspecialidad;
    this.idEspecialidad=event.option.value.idEspecialidad;
    this.cita.medico=null;
    this.cita.fecha=null;
    this.cita.hora=null;
    this.optionsMedicos= this.medicos.filter((item:any) => item.especialidadMedico === this.idEspecialidad);
    this.filteredMedicos = this._setupFilterObservable(
      this.form.controls['medico'],
      this.optionsMedicos,
      'nombreMedico'
    )
   }

   onSelectionChangeMedico(event: any){
    this.cita.fecha=null;
    this.cita.hora=null;
    this.cita.medico=event.option.value.nombreMedico;
    this.idMedico = event.option.value.idMedico
   }

   onSelectionChangePaciente(event: any){
    this.cita.nombrePaciente=event.option.value.nombrePaciente;
    this.idPaciente = event.option.value.idPaciente;
    this.obtenerPaciente(this.idPaciente);
    this.isReadOnly=true;
   }

   onFechaChange(event: any){
    if(this.idMedico!==undefined){
      const datos ={
        fechaCita :event,
        idMedico : this.idMedico
      }
      this.usuariosService.citasDisponibles(datos).subscribe(
        (response)=>{
          this.citasDisponibles=response;
      
        }
      );
    }
   }

}
