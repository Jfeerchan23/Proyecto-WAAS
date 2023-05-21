import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL = "http://localhost:8080";
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private router: Router,
	private _snackBar: MatSnackBar,
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
	try {
		return this.http.get(`${this.URL}/api/informacion/usuarios`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			console.error('token inválido', error);
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  // Recepcionistas
  obtenerRecepcionistas(): Observable<any> {
	try {
		return this.http.get(`${this.URL}/api/recepcionistas`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }

  }

  guardarRecepcionista(recepcionista: any): Observable<any> {
	try {
		const data = Object.assign({}, recepcionista);
		return this.http.post(`${this.URL}/api/recepcionistas/registrar`, data, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  obtenerRecepcionista(id: any): Observable<any> {
	try {
		
		return this.http.get(`${this.URL}/api/recepcionistas/obtener/${id}`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  editarRecepcionista(recepcionista: any, id: any): Observable<any> {

	try {
		const data = Object.assign({}, recepcionista);
		return this.http.put(`${this.URL}/api/recepcionistas/actualizar/${id}`, data, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }

  }

  eliminarRecepcionista(id: any): Observable<any> {
	try {

		return this.http.delete(`${this.URL}/api/recepcionistas/eliminar/${id}`, { headers: this.getHeaders()}).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  // Medicos
  obtenerMedicos(): Observable<any> {
	try {
		return this.http.get(`${this.URL}/api/medicos`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  
  }

  guardarMedico(medico: any): Observable<any> {
	try {
		const data = Object.assign({}, medico);
		return this.http.post(`${this.URL}/api/medicos/registrar`, data, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  obtenerMedico(id: any): Observable<any> {
	try {
		return this.http.get(`${this.URL}/api/medicos/obtener/${id}`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  editarMedico(medico: any, id: any): Observable<any> {

	try {
		const data = Object.assign({}, medico);
		return this.http.put(`${this.URL}/api/medicos/actualizar/${id}`, data, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  eliminarMedico(id: any): Observable<any> {

	try {
		return this.http.delete(`${this.URL}/api/eliminar/${id}`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  obtenerEspecialidades(): Observable<any> {
	try {
		return this.http.get(`${this.URL}/api/medicos/especialidades`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  citasProgramadasMedico(id: any): Observable<any> {
	try {
		return this.http.get(`${this.URL}/api/medicos/citasProgramadas/${id}`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  obtenerPacientes(): Observable<any> {
	try {
		return this.http.get(`${this.URL}/api/pacientes`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  guardarPaciente(paciente: any): Observable<any> {
	try {
		const data = Object.assign({}, paciente);
		return this.http.post(`${this.URL}/api/pacientes/registrar`, data, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  obtenerPaciente(id: any): Observable<any> {
	try {
		return this.http.get(`${this.URL}/api/pacientes/obtener/${id}`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  editarPaciente(paciente: any, id: any): Observable<any> {
	try {
		const data = Object.assign({}, paciente);
		return this.http.put(`${this.URL}/api/pacientes/actualizar/${id}`, data, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  eliminarPaciente(id: any): Observable<any> {
	try {
		
		return this.http.delete(`${this.URL}/api/pacientes/eliminar/${id}`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  obtenerHistorialClinico(id: any): Observable<any> {
	try {
		
		return this.http.get(`${this.URL}/api/pacientes/historialClinico/${id}`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  descargarHistorialClinico(id: any): Observable<any> {
	try {
		
		return  this.http.get(`${this.URL}/api/pacientes/historialClinico/${id}/descargar`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  // Citas
  crearCitas(id: any, datos: any): Observable<any> {

	try {
		const data = Object.assign({}, datos);
		return  this.http.post(`${this.URL}/api/citas/crear/${id}`, data, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }

  }

  reservarCita(datos: any, id: any): Observable<any> {

	try {
		const data = Object.assign({}, datos);
		return  this.http.put(`${this.URL}/api/citas/reservar/${id}`, data, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }

  }

  actualizarCita(datos: any, id: any): Observable<any> {
	try {
		const data = Object.assign({}, datos);
		return  this.http.put(`${this.URL}/api/citas/actualizar/${id}`, data, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  citasDisponibles(datos: any): Observable<any> {
	try {
		const data = Object.assign({}, datos);
		return  this.http.post(`${this.URL}/api/citas/citasDisponibles`, data, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  citasProgramadas(): Observable<any> {

	try {
		return  this.http.get(`${this.URL}/api/citas/citasProgramadas`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }
  }

  // Agenda
  agendaPaciente(id: any): Observable<any> {

	try {
		return  this.http.get(`${this.URL}/api/pacientes/agenda/${id}`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }

  }

  agendaMedico(id: any): Observable<any> {
	try {
		return  this.http.get(`${this.URL}/api/medicos/agenda/${id}`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }

  }

  agendaDisponibleMedico(id: any): Observable<any> {
	try {
		return  this.http.get(`${this.URL}/api/medicos/agendaDisponible/${id}`, { headers: this.getHeaders() }).pipe(
		  catchError((error) => {
			this._snackBar.open('token inválido', '', {
				duration: 1000,
				horizontalPosition: 'center',
				verticalPosition: 'bottom',
			  });
			this.router.navigate(['/login']); // Redirigir a la página de inicio de sesión
			return throwError(error);
		  })
		);
	  } catch (error) {
		console.error('Error inesperado:', error);
		return throwError(error);
	  }

  }

  // Login
  login(data: any): Observable<any> {
    return this.http.post(`${this.URL}/api/login/auth`, data);
  }
}
