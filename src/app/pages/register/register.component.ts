import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name = new FormControl('')
  email = new FormControl('')
  password = new FormControl('')
  registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
  })

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async createAccount() {
    try {
      await this.authService.createUser(this.registerForm.value)

      
      this.toastr.success('Registered successfully!');
      this.router.navigateByUrl("/");
    } catch (error) {
      console.log(error);
      this.toastr.error('server error')
    }
    
  }

  // let { email, password} = this.registerForm.value

  //   try {
  //     await this.authService.registerUser(email, password)
      // this.toastr.success('Registered successfully!');
      // this.router.navigateByUrl("/");
  //   } catch (e: any) {
  //     if (e.code === FirebaseResponse.EMAIL_EXISTS) {
  //       this.toastr.error('Email already exists. Please login or use another email')
  //     } else {
  //       this.toastr.error('server error')
  //     }
  //   }
}
