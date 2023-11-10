import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { KyselyModule } from '../kysely/kysely.module';

@Module({
  imports: [KyselyModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
