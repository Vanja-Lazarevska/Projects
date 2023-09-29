import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import * as dotenv from 'dotenv';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
dotenv.config();

const secret = process.env.API_KEY

@Injectable()
export class AuthGuardGuard implements CanActivate {

  constructor( private readonly authService: AuthService){}

    canActivate(context: ExecutionContext):boolean {
    console.log('GUARD IS ACTIVATED')
    const request = context.switchToHttp().getRequest();
    console.log(request.header('Authorization'))
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      console.log('NO TOKEN')
      throw new UnauthorizedException();
    }
    try {
      console.log('TOKEN')
      console.log(secret)
      const payload = this.authService.validateToken(token)
    
      console.log('PAYLOAF',payload)
      request['user'] = payload;

    } catch {
      console.log('UNATHORIZED')
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    console.log('3',request.headers.authorization)
    const [type, token] = request.header('Authorization').split(' ') ?? [];
    console.log('AUTH HEADERS',request.header('Authorization'))
    return type === 'Bearer' ? token : undefined;
  }
}

