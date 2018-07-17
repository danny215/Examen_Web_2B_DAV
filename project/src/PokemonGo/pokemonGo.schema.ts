import * as Joi from 'joi';

export const POKEMONGO_SCHEMA= Joi.object().keys({
    numeroPokemon:Joi.number().required(),
    nombrePokemon:Joi.string().alphanum().min(5).max(30).required(),
    poderEspecialUno:Joi.string().alphanum().min(10).max(60).required(),
    poderEspecialDos:Joi.string().alphanum().min(10).max(60).required(),
    fechaCaptura:Joi.date().max('03-06-2018').required(),
    nivel:Joi.number().required(),
    entrenadorId:Joi.number().required(),
});