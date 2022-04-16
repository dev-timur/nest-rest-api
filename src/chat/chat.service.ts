/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IChat from 'src/interfaces/chat.interface';
import IMessage from 'src/interfaces/message.interface';
import IUser from 'src/interfaces/user.interface';

@Injectable()
export class ChatService {

    constructor(
        @InjectModel('Chat') private readonly chatModel: Model<IChat>,
        @InjectModel('Message') private readonly messageModel: Model<IMessage>,
        @InjectModel('User') private readonly userModel: Model<IUser>,
      ) {}


      async getChatById(body: any) {
        console.log('userId', body);
        const userArray = {$in: body}
        return this.chatModel.findOne({users: body.userId}).populate('users').exec();
      }

      async createChat(body) {
          console.log('body', body);
          console.log('body', body.userIds);      
          const chatObj = {
            messages: null,
            users:  body.userIds,
          }
          console.log('chatObj', chatObj);
          const result = await this.chatModel.create(chatObj)
          return result;

      }
}
