import {Injectable} from '@nestjs/common';
import {PokemonGoController} from './PokemonGo.controller';

@Injectable()
export class PokemonGoService{
    Poke : Pokemones [] = [];

    crear_poke(App:Pokemones): Pokemones{
        this.Poke.push(App);
        return App
    }

    mostrar_poke():Pokemones []{
        return this.Poke;
    }

    obtenerUno(id) {
        return this.Poke[id - 1];
    }

    editarUno(id, numpokemon, nompokemon, poderE1, poderE2, fechaCaptura, nivel, entrenadorId) {
        let arregloAux = this.obtenerUno(id);
        arregloAux.numeroPokemon = numpokemon;
        arregloAux.nombrePokemon = nompokemon;
        arregloAux.poderEspecialUno = poderE1;
        arregloAux.poderEspecialDos = poderE2;
        arregloAux.fechaCaptura = fechaCaptura;
        arregloAux.nivel = nivel;
        arregloAux.entrenadorId = entrenadorId;
        return arregloAux;
    };
}
export interface Pokemones {
    numeroPokemon:number,
    nombrePokemon:string,
    poderEspecialUno:string,
    poderEspecialDos:string,
    fechaCaptura: Date,
    nivel:number,
    entrenadorId:number,
}