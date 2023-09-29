import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from 'src/entities/users.entity';
import { User, UserRegister, UserToSave } from 'src/interfaces/user.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UsersEntity) private readonly userRepository: Repository<User>) {}


    // 1. najdi u db dali postoi takv user ***
    async findOne(username: string){
        console.log(username)
        const userFound = await this.userRepository.findOneBy({
            username: username
        }) 
        console.log('1.',userFound)
        return userFound
    }

    async registerUser(userCredentials: UserRegister) {
        console.log('BYE')
        console.log(userCredentials)

        const newUser = this.userRepository.create(userCredentials)
        const userSaved = await this.userRepository.save(newUser)
        console.log('THIS USER IS CREATED AND SAVED',userSaved)

    }

}
