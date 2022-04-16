import { Document } from 'mongoose';
import IProject from './project.interface';
export default class IStage extends Document {
    name: string;
    dateCreated: Date;
    DateCompleted: Date;
    completed: boolean;
    project_id: IProject;
}
