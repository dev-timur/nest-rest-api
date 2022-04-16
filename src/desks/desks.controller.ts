import { Body, Controller, Post } from '@nestjs/common';
import { DesksService } from './desks.service';

@Controller('/desks')
export class DesksController {

    constructor(private  service: DesksService){

    }

    @Post('/getDeskById')
    async getDeskById(@Body() body) { 
        return await this.service.getDeskById(body);
    }

    @Post('/createColumn')
    async createColumn(@Body() body) { 
        return await this.service.createColumn(body);
    }

    @Post('/dropTasks')
    async dropTasks(@Body() body) { 
        return await this.service.dropTasks(body);
    }

}


