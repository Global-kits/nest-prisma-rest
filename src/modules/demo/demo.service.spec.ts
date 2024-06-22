import { Test, TestingModule } from '@nestjs/testing';
import { DemoService } from './demo.service';
import { DemoRepository } from './demo.repository';
import { PrismaModule } from '@database/prisma/prisma.module';

describe('DemoService', () => {
  let service: DemoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [PrismaModule],
      providers: [DemoService, DemoRepository],
    }).compile();

    service = module.get<DemoService>(DemoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
