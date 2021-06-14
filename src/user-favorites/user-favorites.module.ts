import { Module } from '@nestjs/common';
import { UserFavoritesService } from './user-favorites.service';
import { UserFavoritesResolver } from './user-favorites.resolver';
import { DatabaseModule } from 'src/core/database/database.module';
import { userFavoriteProviders } from './user-favorite-provider';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  providers: [UserFavoritesResolver, UserFavoritesService, ...userFavoriteProviders]
})
export class UserFavoritesModule {}
