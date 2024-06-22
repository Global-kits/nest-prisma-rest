import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './config/configuration.module';
import { PrismaModule } from './database/prisma/prisma.module';

@Module({
  imports: [ConfigurationModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
