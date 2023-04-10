import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteRoutingModule } from './paciente-routing.module';
import { AgendaPacienteComponent } from './agenda-paciente/agenda-paciente.component';
import { FormularioCitaComponent } from './formulario-cita/formulario-cita.component';
import { HistorialClinicoComponent } from './historial-clinico/historial-clinico.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [
    AgendaPacienteComponent,
    FormularioCitaComponent,
    HistorialClinicoComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    SharedModule
  ]
})
export class PacienteModule { }
