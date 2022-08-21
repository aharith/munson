import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  email = new FormControl('')
  password = new FormControl('')
  loginForm = new FormGroup({
    email: this.email,
    password: this.password
  })

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  async login() {
    console.log(this.email.value);
    console.log(this.password.value);
    
    try {
      await this.auth.loginUser(this.email.value, this.password.value)
      this.toastr.success('Logged in successfully!');
      this.router.navigateByUrl("/");
    } catch (error) {
      console.log(error);
      this.toastr.error('server error')
    }
  }

}
