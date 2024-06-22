import { Module } from '@nestjs/common';
import { DemoService } from './demo.service';
import { DemoController } from './demo.controller';
import { PrismaModule } from '@database/prisma/prisma.module';
import { DemoRepository } from './demo.repository';

@Module({
  imports: [PrismaModule],
  controllers: [DemoController],
  providers: [DemoService, DemoRepository],
})
export class DemoModule {}
