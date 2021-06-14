import { CreateUserFavoriteInput } from './create-user-favorite.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserFavoriteInput extends PartialType(CreateUserFavoriteInput) {
  @Field(() => String, { nullable: false })
  _id: string;
}
