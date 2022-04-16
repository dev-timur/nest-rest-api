import { forwardRef, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import IUser from 'src/interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
    constructor(
         private usersService: UsersService,
        @Inject(forwardRef(() => JwtService)) private readonly jwtService: JwtService,
        @InjectModel('User') private readonly userModel: Model<IUser>) {}

   private _user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

    get user() {
        return this._user.getValue();
    }

    set user(data) {
        this._user.next(data);
    }
  
    async validateUser(body): Promise<any> {
    if (body.login && body.password) {
        console.log('here', body);
        const user = await this.usersService.getByLogin(body.login);
        console.log('user', user);
        if (!user || user.password !== body.password) {
            throw new UnauthorizedException('Неверный логин или пароль');
          }
        if (user && user.password === body.password){
            return user;
        }
    }
    }


    async login(body: any) {
        const user = await this.validateUser(body);
        this._user.next(user);

        if (!user) {
            throw new UnauthorizedException('Неверный пароль');
          }

        const payload = {
          _id: user._id,
          login: user.login,
        };

        const token = this.jwtService.sign(payload, {
            expiresIn: body.remember ? '10y' : '7d',
          });

        const userInfo = await this.userModel.findById(user._id).populate('friends')

        if(!userInfo){
          throw new UnauthorizedException('Неверный логин или пароль');
        }
        console.log('userinfffffo', userInfo);

          console.log('fewfwe', {
            id: user._id,
            userName: user.login,
            token,
        })
          return {
            code: 200,
            id: user._id,
            userInfo: userInfo.toJSON(),
            userName: user.login,
            token,
        }

      }
     
  }