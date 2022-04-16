import { CommentsService } from './comments.service';
import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import ProjectSchema from 'src/schemas/project.schema';
import DeskSchema from 'src/schemas/desk.schema';
import ColumnSchema from 'src/schemas/column.schema';
import TaskSchema from 'src/schemas/task.schema';
import PrioritySchema from 'src/schemas/priority.schema';
import CommentSchema from 'src/schemas/comment.schema';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Project', schema: ProjectSchema },
      { name: 'Desk', schema: DeskSchema },
      { name: 'Column', schema: ColumnSchema },
      { name: 'Task', schema: TaskSchema },
      { name: 'Priority', schema: PrioritySchema },
      { name: 'Comment', schema: CommentSchema },
    ]),
    ]
})
export class CommentsModule {}
