import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/service/users/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
// vanja123456
  invalidUser: boolean
  constructor(private readonly userService: UsersService){}

    ngOnInit(): void {
      this.userService.invalidUser.subscribe(data =>  {
        console.log(data)
        this.invalidUser = data
       } )
    this.initForm()
  }

  loginForm: FormGroup

  initForm () {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })

  }

  handleSubmitForm() {
    console.log(this.loginForm.value)
    this.userService.userLogin(this.loginForm.value)

  }



}
