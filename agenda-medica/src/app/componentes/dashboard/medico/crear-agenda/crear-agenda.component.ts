import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Dashboard, DashboardService } from 'src/app/servicios/dashboard.service';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-agenda',
  templateUrl: './crear-agenda.component.html',
  styleUrls: ['./crear-agenda.component.css']
})
export class CrearAgendaComponent {
  public dataDashboard$!: Observable<Dashboard>;
  form!: FormGroup;
  agenda: any = {};
  idMedico:any;

  constructor(private dashboardService: DashboardService, private usuariosService: UsuariosService,private _snackBar: MatSnackBar,) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'crear-agenda'
    };
    this.dataDashboard$ = dashboardService.dashboardObservable;
  }
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    height: 500,
    locale: esLocale,
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    initialView: 'dayGridMonth',
    eventClick: this.handleEventClick.bind(this), // MUST ensure `this` context is maintained
    events: [
      {
        title: 'Fernando Chimal',
        start: new Date('2023-04-02T10:30:00'),
        end: new Date('2023-04-02T12:00:00')
      },
      { title: 'event 2', date: '2023-04-10' ,   color: 'black'},
      { title: 'event 3', date: '2023-04-15', colo:'green' },
      { title: 'event 4', date: '2023-04-18', color: 'yellow' },
    ],
  };

  ngOnInit():void {
    this.form = new FormGroup({
      fechaInicio: new FormControl(this.agenda.fechaInicio, Validators.required),
      fechaFin: new FormControl(this.agenda.fechaFin, Validators.required),
      horaInicio: new FormControl(this.agenda.horaInicio, Validators.required),
      inicioAlmuerzo: new FormControl(this.agenda.inicioAlmuerzo, Validators.required),
      finAlmuerzo: new FormControl(this.agenda.finAlmuerzo, Validators.required),
      horaFin: new FormControl(this.agenda.horaFin, Validators.required),
      duracionCitas: new FormControl(this.agenda.duracionCitas, Validators.required),
    });
    this.idMedico= sessionStorage.getItem('id');
  }

  formSubmit(){

   
      this.usuariosService.crearCitas(this.idMedico, this.agenda).subscribe(
        (response)=>{
          console.log(response);
        },
        (error)=>{
          console.log(error);
        }
      )
  
  
  }

  handleEventClick(eventInfo: any) {

    console.log('Evento clickeado:', eventInfo.event);
    // Agrega aquí la lógica que deseas ejecutar cuando se hace clic en un evento
  }
}
