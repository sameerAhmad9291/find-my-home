import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserFavoriteInput {
  @Field(() => String, { nullable: true })
  _id: string;

  @Field(() => String,)
  apartment_id: string;

  @Field(() => String, { nullable: true })
  user_id: string;
}
