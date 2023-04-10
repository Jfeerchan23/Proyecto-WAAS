import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicoRoutingModule } from './medico-routing.module';
import { MedicoComponent } from './medico.component';
import { PrincipalMedicoComponent } from './principal-medico/principal-medico.component';
import { CrearAgendaComponent } from './crear-agenda/crear-agenda.component';
import { EditarAgendaComponent } from './editar-agenda/editar-agenda.component';
import { ListadepacientesComponent } from './listadepacientes/listadepacientes.component';
import { AtenderpacientedatosComponent } from './atenderpacientedatos/atenderpacientedatos.component';
import { AtenderpacienteDiagnosticoComponent } from './atenderpaciente-diagnostico/atenderpaciente-diagnostico.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    MedicoComponent,
    PrincipalMedicoComponent,
    CrearAgendaComponent,
    EditarAgendaComponent,
    ListadepacientesComponent,
    AtenderpacientedatosComponent,
    AtenderpacienteDiagnosticoComponent
  ],
  imports: [
    CommonModule,
    MedicoRoutingModule,
    SharedModule
  ]
})
export class MedicoModule { }
