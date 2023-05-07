
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  URL = "http://localhost:8080";
  constructor(
    private http: HttpClient,
  ) { }

	//Recepcionistas
	obtenerRecepcionistas(): Observable<any> {
		return this.http.get(`${this.URL}/api/recepcionistas`);
	}

	obtenerRecepcionista($id: any): Observable<any> {
		return this.http.get(`${this.URL}/api/recepcionistas/${$id}`);
	}

	guardarRecepcionista($recepcionista: any): Observable<any> {
		let data = Object.assign({}, $recepcionista);
		console.log(data);
		return this.http.post(`${this.URL}/api/recepcionistas`, data);
	}

	editarRecepcionista($recepcionista: any, $id: any): Observable<any> {
		let data = Object.assign({}, $recepcionista);
		return this.http.put(`${this.URL}/api/recepcionistas/${$id}`, data);
	}

	eliminarRecepcionista($id: any): Observable<any> {
		return this.http.delete(`${this.URL}/api/recepcionistas/${$id}`);
	}
	obtenerTodosUsuarios(): Observable<any> {
		return this.http.get(`${this.URL}/api/todos`);
	}


	/* Medicos */

	obtenerMedicos(): Observable<any> {
		return this.http.get(`${this.URL}/api/medicos`);
	}

	obtenerMedico($id: any): Observable<any> {
		return this.http.get(`${this.URL}/api/medicos/${$id}`);
	}

	guardarMedico($medico: any): Observable<any> {
		let data = Object.assign({}, $medico);
		console.log(data);
		return this.http.post(`${this.URL}/api/medicos`, data);
	}

	editarMedico($medico: any, $id: any): Observable<any> {
		let data = Object.assign({}, $medico);
		return this.http.put(`${this.URL}/api/medicos/${$id}`, data);
	}

	eliminarMedico($id: any): Observable<any> {
		return this.http.delete(`${this.URL}/api/medicos/${$id}`);
	}
	

	/* Pacientes */

	obtenerPacientes(): Observable<any> {
		return this.http.get(`${this.URL}/api/pacientes`);
	}

	obtenerPaciente($id: any): Observable<any> {
		return this.http.get(`${this.URL}/api/pacientes/${$id}`);
	}

	guardarPaciente($paciente: any): Observable<any> {
		let data = Object.assign({}, $paciente);
		console.log(data);
		return this.http.post(`${this.URL}/api/pacientes`, data);
	}

	editarPaciente($paciente: any, $id: any): Observable<any> {
		let data = Object.assign({}, $paciente);
		return this.http.put(`${this.URL}/api/pacientes/${$id}`, data);
	}

	eliminarPaciente($id: any): Observable<any> {
		return this.http.delete(`${this.URL}/api/pacientes/${$id}`);
	}

	 /* Crear citas */

	crearCitas($id: any, $datos:any): Observable<any> {
		let data = Object.assign({}, $datos);
		console.log(data);
		return this.http.post(`${this.URL}/api/citas/crear/${$id}`,data);
	}
	 /* Especialidades */

	obtenerEspecialidades(): Observable<any> {
		return this.http.get(`${this.URL}/api/especialidades`);
	}

}
