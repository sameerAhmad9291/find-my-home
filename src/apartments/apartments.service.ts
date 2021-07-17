import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ApartmentFilterDto, PaginationParams } from './dto/apartment-filter.dto';
import { CreateApartmentInput } from './dto/create-apartment.input';
import { UpdateApartmentInput } from './dto/update-apartment.input';
import { PaginationApartment } from './entities/apartment.entity';
import { IApartment } from './interfaces/apartment.interface';

@Injectable()
export class ApartmentsService {
  constructor(@Inject('APARTMENT_MODEL')
  private apartmentModel: Model<IApartment>) {
  }

  create(createApartmentInput: CreateApartmentInput) {
    /// todo get userId from context
    return this.apartmentModel.create(createApartmentInput);
  }

  async getPaginatedData(filters: ApartmentFilterDto, paginationParams: PaginationParams): Promise<PaginationApartment> {

    const { page: pageNo, limit: pageSize } = paginationParams;

    const aggregatePipeLines: any = [
      {
        '$facet': {
          metadata: [
            { $count: "total" },
            { $addFields: { pageNo, pageSize, } }
          ],
          data: [{ $skip: pageSize * (pageNo - 1) }, { $limit: pageSize }]
        }
      },
      {
        $project: {
          data: 1,
          pageNo: { $arrayElemAt: ['$metadata.pageNo', 0], },
          total: { $arrayElemAt: ['$metadata.total', 0], },
          pageSize: { $arrayElemAt: ['$metadata.pageSize', 0], },
        }
      }
    ];
    if (filters?.location) {
      aggregatePipeLines.unshift({
        $geoNear: {
          near: { type: "Point", coordinates: filters.location },
          distanceField: "dist.calculated",
          includeLocs: "dist.location",
          spherical: true,
          query: {
            ...(filters.city && { 'address.city': filters.city }),
            ...(filters.country && { 'address.city': filters.country }),
            ...(filters.rooms && { 'totalRooms': filters.rooms })
          },
          ...(filters.minDistance && { minDistance: filters.minDistance }),
          ...(filters.maxDistance && { maxDistance: filters.maxDistance }),
        }
      })
    } else if (filters?.country || filters?.city || filters?.rooms) {
      aggregatePipeLines.unshift({
        $match: {
          ...(filters.city && { 'address.city': filters.city }),
          ...(filters.country && { 'address.city': filters.country }),
          ...(filters.rooms && { 'totalRooms': filters.rooms })
        }
      })
    }

    const [result] = await this.apartmentModel.aggregate(aggregatePipeLines);

    const pagination: PaginationApartment = {
      data: result.data,
      pageNo: (result?.pageNo || 0),
      total: (result?.total || 0),
      pageSize: (result?.pageSize || 0),
    }
    return pagination;
  }

  findAll() {
    return this.apartmentModel.find({}).lean();
  }

  findOne(_id: string) {
    return this.apartmentModel.findById({ _id }).lean();
  }

  update(_id: string, updateApartmentInput: UpdateApartmentInput) {
    return this.apartmentModel.findByIdAndUpdate({ _id }, { ...updateApartmentInput }).lean();
  }

  remove(_id: string) {
    return this.apartmentModel.findByIdAndDelete(_id);
  }
}
