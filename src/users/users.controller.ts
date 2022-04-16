import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/createUser')
  async createProject(@Body() body) { 
      return await this.userService.createUser(body);
  }

  @Post('/updateUser')
  async updateUser(@Body() body) { 
      return await this.userService.updateUser(body);
  }

  @Post('/getUserById')
  async getUserById(@Body() body) { 
      return await this.userService.getUserById(body).populate('friends');
  }

  @Get('/getListUsers')
    async getListUsers(){
      return await this.userService.getListUsers();
    }

    
}
