import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecepcionRoutingModule } from './recepcion-routing.module';
import { RecepcionComponent } from './recepcion.component';


@NgModule({
  declarations: [
    RecepcionComponent
  ],
  imports: [
    CommonModule,
    RecepcionRoutingModule
  ]
})
export class RecepcionModule { }
