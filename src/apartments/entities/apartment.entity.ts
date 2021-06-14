import { ObjectType, Field } from '@nestjs/graphql';
import { Address } from './address.entity';

@ObjectType()
class Location {
  @Field(() => String, { description: 'type' })
  type: string;

  @Field(() => [Number], { description: 'coordinates' })
  coordinates: [number];
}

@ObjectType()
export class Apartment {
  @Field(() => String, { description: 'id' })
  _id: string;

  @Field(() => String, { description: 'Apartment No' })
  apartmentNo: string;

  @Field(() => Number, { description: 'Total Rooms' })
  totalRooms: number;

  @Field(() => Boolean, { description: 'available', nullable: true })
  isAvailable: boolean;

  @Field(() => Location, { description: 'Location', nullable: true })
  location: Location;

  @Field(() => Address, { description: 'Address', nullable: true })
  address: Address;

  @Field(() => Number, { description: 'Rent' })
  rentAmount: number;

  @Field(() => Boolean, { description: 'furnished', nullable: true })
  isFurnished: boolean;

  @Field(() => String, { description: 'owner id' })
  owner_id: string;
}

@ObjectType()
class MetadataType {
  @Field(() => Number)
  pageNo: number;

  @Field(() => Number)
  pageSize: number;

  @Field(() => Number)
  total: number;
}

@ObjectType()
export class PaginationApartment extends MetadataType {
  @Field(() => [Apartment])
  data: [Apartment]
}