import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Address {
    @Field(() => String, { description: 'city' })
    city: string;

    @Field(() => String, { description: 'country' })
    country: string;

    @Field(() => String, { description: 'state' })
    state: string;

    @Field(() => String, { description: 'zipCode' })
    zipCode: string;

    @Field(() => String, { description: 'Street Address' })
    streetAddress: string;
}