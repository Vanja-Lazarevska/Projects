import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserRegister } from 'src/interfaces/user.interface';
import { UsersService } from './users.service';
import * as bcrypt from 'bcrypt'
import { LocalAuthGuard } from 'src/auth/guards/local-auth-guard';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService, private readonly authService: AuthService){}


    @Post('/login') 
    @UseGuards(LocalAuthGuard)
     login( @Request() req) {
      console.log('WHAT IS THIS',req.user)
      // ako stignemo do tuj znaci vise deka user e postoi i e verificiran ss njego usernam i pw
      // const {email, password } = loginCredentials
      return this.authService.login(req.user)    // treba li await?

    }
    @Post('/register')
    async register(@Body() registerCredentials: UserRegister) {
      console.log('HI')
      console.log(registerCredentials)
      const {username, password, name, lname} = registerCredentials
      const saltOrRounds = 10
      const hashedPassword = await bcrypt.hash(password, saltOrRounds)
      const newUserToSave = {username, password:hashedPassword, name, lname}
      const newUser = await this.userService.registerUser(newUserToSave)

     
        return {
            message: 'User is created'
      
        }
      }

}
