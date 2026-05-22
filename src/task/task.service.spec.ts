import { Test, TestingModule } from '@nestjs/testing';
import { TaskService } from './task.service';
import { beforeEach, describe, it } from 'node:test';
import { expect } from '@jest/globals';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskService],
    }).compile();

    service = module.get<TaskService>(TaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

