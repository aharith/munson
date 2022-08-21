import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription, tap } from 'rxjs';
import IUser from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  name: string | any
  email: string | any
  userProfile: AngularFirestoreDocument<IUser>
  subs: any
  userSub: any

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore,
    private toastr: ToastrService
  ) {
    this.subs = this.auth.getActiveUserData()?.subscribe(
      (user) => {
        this.userProfile = user
        this.name = user.name
        this.email = user.email
      }
    )
  }

  ngOnInit() {
    
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
    this.userSub?.unsubscribe()
  }

  check() {
    console.log(this.userProfile);
    console.log(this.name);
    
  }

  async update() {
    try {
      await this.afs.doc(`user/${this.auth.userCred.user.uid}`).set({
        name: this.name,
        email: this.email
      })
      this.toastr.success('Updated successfully!');
    } catch (error) {
      this.toastr.error('server error')
    }
  }
}
