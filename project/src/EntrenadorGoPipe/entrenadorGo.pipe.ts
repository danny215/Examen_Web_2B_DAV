import {ArgumentMetadata, Injectable} from '@nestjs/common';
import * as Joi from 'joi';
import {PeticionErroneaException} from '../excepciones/peticion-erronea.exception';
import {PeticionNotfoundException} from "../excepciones/peticion-notfound.exception";

@Injectable()
export class EntrenadorGoPipe {
    constructor(private readonly _schema) {

    }

    transform(jsonAValidar: any, metadata: ArgumentMetadata) {
        const {
            error
        }
            = Joi.validate(jsonAValidar, this._schema);
        const {
            errorNotFound
        }
            = Joi.validate(jsonAValidar, this._schema);
        if (error) {
            throw new PeticionErroneaException(
                'Petición Inválida',
                10,
                error)
        }
        if (errorNotFound) {
            throw  new PeticionNotfoundException(
                'No encontrado',
                3,
                errorNotFound
            )
        }
        else {
            return jsonAValidar;
        }
    }
}