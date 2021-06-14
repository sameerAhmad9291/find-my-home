import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { IUser } from './interfaces';

@Injectable()
export class UsersService {

  constructor(@Inject('USER_MODEL')
  private userModel: Model<IUser>) {
  }

  async create(createUserInput: CreateUserInput) {
    const { password } = createUserInput;
    const hashCode = await bcrypt.hash(password, 10);
    return this.userModel.create({
      ...createUserInput,
      password: hashCode,
    });
  }

  findAll() {
    return this.userModel.find({}).lean();
  }

  findOne(email: string) {
    return this.userModel.findOne({ email }).lean();;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    const { password } = updateUserInput;
    const hashCode = await bcrypt.hash(password, 10);
    return this.userModel.findByIdAndUpdate(id, { ...updateUserInput, password: hashCode }).lean();
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id).lean();
  }
}
