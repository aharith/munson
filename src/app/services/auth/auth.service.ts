import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false
  // user: firebase.User | null = null
  user: any

  constructor(public auth: AngularFireAuth) {
    // this.user = this.auth.currentUser
    this.isLoggedIn = !!this.user
  }

  public async createUser(userData: any) {
    console.log(userData);
    
    // const userCred = await this.auth.createUserWithEmailAndPassword(userData.email, userData.password)  



    
    // this.user = this.auth.currentUser
    // this.isLoggedIn = !!this.user
    
    
      // .catch(function(error) {
        
      //   var errorCode = error.code;
      //   var errorMessage = error.message;
      //   if (errorCode == 'auth/weak-password') {
      //     alert('The password is too weak.');
      //   } else {
      //     alert(errorMessage);
      //   }
      //   console.log(error);
      // });

    // await createUserWithEmailAndPassword(this.auth, email, password)
    // this.user = this.auth.currentUser
    // this.isLoggedIn = !!this.user

  }

  // async loginUser(email: any, password: any) {
  //   await signInWithEmailAndPassword(this.auth, email, password)
  //   this.user = this.auth.currentUser
  //   this.isLoggedIn = !!this.user
  // }

  // async logoutUser() {
  //   await signOut(this.auth)
  //   this.user = this.auth.currentUser
  //   this.isLoggedIn = !!this.user
    
  // }

}
