import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IDesk from 'src/interfaces/desk.interface';
import { ObjectID } from 'mongodb';
import IColumn from 'src/interfaces/column.interface';
import { pipeline } from 'stream';
@Injectable()
export class DesksService {
    constructor(
        @InjectModel('Desk') private readonly deskModel: Model<IDesk>,
        @InjectModel('Column') private readonly columnModel: Model<IColumn>,
      ) {}


    async getDeskById(body){
        const result: any = [
            { $match: { desk_id:  new ObjectID(body.id)}},
 
            { $lookup: { from: 'tasks', localField: 'tasks', foreignField: '_id', as: 'tasks'}},
            { $unwind: { path: '$tasks', "preserveNullAndEmptyArrays": true } },

            { $lookup: {from: 'priorities', localField: 'tasks.priority', foreignField: '_id', as: 'tasks.priority'}},
            { $unwind: { path: '$tasks.priority', "preserveNullAndEmptyArrays": true } },

            { $lookup: {from: 'comments', localField: 'tasks._id', foreignField: 'task_id', as: 'tasks.comments'}},
            { $unwind: { path: '$tasks._id', "preserveNullAndEmptyArrays": true } },

            { $lookup: {from: 'users', localField: 'tasks.responsible', foreignField: '_id', as: 'tasks.responsible'}},
            { $unwind: { path: '$tasks.responsible', "preserveNullAndEmptyArrays": true } },
            
            { $group: {
                _id: "$_id",
                name: { "$first": "$name" },
                dateCreated: { "$first": "$dateCreated" },
                tasks: { "$push": "$tasks" }
            }},
            { $sort : { dateCreated: 1 } },
        ];

        let res =  await this.columnModel.aggregate(result);
        return res;
    }

    async dropTasks(body){
        console.log('body', body)
        const currentDesk = await (await this.deskModel.findById({_id: body.deskId})).populate('columns')
        return  currentDesk.columns[body.prevIndeX].update({$set: { tasks: body.prevItem }}) && currentDesk.columns[body.index].update({$set: { tasks: body.item }}) 
        // return this.deskModel.findByIdAndUpdate(body.deskId, { $set: body.item }, { new: true });
        console.log('currentColum',currentDesk.columns[body.index])
        console.log('currentDesk',currentDesk)
        // this.deskModel.update(
        //     {_id: body.deskId},
        //     { $set: { currentDesk.columns.$index.tasks : body.item } }
        // )
    }

    async createColumn(body){
        console.log('body', body);
        const column = (await this.columnModel.create(body)).toJSON();
        const result =  this.deskModel.findByIdAndUpdate(body.desk_id, {$push: {columns: column} },{new: true})
        return result;
    }
}
