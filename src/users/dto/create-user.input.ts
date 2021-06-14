import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'email of user' })
  email: string;

  @Field(() => String, { description: 'Password of user' })
  password: string;

  @Field(() => String, { description: 'name of user', nullable: true })
  name?: string;

  @Field(() => String, { description: 'mobileNo of user', nullable: true })
  mobileNo?: string;
}
