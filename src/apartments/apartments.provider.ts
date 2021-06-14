import { Connection } from 'mongoose';
import { apartmentSchema } from './schemas/apartment.schema';

export const apartmentsProviders = [
  {
    provide: 'APARTMENT_MODEL',
    useFactory: (connection: Connection) => connection.model('apartments', apartmentSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];