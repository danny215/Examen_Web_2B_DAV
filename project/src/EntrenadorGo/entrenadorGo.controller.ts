import {Body, Controller, Get, HttpCode, Param, Post, Put, ReflectMetadata, Req, Res} from '@nestjs/common';
import {EntrenadorGoService} from './entrenadorGo.service';
import {ENTRENADOR_SCHEMA} from "./entrenadorGo.schema";
import {EntrenadorGoPipe} from "../EntrenadorGoPipe/entrenadorGo.pipe";
import {UsePipes} from "@nestjs/common/utils/decorators/use-pipes.decorator";
import {PeticionErroneaException} from "../excepciones/peticion-erronea.exception";
import {PeticionNotfoundException} from "../excepciones/peticion-notfound.exception";
import {error} from "util";

@Controller('Entrenador')
export class EntrenadorGoController {
    entrenador_go = {
        nombres: String,
        apellidos: String,
        fechaNacimiento: Date(),
        numeroMedallas: Number,
        campeonActual: Boolean,
    };
    entrenador_go1 = [];

    constructor(private _entrenadorGoService: EntrenadorGoService) {

    }

    @HttpCode(202)
    @Get('MostrarEntrenador')
    mostrarEn(
        @Res() response
    ) {
        const entrenador_go1 = this._entrenadorGoService.mostrarEn();
        return response.send(entrenador_go1);
    }

 //   @Get('mostrarExpress')
 //   mostrarUsuarioExpress(
 //       @Req() request,
  //      @Res() response
   // ) {
  //      return response
 //           .status(200)
  //          .send(this.usuarios);
   // }
    @UsePipes(new EntrenadorGoPipe(ENTRENADOR_SCHEMA))
   @Post('CrearEntrenador')
   // @ReflectMetadata('permisos', ['privado'])

    crearEntrenador(
        @Body(new EntrenadorGoPipe(ENTRENADOR_SCHEMA))
            nuevoEntrenador
    ) {

        const EntrenadorCreado = this._entrenadorGoService.crearEntrenador(nuevoEntrenador);

        if (EntrenadorCreado) {
            return nuevoEntrenador;
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
        const eqp = this._entrenadorGoService.obtenerUno(id.id);
        if (eqp) {
            return response.send(eqp);
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
    editarUno(@Param() id, @Body() updateEntrenador, @Req() request,
              @Res() response) {
        const update = this._entrenadorGoService.editarUno(id.id, updateEntrenador.nombres, updateEntrenador.apellidos, updateEntrenador.fechaNacimiento, updateEntrenador.numeroMedallas, updateEntrenador.campeonActual);
        if (update) {
            return response.send(update);
        }
        else {
            throw  new PeticionNotfoundException(
                'Id No encontrado',
                10,
                error
            )
        }


    }


}


