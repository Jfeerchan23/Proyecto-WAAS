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
  medicosFiltrados:any={};
  idPaciente :any;
  isReadOnly = false;
  idEspecialidad:any;
  idMedico:any;
  citasDisponibles:any=[];
  pacientes:any={};
  autocompletadoPaciente=false;
  isReadOnlyNombre = false;
  especialidades:any={};
  perfil:any;
  constructor(
    dashboardService: DashboardService,
    private usuariosService: UsuariosService,
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
      medico: new FormControl(this.cita.idMedico, Validators.required),
      modalidad: new FormControl(this.cita.modalidad, Validators.required),
      fecha: new FormControl(this.cita.fecha, Validators.required),
      hora: new FormControl(this.cita.hora, Validators.required),
    });
  }



 optionsMedicos: any = [];
 optionsPacientes: any = [];
 filteredMedicos!: Observable<any>;
 filteredPacientes!: Observable<any>;
  ngOnInit() {
    this.isReadOnly=true;
    //CUANDO SE ENCUENTRA EN EL PERFIL DE UN PACIENTE
    this.route.params.subscribe((params) => {
      if (params['idPaciente']) {
        this.idPaciente = params['idPaciente'];
        this.obtenerPaciente(this.idPaciente,null);
        this.perfil=1;
        this.isReadOnlyNombre=true;
      }else{
        //CUANDO SE ENCUENTRA EN EL PERFIL DEL RECEPCIONISTA
        this.perfil=2;
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
        this.especialidades=response;

      }
    )
    this.usuariosService.obtenerMedicos().subscribe(

      (response)=>{
        this.medicosFiltrados=response;
        this.medicos = response;
      }
    )
  

  }

  obtenerPaciente(id:any, event:any){
    this.usuariosService.obtenerPaciente(id).subscribe(
      (response)=>{
        this.cita=response;
        if(event!=null){
          this.cita.nombrePaciente=event.option.value.nombrePaciente;
        }
       
      }
    )

  }


  formSubmit() {
    /*  Se deberán guardar los datos del formulario */
    if(this.cita.idMedico!==undefined && this.cita.hora!==undefined){
    
      const cita = {
        idCita:this.cita.hora,
        idPaciente: this.cita.idPaciente,
        idMedico: this.cita.idMedico,
        modalidad: this.cita.modalidad
      }
  
      this.usuariosService.editarCita(cita,this.cita.hora).subscribe(
        
      );
      this._snackBar.open('Cita guardada', '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    
     if(this.perfil==1){
      this.router.navigate(['/dashboard/paciente/agenda',this.idPaciente]);
     }else{
      this.router.navigate(['/dashboard/recepcion/agenda-recepcion']);
     }
     
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


   onSelectionChangePaciente(event: any){
    
    this.idPaciente = event.option.value.idPaciente;
    this.obtenerPaciente(this.idPaciente,event);
    this.isReadOnly=true;
    
   }

   changeEspecialidad(){

    this.medicosFiltrados = this.medicos.filter((medico:any) => medico.especialidadMedico == this.cita.especialidadMedico);
    this.cita.idMedico=null;
    this.cita.fecha=null;
    this.cita.hora=null;
    if(this.medicosFiltrados.length==0){
      this._snackBar.open('No hay médicos con esa especialidad', '', {
        duration: 1000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
    }
  
   }

   changeMedico(){
    this.cita.fecha=null;
    this.cita.hora=null;
   }

   onFechaChange(event: any){
    console.log(this.cita.idMedico);
    if(this.cita.idMedico!==undefined){
      const datos ={
        fechaCita :event,
        idMedico : this.cita.idMedico
      }
      this.usuariosService.citasDisponibles(datos).subscribe(
        (response)=>{
          this.citasDisponibles=response;
          if(this.citasDisponibles.length==0 &&this.cita.fecha!=null){
            this._snackBar.open('No hay citas disponibles en ese horario', '', {
              duration: 1000,
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          }
        
        }
      );
   
    }
   }

}
