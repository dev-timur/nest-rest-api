/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('/chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) {}

    @Post('/getChatById')
    async getChatById(@Body() body) { 
        return await this.chatService.getChatById(body);
    }

    @Post('/createChat')
    async createChat(@Body() body) { 
        return await this.chatService.createChat(body);
    }



}
