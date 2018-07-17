import {Body, Controller, Get, HttpCode, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {PokemonGoService} from "./pokemonGo.service";
import {PokemonGoPipe} from "../PokemonGoPipe/pokemonGo.pipe";
import {POKEMONGO_SCHEMA} from "./pokemonGo.schema";
import {PeticionNotfoundException} from "../excepciones/peticion-notfound.exception";
import {PeticionErroneaException} from "../excepciones/peticion-erronea.exception";
import {from} from "rxjs/index";
import {error} from "util";

@Controller('Pokemon')
export class PokemonGoController {
    pokemon_go ={
        numeroPokemon:Number,
        nombrePokemon:String,
        poderEspecialUno:String,
        poderEspecialDos:String,
        fechaCaptura: Date,
        nivel:Number,
        entrenadorId:Number,
    };

    pokemon_go1=[];

    constructor (private _pokemongoservice: PokemonGoService){
    }
    @Get('MostrarPokemones')mostrarAplicacion(@Res() response){
        const app = this._pokemongoservice.mostrar_poke();
        return response.send(app);
    }
    @UsePipes(new PokemonGoPipe(POKEMONGO_SCHEMA))
    @Post('crearPokemon')
    crearAPP(@Body(new PokemonGoPipe(POKEMONGO_SCHEMA))
                                   nuevopok){
        const pokeNuevo =this._pokemongoservice.crear_poke(nuevopok)

        if (pokeNuevo) {

            return nuevopok;

        } else {
            throw new PeticionErroneaException(
                'Petición Inválida, los datos ingresados no son suficientes',
                10,
                error
            )
        }

    }

    @Get(':id')
    obtenerUno(@Param() id, @Req() request,
               @Res() response) {
        const jug = this._pokemongoservice.obtenerUno(id.id);
        if (jug) {
            return response.send(jug);
        }
        else {
            throw  new PeticionNotfoundException(
                'Id No encontrado',
                10,
                error
            )
        }


    }

    @Put(':id')
    editarUno(@Param() id, @Body() updatePokemon, @Req() request,
              @Res() response) {
        const update = this._pokemongoservice.editarUno(id.id, updatePokemon.numeroPokemon, updatePokemon.nombrePokemon, updatePokemon.poderEspecialUno,
            updatePokemon.poderEspecialDos, updatePokemon.fechaCaptura, updatePokemon.nivel, updatePokemon.entrenadorId);
        if (update) {
            return response.send(update);
        } else {
            throw  new PeticionNotfoundException(
                'Id No encontrado',
                10,
                error
            )
        }


    }

}