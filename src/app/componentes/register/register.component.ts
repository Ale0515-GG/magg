import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  //fullname, email, password, confirmPassword
  
  loginFormRegister = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })

  constructor(private fb:FormBuilder){

  }

  get email(){
    return this.loginFormRegister.controls['email']
  }

  get password(){
    return this.loginFormRegister.controls['password']
  }


}
