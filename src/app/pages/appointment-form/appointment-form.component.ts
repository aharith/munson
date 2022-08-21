import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {
  time: any
  date: any
  address: any
  user: any
  pro: any
  group: any

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ) {
    
  }

  ngOnInit(): void {
  }

  check() {
    console.log('ok');
    
  }
}
