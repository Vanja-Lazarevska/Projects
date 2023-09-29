import { Injectable, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/interfaces/user.interface';
import { UsersService } from 'src/users/users.service';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt'
import { UsersEntity } from 'src/entities/users.entity';
dotenv.config();

const secret = process.env.API_KEY

@Injectable()
export class AuthService {


    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService){}


    // 2. ako postoi takv user u db, i njego password e tacan vrati ga username njegov a ako ne vrati null
    // ***
    async validateUser(username: string, password: string){
        console.log('authservice',username, password)
    
        const user = await this.usersService.findOne(username)

        if(!user) return null
        const passwordValid = await bcrypt.compare(password, user.password)

        if(user && passwordValid){
        return user
    }
     return null
}

 login(user: UsersEntity) {
    console.log('MAYBE HERE', user.id)
    const payload = {username: user.username, sub:user.id}
    const token = this.jwtService.sign(payload)
    console.log('2.', token)
    return {
        access_token: token
    }

}




 validateToken(token: string) {
    console.log(secret) 
    console.log(token)
    return this.jwtService.verify(token, {
        secret: secret
});
}
}
