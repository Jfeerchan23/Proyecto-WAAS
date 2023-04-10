import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import { Observable, map, startWith } from 'rxjs';
import {
  Dashboard,
  DashboardService,
} from 'src/app/servicios/dashboard.service';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import esLocale from '@fullcalendar/core/locales/es';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-agenda-recepcion',
  templateUrl: './agenda-recepcion.component.html',
  styleUrls: ['./agenda-recepcion.component.css'],
})
export class AgendaRecepcionComponent {
  form: FormGroup;
  /* Valorez inicializados */
  options: string[] = ['Cardiología', 'Ortopedia', 'Pediatría'];
  medicos: string[] = ['José López', 'Arturo Ramirez', 'Jesús Hernández'];
  filteredOptions!: Observable<string[]>;
  filteredMedicos!: Observable<string[]>;

  constructor(dashboardService: DashboardService, private fb: FormBuilder) {
    dashboardService.dashboardObservableData = {
      menuActivo: 'agenda-recepcion',
    };
    this.form = this.fb.group({
      especialidad: new FormControl('', Validators.required),
      medico: new FormControl('', Validators.required),
    });
  }
  //Configuración del calendario
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    height: 440,
    locale: esLocale,
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay',
    },
    initialView: 'dayGridMonth',
    eventClick: this.handleEventClick.bind(this),
    events: [
      {
        title: 'Fernando Chimal',
        start: new Date('2023-04-02T10:30:00'),
        end: new Date('2023-04-02T12:00:00'),
      },
      { title: 'event 2', date: '2023-04-10', color: 'black' },
      { title: 'event 3', date: '2023-04-15', colo: 'green' },
      { title: 'event 4', date: '2023-04-18', color: 'yellow' },
    ],
  };
  ngOnInit() {
    //Autocompletado de los campos especialidad y médico
    this.filteredOptions = this._setupFilterObservable(
      this.form.controls['especialidad'],
      this.options
    );
    this.filteredMedicos = this._setupFilterObservable(
      this.form.controls['medico'],
      this.medicos
    );
  }

  //Filtrado del autocompletado
  private _setupFilterObservable(
    control: AbstractControl,
    options: string[]
  ): Observable<string[]> {
    return control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(options, value))
    );
  }

  private _filter(options: string[], value: string): string[] {
    const filterValue = value.toLowerCase();
    return options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  handleEventClick(eventInfo: any) {
    console.log('Evento clickeado:', eventInfo.event);
    // Agrega aquí la lógica que deseas ejecutar cuando se hace clic en un evento
  }
}
