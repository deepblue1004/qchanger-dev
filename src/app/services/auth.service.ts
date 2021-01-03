import { DocRef } from 'app/shared/enum/DocRef.enum';
import { FirestoreService } from './firestore.service';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { UserRole } from 'app/shared/enum/UserRole.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.default.User>;
  currentUser: User;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private userService: FirestoreService<User>
  ) {
    this.user = firebaseAuth.authState;
    this.user.subscribe(this.firebaseAuthChangeListener);
  }

  isLoggedIn() {
     return this.user.subscribe(user => {
      if (user) {
        return true;
      }
      else {
        return false;
      }
    });
  }

  logout() {
    this.firebaseAuth.signOut();
    console.log("sign out");
  }

  // Create CurrentUser object, promise resolve only when user logged in, else will reject
  createUser() {
    let promise = new Promise<User>((resolve, reject) => {
      this.user.subscribe(user => {
        // If got user logged in
        if(user) {
          this.userService.getById(user.uid, DocRef.USER).subscribe(data => {
            // Check is this new user
            if(data.payload.exists) {
              this.currentUser = data.payload.data();
              resolve(this.currentUser);
            }
            // Create new user
            else {
              this.currentUser = new User({
                id: user.uid,
                createdAt: new Date(user.metadata.creationTime),
                lastLogin: new Date(user.metadata.lastSignInTime),
                firstName: user.displayName,
                lastName: "",
                phone: user.phoneNumber,
                email: user.email,
                emailVerified: user.emailVerified,
                role: UserRole.USER,
                modifiedAt: new Date(user.metadata.creationTime),
                queueing: []
              });
              this.userService.create(new User(this.currentUser), DocRef.USER);
              resolve(this.currentUser);
            }
          });
        }
        else {
          reject("User not login");
        }
      });
    });
    return promise;
  }

  updateUser() {
    this.userService.create(new User(this.currentUser), DocRef.USER);
  }

  private firebaseAuthChangeListener(response) {
    if (response) {
      console.log('Logged in :)');
    } else {
      console.log('Logged out :(');
    }
  }
}
