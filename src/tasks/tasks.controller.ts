import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import ITask from 'src/interfaces/task.interface';
import { TasksService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
    constructor( private  service: TasksService){

    }

    

    @Post('/updateTask')
    async createProject(@Body() body: {_id: string, newData: ITask}) { 
        return await this.service.updateTask(body);
    }

    @Post('/createTask')
    async createTask(@Body() body: ITask) { 
        console.log('body', body);
        return await this.service.createTask(body);
    }

    @Get('/getPriorities')
    async getPriorities(@Req() req) { 
        return await this.service.getPriorities();
    }

}
