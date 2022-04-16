import { TasksService } from './tasks.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import ProjectSchema from 'src/schemas/project.schema';
import DeskSchema from 'src/schemas/desk.schema';
import PrioritySchema from 'src/schemas/priority.schema';
import TaskSchema from 'src/schemas/task.schema';
import ColumnSchema from 'src/schemas/column.schema';

@Module({
    controllers: [TasksController],
    providers: [TasksService],
    imports: [
      MongooseModule.forFeature([
        { name: 'Project', schema: ProjectSchema },
        { name: 'Desk', schema: DeskSchema },
        { name: 'Column', schema: ColumnSchema },
        { name: 'Task', schema: TaskSchema },
        { name: 'Priority', schema: PrioritySchema },
      ]),
    ]
  })
export class TasksModule {}
