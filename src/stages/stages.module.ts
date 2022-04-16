
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import StageSchema from 'src/schemas/stage.schema';
import { StagesController } from './stages.controller';
import { StagesService } from './stages.service';

@Module({
  controllers: [StagesController],
  providers: [StagesService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Stage', schema: StageSchema },
    ]),
  ],
})
export class StagesModule {}
