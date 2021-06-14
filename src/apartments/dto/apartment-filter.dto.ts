import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ApartmentFilterDto {

  @Field(() => Number, { nullable: true })
  rooms: number;

  @Field(() => String, { nullable: true })
  country: string;

  @Field(() => String, { nullable: true })
  city: string;

  @Field(() => [Number], { nullable: true })
  location: [number];

  @Field(() => Number, { nullable: true })
  minDistance: number;

  @Field(() => Number, { nullable: true })
  maxDistance: number;
}

@InputType()
export class PaginationParams {
  @Field({ nullable: true })
  page: number;

  @Field({ nullable: true })
  limit: number;
}
