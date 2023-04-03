import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PacienteComponent } from './paciente/paciente.component';

const routes: Routes = [
  {
    
    path: '', component: DashboardComponent,children:[
      { path: 'paciente', component: PacienteComponent },
    ]

}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
