import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicoComponent } from './medico.component';
import { PrincipalMedicoComponent } from './principal-medico/principal-medico.component';
import { ListadepacientesComponent } from './listadepacientes/listadepacientes.component';
import { EditarAgendaComponent } from './editar-agenda/editar-agenda.component';
import { CrearAgendaComponent } from './crear-agenda/crear-agenda.component';
import { AtenderpacientedatosComponent } from './atenderpacientedatos/atenderpacientedatos.component';
import { AtenderpacienteDiagnosticoComponent } from './atenderpaciente-diagnostico/atenderpaciente-diagnostico.component';

const routes: Routes = [
  {path: '', redirectTo:'principal-medico', pathMatch: 'full'},
  {path: '', component: MedicoComponent, children: [
    { path: 'principal-medico/:idMedico', component: PrincipalMedicoComponent},
    { path: 'lista-pacientes', component: ListadepacientesComponent},
    { path: 'lista-pacientes/:idMedico', component: ListadepacientesComponent},
    { path: 'editar-agenda', component: EditarAgendaComponent},
    { path: 'crear-agenda/:idMedico', component: CrearAgendaComponent},
    { path: 'paciente-datos', component: AtenderpacientedatosComponent},
    { path: 'paciente-diagnostico', component: AtenderpacienteDiagnosticoComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicoRoutingModule { }
