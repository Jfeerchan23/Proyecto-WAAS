import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ModalComponent } from './componentes/modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardModule } from './componentes/dashboard/dashboard.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CrearCitaComponent } from './componentes/formularios/crear-cita/crear-cita.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, ModalComponent, CrearCitaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    DashboardModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
