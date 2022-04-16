import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IStage from 'src/interfaces/stage.interface';

@Injectable()
export class StagesService {
    constructor(
        @InjectModel('Stage') private readonly stageModel: Model<IStage>,

      ) {}

      createStage(body) {
            console.log('body', body);
        return this.stageModel.create(body);
      }
}
