import { Document } from 'mongoose';
import IColumn from './column.interface';
import IComment from './comment.interface';
import IUser from './user.interface';
export default class ITask extends Document {
    name: string;
    description: string;
    responsible: IUser;
    status: string;
    column_id: IColumn;
    comments: IComment[];
    dateCreated: Date;
}
