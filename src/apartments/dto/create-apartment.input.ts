import { InputType, Field } from '@nestjs/graphql';

@InputType()
class LocationInput {
  @Field(() => String, { description: 'type' })
  type: string;

  @Field(() => [Number], { description: 'coordinates' })
  coordinates: [number];
}

@InputType()
export class AddressInput {
  @Field(() => String, { description: 'City' })
  city: string;

  @Field(() => String, { description: 'Country' })
  country: string;

  @Field(() => String, { description: 'State' })
  state: string;

  @Field(() => String, { description: 'zipCode' })
  zipCode: string;

  @Field(() => String, { description: 'Street Address' })
  streetAddress: string;
}

@InputType()
export class CreateApartmentInput {
  @Field(() => String, { description: '_id', nullable: true })
  _id: string;

  @Field(() => String, { description: 'Apartment No' })
  apartmentNo: string;

  @Field(() => Number, { description: 'Total Rooms' })
  totalRooms: number;

  @Field(() => Number, { description: 'Rent amount' })
  rentAmount: number;

  @Field(() => Boolean, { description: 'Available', nullable: true })
  isAvailable: boolean;

  @Field(() => LocationInput, { description: 'Location', nullable: true })
  location: LocationInput;

  @Field(() => AddressInput, { description: 'Address', nullable: true })
  address: AddressInput;

  @Field(() => Boolean, { description: 'Furnished', nullable: true })
  isFurnished: boolean;

  @Field(() => String, { description: 'Owner id', nullable: true })
  owner_id: string;
}
