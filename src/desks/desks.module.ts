import { DesksService } from './desks.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ProjectSchema from 'src/schemas/project.schema';
import DeskSchema from 'src/schemas/desk.schema';
import ColumnSchema from 'src/schemas/column.schema';
import TaskSchema from 'src/schemas/task.schema';
import { DesksController } from './desks.controller';
import PrioritySchema from 'src/schemas/priority.schema';

@Module({
  controllers: [DesksController],
  providers: [DesksService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Project', schema: ProjectSchema },
      { name: 'Desk', schema: DeskSchema },
      { name: 'Column', schema: ColumnSchema },
      { name: 'Task', schema: TaskSchema },
      { name: 'Priority', schema: PrioritySchema },
    ]),
  ],
})
export class DesksModule {}
