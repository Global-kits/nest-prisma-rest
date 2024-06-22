import { PrismaService } from '@database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Test as TestModel } from '@prisma/client';

@Injectable()
export class TestingRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getById(id: number): Promise<TestModel> {
    return this.prismaService.test.findUnique({ where: { id } });
  }
}
