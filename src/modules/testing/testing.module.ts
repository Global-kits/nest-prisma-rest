import { Module } from '@nestjs/common';
import { TestingService } from './testing.service';
import { TestingController } from './testing.controller';
import { TestingRepository } from './testing.repository';

@Module({
  controllers: [TestingController],
  providers: [TestingService, TestingRepository],
})
export class TestingModule {}
