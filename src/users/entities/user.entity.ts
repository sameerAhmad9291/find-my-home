import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IUser } from '../interfaces';

@ObjectType()
export class User implements IUser {
  @Field(() => ID,)
  _id: string;

  @Field(() => String,)
  email: string;

  @Field(() => String,)
  password: string;

  @Field(() => String, { nullable: true })
  name: string;

  @Field(() => String, { nullable: true })
  mobileNo: string;
}
