import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  async createAccount() {
    // try {
    //   await this.authService.createUser(this.registerForm.value)
    // }
    
  }
}
