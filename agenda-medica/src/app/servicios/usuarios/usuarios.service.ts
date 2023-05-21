import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL = "http://localhost:8080";
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
  }

  private getHeaders(): HttpHeaders {
	
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    });
  }

  obtenerTodosUsuarios(): Observable<any> {
    return this.http.get(`${this.URL}/api/informacion/usuarios`, { headers: this.headers });
  }

  // Recepcionistas
  obtenerRecepcionistas(): Observable<any> {
    return this.http.get(`${this.URL}/api/recepcionistas`, { headers: this.headers });
  }

  guardarRecepcionista(recepcionista: any): Observable<any> {
    const data = Object.assign({}, recepcionista);
    return this.http.post(`${this.URL}/api/recepcionistas/registrar`, data, { headers: this.headers });
  }

  obtenerRecepcionista(id: any): Observable<any> {
    return this.http.get(`${this.URL}/api/recepcionistas/obtener/${id}`, { headers: this.headers });
  }

  editarRecepcionista(recepcionista: any, id: any): Observable<any> {
    const data = Object.assign({}, recepcionista);
    return this.http.put(`${this.URL}/api/recepcionistas/actualizar/${id}`, data, { headers: this.headers });
  }

  eliminarRecepcionista(id: any): Observable<any> {
    return this.http.delete(`${this.URL}/api/recepcionistas/eliminar/${id}`, { headers: this.headers });
  }

  // Medicos
  obtenerMedicos(): Observable<any> {
    return this.http.get(`${this.URL}/api/medicos`, { headers: this.getHeaders() });
  }

  guardarMedico(medico: any): Observable<any> {
    const data = Object.assign({}, medico);
    return this.http.post(`${this.URL}/api/medicos/registrar`, data, { headers: this.getHeaders() });
  }

  obtenerMedico(id: any): Observable<any> {
    return this.http.get(`${this.URL}/api/medicos/obtener/${id}`, { headers: this.getHeaders() });
  }

  editarMedico(medico: any, id: any): Observable<any> {
    const data = Object.assign({}, medico);
    return this.http.put(`${this.URL}/api/medicos/actualizar/${id}`, data, { headers: this.getHeaders() });
  }

  eliminarMedico(id: any): Observable<any> {
    return this.http.delete(`${this.URL}/api/eliminar/${id}`, { headers: this.getHeaders() });
  }

  obtenerEspecialidades(): Observable<any> {
    return this.http.get(`${this.URL}/api/medicos/especialidades`, { headers: this.getHeaders() });
  }

  citasProgramadasMedico(id: any): Observable<any> {
    return this.http.get(`${this.URL}/api/medicos/citasProgramadas/${id}`, { headers: this.getHeaders() });
  }

  obtenerPacientes(): Observable<any> {
    return this.http.get(`${this.URL}/api/pacientes`, { headers: this.getHeaders() });
  }

  guardarPaciente(paciente: any): Observable<any> {
    const data = Object.assign({}, paciente);
    return this.http.post(`${this.URL}/api/pacientes/registrar`, data, { headers: this.getHeaders() });
  }

  obtenerPaciente(id: any): Observable<any> {
    return this.http.get(`${this.URL}/api/pacientes/obtener/${id}`, { headers: this.getHeaders() });
  }

  editarPaciente(paciente: any, id: any): Observable<any> {
    const data = Object.assign({}, paciente);
    return this.http.put(`${this.URL}/api/pacientes/actualizar/${id}`, data, { headers: this.getHeaders() });
  }

  eliminarPaciente(id: any): Observable<any> {
    return this.http.delete(`${this.URL}/api/pacientes/eliminar/${id}`, { headers: this.getHeaders() });
  }

  obtenerHistorialClinico(id: any): Observable<any> {
    return this.http.get(`${this.URL}/api/pacientes/historialClinico/${id}`, { headers: this.getHeaders() });
  }

  descargarHistorialClinico(id: any): Observable<any> {
    return this.http.get(`${this.URL}/api/pacientes/historialClinico/${id}/descargar`, { headers: this.getHeaders() });
  }

  // Citas
  crearCitas(id: any, datos: any): Observable<any> {
    const data = Object.assign({}, datos);
    return this.http.post(`${this.URL}/api/citas/crear/${id}`, data, { headers: this.getHeaders() });
  }

  reservarCita(datos: any, id: any): Observable<any> {
    const data = Object.assign({}, datos);
    return this.http.put(`${this.URL}/api/citas/reservar/${id}`, data, { headers: this.getHeaders() });
  }

  actualizarCita(datos: any, id: any): Observable<any> {
    const data = Object.assign({}, datos);
    return this.http.put(`${this.URL}/api/citas/actualizar/${id}`, data, { headers: this.getHeaders() });
  }

  citasDisponibles(datos: any): Observable<any> {
    const data = Object.assign({}, datos);
    return this.http.post(`${this.URL}/api/citas/citasDisponibles`, data, { headers: this.getHeaders() });
  }

  citasProgramadas(): Observable<any> {
    return this.http.get(`${this.URL}/api/citas/citasProgramadas`, { headers: this.getHeaders() });
  }

  // Agenda
  agendaPaciente(id: any): Observable<any> {
    return this.http.get(`${this.URL}/api/pacientes/agenda/${id}`, { headers: this.getHeaders() });
  }

  agendaMedico(id: any): Observable<any> {
    return this.http.get(`${this.URL}/api/medicos/agenda/${id}`, { headers: this.getHeaders() });
  }

  agendaDisponibleMedico(id: any): Observable<any> {
    return this.http.get(`${this.URL}/api/medicos/agendaDisponible/${id}`, { headers: this.getHeaders() });
  }

  // Login
  login(data: any): Observable<any> {
    return this.http.post(`${this.URL}/api/login/auth`, data);
  }
}
