import { Document } from 'mongoose';
import IDesk from './desk.interface';
import IStage from './stage.interface';
import IUser from './user.interface';
export default class IProject extends Document {
    name: string;
    desks: IDesk[];
    team: IUser[];
    userCreated: IUser;
    responsible: IUser;
    status: boolean;
    dateCreated: Date;
    stages: IStage[];
    currentStage: IStage
}
