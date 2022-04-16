import { Document } from 'mongoose';
import IMessage from './message.interface';
import IUser from './user.interface';
export default class IChat extends Document {
    name: string;
    _id: string;
    messages: IMessage[];
    users: IUser[];
}