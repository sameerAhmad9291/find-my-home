import { Module } from '@nestjs/common';
import { ApartmentsService } from './apartments.service';
import { ApartmentsResolver } from './apartments.resolver';
import { apartmentsProviders } from './apartments.provider';
import { DatabaseModule } from 'src/core/database/database.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  providers: [ApartmentsResolver, ApartmentsService, ...apartmentsProviders]
})
export class ApartmentsModule { }
