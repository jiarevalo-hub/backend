import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prismatask:PrismaService) {}


 create(createUserDto: CreateTaskDto) {
    return this.prismatask.task.create({ data: createUserDto,
    });
  }



  findAll() {
    return this.prismatask.task.findMany();
  }

  findOne(id: number) {
    return this.prismatask.task.findUnique({ where: { id } });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prismatask.task.update({ where: { id }, data: updateTaskDto });
  }

  remove(id: number) {
    return this.prismatask.task.delete({ where: { id } });
  }
}
