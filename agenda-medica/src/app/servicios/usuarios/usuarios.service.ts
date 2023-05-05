
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
		return this.http.post(`${this.URL}/api/recepcionistas/${$id}`, data);
	}

	eliminarRecepcionista($id: any): Observable<any> {
		return this.http.delete(`${this.URL}/api/recepcionistas/${$id}`);
	}
	obtenerTodosUsuarios(): Observable<any> {
		return this.http.get(`${this.URL}/api/todos`);
	}



}
