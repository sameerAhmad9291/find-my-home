import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserFavorite {
  @Field(() => String,)
  _id: string;

  @Field(() => String)
  apartment_id: string;

  @Field(() => String)
  user_id: string;

  @Field(() => String)
  createdAt: string;

  @Field(() => Date)
  updatedAt: string;
}
