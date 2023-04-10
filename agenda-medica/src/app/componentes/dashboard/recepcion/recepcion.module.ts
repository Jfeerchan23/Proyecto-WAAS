import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepcionRoutingModule } from './recepcion-routing.module';
import { RecepcionComponent } from './recepcion.component';
import { AgendaRecepcionComponent } from './agenda-recepcion/agenda-recepcion.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [RecepcionComponent, AgendaRecepcionComponent],
  imports: [CommonModule, RecepcionRoutingModule, SharedModule],
})
export class RecepcionModule {}
