import * as Joi from 'joi';

export const ENTRENADOR_SCHEMA= Joi.object().keys({
    entrenadorId:Joi.number().required(),
    nombres:Joi.string().alphanum().min(3).max(30).required(),
    apellidos:Joi.string().alphanum().min(5).max(30).required(),
    fechaNacimiento:Joi.date().max('03-06-2012').required(),
    numeroMedallas:Joi.number().required(),
    campeonActual:Joi.boolean().required(),
});