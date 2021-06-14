import { HttpStatus } from "@nestjs/common";
import { BaseException } from "./index";

export class BadRequestException extends BaseException {
    constructor(message){
        super(message, HttpStatus.BAD_REQUEST);
    }
}