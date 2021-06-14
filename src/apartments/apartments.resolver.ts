import { Resolver, Query, Mutation, Args, Int, Field } from '@nestjs/graphql';
import { ApartmentsService } from './apartments.service';
import { Apartment, PaginationApartment } from './entities/apartment.entity';
import { CreateApartmentInput } from './dto/create-apartment.input';
import { UpdateApartmentInput } from './dto/update-apartment.input';
import { ApartmentFilterDto, PaginationParams } from './dto/apartment-filter.dto';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/common/decorators';
import { ICurrentUser } from 'src/core/interfaces/current-user.interface';

@UseGuards(GqlAuthGuard)
@Resolver(() => Apartment)
export class ApartmentsResolver {
  constructor(private readonly apartmentsService: ApartmentsService) { }

  @Mutation(() => Apartment)
  createApartment(
    @CurrentUser() user: ICurrentUser,
    @Args('createApartmentInput') createApartmentInput: CreateApartmentInput) {
      createApartmentInput.owner_id = createApartmentInput.owner_id || user.user_id
      
    return this.apartmentsService.create(createApartmentInput);
  }

  @Query(() => PaginationApartment, { name: 'apartments' })
  findAll(
    @Args('pagination', {
      nullable: true,
      description: 'Pagination option (page no & limit)',
    })
    paginationParams: PaginationParams,
    @Args('filters', {
      nullable: true,
      description: 'Custom filter options based on fields',
      type: () => ApartmentFilterDto,
    })
    filters: ApartmentFilterDto,
  ) {
    return this.apartmentsService.getPaginatedData(filters, paginationParams);
  }

  @Query(() => Apartment, { name: 'apartment' })
  findOne(@Args('id', { type: () => Int }) _id: string) {
    return this.apartmentsService.findOne(_id);
  }

  @Mutation(() => Apartment)
  updateApartment(@Args('updateApartmentInput') updateApartmentInput: UpdateApartmentInput) {
    return this.apartmentsService.update(updateApartmentInput._id, updateApartmentInput);
  }

  @Mutation(() => Apartment)
  removeApartment(@Args('id', { type: () => String }) id: string) {
    return this.apartmentsService.remove(id);
  }
}
