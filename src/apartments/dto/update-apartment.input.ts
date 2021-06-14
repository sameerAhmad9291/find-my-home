import { CreateApartmentInput } from './create-apartment.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateApartmentInput extends PartialType(CreateApartmentInput) {
  @Field(() => String, { nullable: true })
  _id: string;

  @Field(() => String, { description: 'Apartment No', nullable: true })
  apartmentNo: string;

  @Field(() => Number, { description: 'Total Rooms', nullable: true })
  totalRooms: number;

  @Field(() => Number, { description: 'Rent amount', nullable: true })
  rentAmount: number;
}
