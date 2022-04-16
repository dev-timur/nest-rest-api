import { ConsoleLogger, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AppAuthGuard } from './jwt-auth.guard';

@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('login')
    async login(@Req() req) {
        console.log('boooody', req.body);
      return this.authService.login(req.body);
    }
  
    @Get('validateToken')
    @UseGuards(AppAuthGuard)
    async validateToken(): Promise<any> {
      return Promise.resolve({ status: true });
    }
    
}
