import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KyselyModule } from './kysely/kysely.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), KyselyModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
