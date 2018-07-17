import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {EntrenadorGoController} from './EntrenadorGo/entrenadorGo.controller';
import {EntrenadorGoService} from './EntrenadorGo/entrenadorGo.service';
import {PokemonGoService} from "./PokemonGo/pokemonGo.service";
import {PokemonGoController} from "./PokemonGo/PokemonGo.controller";
import {AutorizacionController} from "./Autorizacion/autorizacion.controller";

@Module({
  imports: [],
  controllers: [AppController, EntrenadorGoController,PokemonGoController,AutorizacionController],
  providers: [AppService, EntrenadorGoService,PokemonGoService],
})
export class AppModule {}
