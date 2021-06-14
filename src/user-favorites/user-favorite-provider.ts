import { Connection } from 'mongoose';
import { userFavoriteSchema } from './schemas/user-favorite.schema';
export const userFavoriteProviders = [
  {
    provide: 'USER_FAVORITE_MODEL',
    useFactory: (connection: Connection) => connection.model('userFavorites', userFavoriteSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];