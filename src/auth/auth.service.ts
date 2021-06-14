import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/interfaces';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (!user)
            return null;

        const isCorrect = await bcrypt.compare(password, user.password);

        if (!isCorrect)
            return null;

        return user;
    }

    async login(user: IUser) {
        const payload = { username: user.email, sub: user._id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
