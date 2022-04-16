import { Document } from 'mongoose';
import IRole from './role.interface';
export default class IUser extends Document {
    firstName: string;
    middleName: string;
    secondName: string;
    active: boolean;
    role: IRole;
    birthDay: Date;å
    login: string;
    avatar_url: string;
    password: string;
    gender: 'female' | 'male';
    friends: IUser[];
    country: string;
    city: string;
}
