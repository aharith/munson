import { Injectable, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { map, Observable, Subscription, tap } from 'rxjs';
import _ from 'lodash';
import IUser from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser>
  public isAuthenticated$: Observable<boolean>
  // public user: AngularFirestoreDocument<IUser>
  // public user: Subscription
  public userCred: any

  constructor(
    public auth: AngularFireAuth,
    public firestore: AngularFirestore
  ) {
    this.usersCollection = firestore.collection('user')
    this.isAuthenticated$ = auth.user.pipe(map(user => !!user))
  }

  public async createUser(userData: any) {
    this.userCred = await this.auth.createUserWithEmailAndPassword(userData.email, userData.password)  
    const resp = await this.usersCollection.doc(this.userCred.user?.uid).set({
      name: userData.name,
      email: userData.email
    })
  }

  public async loginUser(email: string, password: string) {
    this.userCred = await this.auth.signInWithEmailAndPassword(email, password)
    // this.assignActiveUser(this.userCred)
    console.log("loggedIn");
    console.log(this.userCred);
  }

  public async logoutUser() {
    await this.auth.signOut()
    this.userCred = null
    console.log('done logout');
  }

  public getActiveUserData(): Observable<any> | null {
    if (!this.userCred) 
      return null
    console.log(this.userCred);
    return this.firestore.doc(`user/${this.userCred.user.uid}`).valueChanges()
  }
}
  