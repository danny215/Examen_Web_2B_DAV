import {Component, Input, OnInit} from '@angular/core';
import {UsuariosComponent} from "../usuarios/usuarios.component";

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
clickUsuario: UsuariosComponent;
  mostrarComponente = false;
  cargarEntrenador(evento){
    console.log('evento',evento);
    this.mostrarComponente = true;
    if(this.clickUsuario.dioClick.emit(1)){
      this.mostrarComponente = true;
      console.log(this.clickUsuario);
      return 1;

    }else {
      this.mostrarComponente = false;
      console.log(this.clickUsuario);
      return 0;
    }
  }


}
