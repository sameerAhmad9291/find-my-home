import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserFavoriteInput } from './dto/create-user-favorite.input';
import { UpdateUserFavoriteInput } from './dto/update-user-favorite.input';
import { IUserFavorite } from './interfaces/user-favorite.interface';

@Injectable()
export class UserFavoritesService {
  constructor(@Inject('USER_FAVORITE_MODEL')
  private userFavoriteModel: Model<IUserFavorite>) {
  }
  create(createUserFavoriteInput: CreateUserFavoriteInput) {
    return this.userFavoriteModel.create(createUserFavoriteInput);
  }

  findAll(user_id) {
    return this.userFavoriteModel.find({ user_id });
  }

  findOne(_id: string) {
    return this.userFavoriteModel.findById(_id);
  }

  remove(_id: string) {
    return this.userFavoriteModel.findByIdAndDelete(_id);
  }
}
