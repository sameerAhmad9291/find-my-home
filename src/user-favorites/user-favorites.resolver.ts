import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserFavoritesService } from './user-favorites.service';
import { UserFavorite } from './entities/user-favorite.entity';
import { CreateUserFavoriteInput } from './dto/create-user-favorite.input';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/common/decorators';
import { ICurrentUser } from 'src/core/interfaces/current-user.interface';

@UseGuards(GqlAuthGuard)
@Resolver(() => UserFavorite)
export class UserFavoritesResolver {
  constructor(private readonly userFavoritesService: UserFavoritesService) { }

  @Mutation(() => UserFavorite)
  createUserFavorite(@CurrentUser() user: ICurrentUser,
    @Args('createUserFavoriteInput') createUserFavoriteInput: CreateUserFavoriteInput) {
    createUserFavoriteInput.user_id = user.user_id;
    return this.userFavoritesService.create(createUserFavoriteInput);
  }

  @Query(() => [UserFavorite], { name: 'userFavorites' })
  findAll(@CurrentUser() user: ICurrentUser) {
    return this.userFavoritesService.findAll(user.user_id);
  }

  @Query(() => UserFavorite, { name: 'userFavorite' })
  findOne(@Args('_id', { type: () => String }) _id: string) {
    return this.userFavoritesService.findOne(_id);
  }

  @Mutation(() => UserFavorite)
  removeUserFavorite(@Args('_id', { type: () => String }) _id: string) {
    return this.userFavoritesService.remove(_id);
  }
}
