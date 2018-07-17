import {HttpException, HttpStatus} from "@nestjs/common";


export class PeticionErroneaException extends HttpException {
    constructor(private _mensaje,
                private _nivelError,
                private _detalle,
                ) {
        super({
            mensaje: _mensaje,
            nivelError: _nivelError,
            detalle: _detalle,
            statusCode: HttpStatus.BAD_REQUEST,
        }, HttpStatus.NOT_FOUND);
    }
}