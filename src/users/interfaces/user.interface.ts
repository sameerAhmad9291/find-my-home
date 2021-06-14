import { Document } from 'mongoose';

export interface IUser {
    readonly _id: string;
    readonly email: string;
    readonly password: string;
    readonly name?: string;
    readonly mobileNo?: string;
}