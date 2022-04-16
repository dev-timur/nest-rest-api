import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { AppAuthGuard } from 'src/auth/jwt-auth.guard';
import ColumnSchema from 'src/schemas/column.schema';
import DeskSchema from 'src/schemas/desk.schema';
import PrioritySchema from 'src/schemas/priority.schema';
import ProjectSchema from 'src/schemas/project.schema';
import StageSchema from 'src/schemas/stage.schema';
import TaskSchema from 'src/schemas/task.schema';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

@Module({
    controllers: [ProjectsController],
    providers: [ProjectsService],
    imports: [
      MongooseModule.forFeature([
        { name: 'Project', schema: ProjectSchema },
        { name: 'Desk', schema: DeskSchema },
        { name: 'Column', schema: ColumnSchema },
        { name: 'Task', schema: TaskSchema },
        { name: 'Priority', schema: PrioritySchema },
        { name: 'Stages', schema: StageSchema },
      ]),

      forwardRef(() => AuthModule),
    ]
  })
export class ProjectsModule {}
