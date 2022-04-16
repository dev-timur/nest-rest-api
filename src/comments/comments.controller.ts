import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CommentsService } from './comments.service';

@Controller('/comments')
export class CommentsController {

    constructor(private  service: CommentsService){

    }

    @Get('/getCommentsById/:id')
    async getCommentsById(@Param() param: {id: string}){ 
        return await this.service.getCommentsById(param);
    }

    @Post('/createComment')
    async createComment(@Body() body) { 
        return await this.service.createComment(body);
    }

}
