import { StagesModule } from './stages/stages.module';
import { ChatModule } from './chat/chat.module';
import { ChatService } from './chat/chat.service';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { CommentsModule } from './comments/comments.module';
import { DesksModule } from './desks/desks.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './projects/projects.module';
import ColumnSchema from './schemas/column.schema';
import DeskSchema from './schemas/desk.schema';
import ProjectSchema from './schemas/project.schema';
import TaskSchema from './schemas/task.schema';
import PrioritySchema from './schemas/priority.schema';
import UserSchema from './schemas/user.schema';
import RoleSchema from './schemas/role.schema';
import { UsersModule } from './users/users.module';
import { HttpModule } from '@nestjs/axios';
import ChatSchema from './schemas/chat.schema';
import MessageSchema from './schemas/message.schema';

const connStr = 'mongodb://localhost/nest-rest-api';

@Module({
  imports: [
    StagesModule,
    ChatModule,
    AuthModule,
    TasksModule,
    CommentsModule,
    DesksModule,
    UsersModule,
    AuthModule,

    MongooseModule.forRoot(connStr, {
      useNewUrlParser: true,
    }),

    MongooseModule.forFeature([
      { name: 'Project', schema: ProjectSchema },
      { name: 'Desk', schema: DeskSchema },
      { name: 'Column', schema: ColumnSchema },
      { name: 'Task', schema: TaskSchema },
      { name: 'Priority', schema: PrioritySchema },
      { name: 'User', schema: UserSchema },
      { name: 'Role', schema: RoleSchema },
      { name: 'Chat', schema: ChatSchema },
      { name: 'Message', schema: MessageSchema },
    ]),

    ProjectsModule,
    HttpModule,
  ],

  providers: [],
})
export class AppModule {}
