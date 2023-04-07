import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PacienteComponent } from './paciente/paciente.component';
import { MedicoComponent } from './medico/medico.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { RecepcionComponent } from './recepcion/recepcion.component';

const routes: Routes = [
  {
    
    path: '', component: DashboardComponent,children:[
      {path: 'paciente', loadChildren:()=>import('./paciente/paciente.module').then(x=>x.PacienteModule)},
      {path: 'administracion', loadChildren:()=>import('./administrador/administrador.module').then(x=>x.AdministradorModule)}

    ]

}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
