import { Document } from 'mongoose';
import ITask from './task.interface';
import IUser from './user.interface';
export default class IComment extends Document {
    text: string;
    user: IUser;
    dateCreated: Date;
    task_id: ITask;
}
