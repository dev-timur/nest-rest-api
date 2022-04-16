import { Document } from 'mongoose';
import IChat from './chat.interface';
import IUser from './user.interface';
export default class IMessage extends Document {
    text: string;
    dateCreated: Date;
    user: IUser;
    chat_id: IChat;
}
