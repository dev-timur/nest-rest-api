import { Document } from 'mongoose';
import IDesk from './desk.interface';
import ITask from './task.interface';
export default class IColumn extends Document {
    name: string;
    tasks: ITask[];
    desk_id: IDesk;
}