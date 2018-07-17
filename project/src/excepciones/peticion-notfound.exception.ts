import {HttpException, HttpStatus} from "@nestjs/common";


export class PeticionNotfoundException extends HttpException {
    constructor(private _mensaje,
                private _nivelError,
                private _detalle) {

        super(
            {
                mensaje: _mensaje,
                nivelError: _nivelError,
                detalle: _detalle,
                status: HttpStatus.NOT_FOUND
            },
            HttpStatus.NOT_FOUND
        );
    }
}