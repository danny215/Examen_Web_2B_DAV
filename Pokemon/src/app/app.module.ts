import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './Login/login/login.component';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { EntrenadoresComponent } from './entrenadores/entrenadores.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { TransferenciaSeleccionComponent } from './transferencia-seleccion/transferencia-seleccion.component';
import { TransferenciaConfirmacionComponent } from './transferencia-confirmacion/transferencia-confirmacion.component';
import { TransferenciaSeleccionAComponent } from './transferencia-seleccion-a/transferencia-seleccion-a.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContenedorComponent,
    UsuariosComponent,
    PokemonComponent,
    EntrenadoresComponent,
    TransferenciaComponent,
    TransferenciaSeleccionComponent,
    TransferenciaConfirmacionComponent,
    TransferenciaSeleccionAComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(
     RUTAS_APP,
      {
        useHash: true
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
