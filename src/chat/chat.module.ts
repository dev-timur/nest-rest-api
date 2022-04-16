import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import ChatSchema from 'src/schemas/chat.schema';
import MessageSchema from 'src/schemas/message.schema';
import UserSchema from 'src/schemas/user.schema';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
    imports: [
        MongooseModule.forFeature([
          { name: 'Chat', schema: ChatSchema },
          { name: 'Message', schema: MessageSchema },
          { name: 'User', schema: UserSchema },
        ]),
      ],
    controllers: [ChatController],
    providers: [ChatService],
})
export class ChatModule {}
