import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import IComment from 'src/interfaces/comment.interface';
import ITask from 'src/interfaces/task.interface';

@Injectable()

export class CommentsService {
    constructor(
        @InjectModel('Comment') private readonly commentModel: Model<IComment>,
        @InjectModel('Task') private readonly taskModel: Model<ITask>,
      ) {}


      async getCommentsById(param) {
            const result = await this.commentModel.find({ task_id: param.id }).sort({dateCreated: -1}).populate('user').lean().exec();
            return result;
      }

      async createComment(body) {
        const comment = {
            text: body.comment,
            user: body.user,
            dateCreated: body.dateCreated,
            task_id: body.taskId,
        }
        return this.commentModel.create(comment);
         
      }




}
