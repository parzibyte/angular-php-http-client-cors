import { Component } from "@angular/core";
import { PersonasService } from "./personas.service";
import {Persona} from "./persona"
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  respuesta = {};

  constructor(private personasService: PersonasService) {}

  probarGet() {
    this.respuesta = { mensaje: "Cargando..." };
    this.personasService
    .obtener()
    .subscribe((personas: Persona) => {
      this.respuesta = personas;
      console.log(personas);
    });
  }
  probarPost() {
    let persona = new Persona("John Galt", 21);
    this.respuesta = { mensaje: "Cargando..." };
    this.personasService.registrar(persona).subscribe(datos => {
      this.respuesta = datos;
    });
  }
  probarPut() {
    let persona = new Persona("Dagny Taggart", 19);
    this.respuesta = { mensaje: "Cargando..." };
    this.personasService.actualizar(persona).subscribe(datos => {
      this.respuesta = datos;
    });
  }
  probarDelete() {
    let idPersona = 281196;
    this.respuesta = { mensaje: "Cargando..." };
    this.personasService.eliminar(idPersona).subscribe(datos => {
      this.respuesta = datos;
    });
  }
}
