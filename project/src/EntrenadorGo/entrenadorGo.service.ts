import {Injectable} from '@nestjs/common';

@Injectable()
export class EntrenadorGoService {
    Entrenador_go1: EntrenadorGo1[] = [];

    crearEntrenador(Entrenador_go: EntrenadorGo1): EntrenadorGo1 {
        this.Entrenador_go1.push(Entrenador_go);
        return Entrenador_go;
    }

    mostrarEn(): EntrenadorGo1[] {
        return this.Entrenador_go1;
    }

    obtenerUno(id) {
        return this.Entrenador_go1[id - 1];
    }

    editarUno(id, nombre, apellido, fechaNacimiento, numeroMedallas, campeonActual) {
        let arregloAux = this.obtenerUno(id);
        arregloAux.nombres = nombre;
        arregloAux.apellidos = apellido;
        arregloAux.fechaNacimiento = fechaNacimiento;
        arregloAux.numeroMedallas = numeroMedallas;
        arregloAux.campeonActual = campeonActual;
        return arregloAux;
    };
}
export class EntrenadorGo1 {
    constructor(
        //public equipoFutbolId: number,
        public nombres: string,
        public apellidos: string,
        public fechaNacimiento: Date,
        public numeroMedallas: number,
        public campeonActual: boolean,
    ) {

    }

}