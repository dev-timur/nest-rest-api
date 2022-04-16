import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IColumn from 'src/interfaces/column.interface';
import IPriority from 'src/interfaces/priority.interface';
import ITask from 'src/interfaces/task.interface';
import { ObjectID } from 'mongodb';

@Injectable()
export class TasksService {
    constructor(
        @InjectModel('Task') private readonly taskModel: Model<ITask>,
        @InjectModel('Priority') private readonly priorityModel: Model<IPriority>,
        @InjectModel('Column') private readonly columnModel: Model<IColumn>
      ) {}

     async updateTask(body: {_id: string, newData: ITask}){
        console.log('body', body)
        return this.taskModel.findByIdAndUpdate(body._id, body.newData, { new: true });
     }

     async createTask(body: ITask) {
        const task = (await this.taskModel.create(body)).toJSON();
        const result = this.columnModel.findByIdAndUpdate(body.column_id, { $push: { tasks: task} }, { new: true })
        return result;
     }

     async getPriorities(){
        return this.priorityModel.find();
     }
}
