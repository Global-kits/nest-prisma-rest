/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateTestingDto } from './dto/create-testing.dto';
import { UpdateTestingDto } from './dto/update-testing.dto';
import { TestingRepository } from './testing.repository';

@Injectable()
export class TestingService {
  constructor(private readonly testingRepo: TestingRepository) {}

  create(_createTestingDto: CreateTestingDto) {
    return 'This action adds a new testing';
  }

  findAll() {
    return `This action returns all testing`;
  }

  findOne(id: number) {
    return this.testingRepo.getById(id);
  }

  update(id: number, updateTestingDto: UpdateTestingDto) {
    return `This action updates a #${id} testing`;
  }

  remove(id: number) {
    return `This action removes a #${id} testing`;
  }
}
