import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomFormsModule } from 'ng2-validation';
import { User, userRegister, UserRequestBody } from 'src/app/interfaces/user.interface';
import { Token } from './token.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersRepositoryService {
  private readonly URL = 'http://localhost:3000/users'

  constructor(private readonly httpClient: HttpClient) { }

  login = async (userRequestBody: UserRequestBody) => {
    console.log('what do we sent',userRequestBody)
    return this.httpClient.post<Token>(`${this.URL}/login`, userRequestBody)

  }

  register = async (userCredentials: userRegister) => {
    return this.httpClient.post(`${this.URL}/register`, userCredentials)
  }



  isLogedIn () {

  }



  
}
