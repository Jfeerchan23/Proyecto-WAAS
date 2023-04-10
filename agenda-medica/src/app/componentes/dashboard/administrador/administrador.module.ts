import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import { AdmidoctorComponent } from './admidoctor/admidoctor.component';
import { AdmipacienteComponent } from './admipaciente/admipaciente.component';
import { BuscadorGeneralComponent } from './buscador-general/buscador-general.component';
import { AdminsecretariaComponent } from './adminsecretaria/adminsecretaria.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AdministradorComponent,
    AdmidoctorComponent,
    AdmipacienteComponent,
    BuscadorGeneralComponent,
    AdminsecretariaComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
  SharedModule
  ]
})
export class AdministradorModule { }
