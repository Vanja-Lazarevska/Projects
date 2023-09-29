import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { userRegister, UserRequestBody } from 'src/app/interfaces/user.interface';
import { UsersRepositoryService } from './users-repository.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  invalidUser=  new BehaviorSubject<boolean>(true)

  constructor(private readonly userRepository: UsersRepositoryService, private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}


   userLogin = async (userRequestBody: UserRequestBody) => {
    console.log('3', userRequestBody);
   (await this.userRepository.login(userRequestBody)).subscribe((data) => {
    console.log(data)
    if(data) {
      console.log('USER WE HAVE',data)   // access_token:token
      console.log(data.access_token) // samo token
      localStorage.setItem('user', JSON.stringify(data.access_token))
      this.invalidUser.next(false)
      const triedRoute = this.activatedRoute.snapshot.queryParamMap.get('returnUrl') || '/admin'
      this.router.navigate([triedRoute])

    }
    else {
      console.log('USER WE DO NOT HAVE',data)    // null
      
      this.invalidUser.next(true)
    }
    })

  }
  userLogout () {
    localStorage.removeItem('user')
    this.invalidUser.next(true)
    console.log(localStorage.removeItem('user'))

  }

  userRegister = async (userRequestBody: userRegister) =>{
     (await this.userRepository.register(userRequestBody)).subscribe(data => console.log(data))
  }


}
