import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacienteRoutingModule } from './paciente-routing.module';
import { AgendaPacienteComponent } from './agenda-paciente/agenda-paciente.component';
import { ListaCitasComponent } from './lista-citas/lista-citas.component';


@NgModule({
  declarations: [
    AgendaPacienteComponent,
    ListaCitasComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
