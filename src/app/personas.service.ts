import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Persona } from "./persona";

@Injectable({
  providedIn: "root"
})
export class PersonasService {
  rutaApi = "https://rest-api-angular-php--parzibyte.repl.co";

  constructor(private http: HttpClient) {}

  obtener() {
    return this.http.get(`${this.rutaApi}/obtenerPersonas.php`);
  }

  registrar(persona: Persona) {
    return this.http.post(`${this.rutaApi}/registrarPersona.php`, persona);
  }

  actualizar(persona: Persona) {
    return this.http.put(`${this.rutaApi}/actualizarPersona.php`, persona);
  }

  eliminar(id: string | number) {
    return this.http.delete(`${this.rutaApi}/eliminarPersona.php?id=${id}`);
  }
}
