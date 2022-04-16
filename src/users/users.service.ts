import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { identity } from 'rxjs';
import IUser from 'src/interfaces/user.interface';
export type User = any;
@Injectable()
export class UsersService {

    constructor(
        @InjectModel('User') private readonly userModel: Model<IUser>,
      ) {}


      async findOne(login: string): Promise<User | undefined> {
        const result =  await this.userModel.find({login: login}).exec();
        console.log('resuuult', result);
        return result;
        // return this.users.find(user => user.username === username);
      }

      async getByLogin(login: string): Promise<IUser> {
        return this.userModel
          .findOne({ login })
          .exec();
      }

      async createUser(body): Promise<IUser> {
        return this.userModel.create(body);
      }

      async getListUsers(): Promise<IUser[]> {
        return this.userModel.find({}).exec();
      }

      updateUser(body) {
        console.log('here', body);
        return this.userModel.findByIdAndUpdate(body._id, body)
      }

      getUserById(body) {
        return this.userModel.findById(body._id);
      }
      
}
