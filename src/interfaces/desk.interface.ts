import { Document } from 'mongoose';
import ITask from './task.interface';
export default class IDesk extends Document {
    name: string;
    columns: ITask[];
}
