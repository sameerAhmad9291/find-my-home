import { HttpException, HttpStatus } from "@nestjs/common";

export class BaseException extends HttpException {
    constructor(message: string, httpStatusCode?: HttpStatus) {
        const httpStatus = httpStatusCode | HttpStatus.INTERNAL_SERVER_ERROR;
        super(message, httpStatus);
    }
}