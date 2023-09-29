import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

//   validiraj ga usera prva se povikue kd ke se stavi guard nad rutu ***
  async validate(username: string, password: string) {
    console.log('HERE',username, password)
    const user = await this.authService.validateUser(username, password);
    if (!user) {
    return null 
   }
    return user;
  }
}