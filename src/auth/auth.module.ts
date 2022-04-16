import { forwardRef, Module, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard, PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.stategy';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from 'src/schemas/user.schema';
import { AppAuthGuard } from './jwt-auth.guard';
@Module({
  controllers: [AuthController],
  imports: [
    UsersModule, PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60d' },
    }),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
    ]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    forwardRef(() => UsersModule),
  ],
  providers: [AuthService, LocalStrategy, AuthService, JwtStrategy, AppAuthGuard],
  exports: [AuthService, AppAuthGuard, AuthService, JwtStrategy, PassportModule, JwtModule],
})
export class AuthModule {
}
