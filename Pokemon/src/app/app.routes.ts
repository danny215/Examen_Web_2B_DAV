import {Routes} from "@angular/router";
import {ContenedorComponent} from "./contenedor/contenedor.component";
import {LoginComponent} from "./Login/login/login.component";
import {TransferenciaComponent} from "./transferencia/transferencia.component";
import {TransferenciaSeleccionComponent} from "./transferencia-seleccion/transferencia-seleccion.component";
import {TransferenciaSeleccionAComponent} from "./transferencia-seleccion-a/transferencia-seleccion-a.component";
import {TransferenciaConfirmacionComponent} from "./transferencia-confirmacion/transferencia-confirmacion.component";

export const RUTAS_APP: Routes = [
  {
    path:'home',
    component: ContenedorComponent,
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path:'transferencia',
    component: TransferenciaComponent,
  },
  {
    path:'transferenciaselec',
    component: TransferenciaSeleccionComponent,
  },
  {
    path:'transferenciaseleca',
    component: TransferenciaSeleccionAComponent,
  },
  {
    path: 'transferenciaconf',
    component: TransferenciaConfirmacionComponent,
  }
]
