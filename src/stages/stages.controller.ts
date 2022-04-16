/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import IStage from 'src/interfaces/stage.interface';
import { StagesService } from './stages.service';

@Controller('/stages')
export class StagesController {
    constructor(private readonly stagesService: StagesService) {}


    @Post('/createStage')
    async createStage(@Body() body: IStage) { 
        return await this.stagesService.createStage(body);
    }
}
