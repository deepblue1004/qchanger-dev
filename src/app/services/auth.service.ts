import { DocRef } from 'app/shared/enum/DocRef.enum';
import { FirestoreService } from './firestore.service';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { UserRole } from 'app/shared/enum/UserRole.enum';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.default.User>;
  currentUser: User;

  constructor(
    private firebaseAuth: AngularFireAuth,
    private userService: FirestoreService<User>,
    private storage: AngularFireStorage
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
        if(user != null) {
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

  // Get user's profile pic, return a promise
  getProfilePic(userId?: string) {
    let profilePath = 'users/profile_pic/';
    let profileUrl: Observable<string | null>;
    let promise: Promise<string>;

    if (userId) {
      profilePath += userId;
    }

    profileUrl = this.storage.ref(profilePath).getDownloadURL();

    // let obs = new Observable<string>(subscribe => {

    // });

    // return Observable.create(obs => {
    //   obs.next("111");
    // });

    promise = new Promise<string>((resolve, reject) => {
      profileUrl.subscribe(url => {
        resolve(url);
      }, err => {
        if (err.code == 'storage/object-not-found') {
          profilePath = 'users/profile_pic/default.jpg';
          this.storage.ref(profilePath).getDownloadURL().subscribe(url => {
            console.log(url)
            resolve(url);
          }, err => {
            reject(err);
          });
        }
        else {
          reject(err);
        }
      });
    });

    return promise;
  }

  private firebaseAuthChangeListener(response) {
    if (response) {
      console.log('Logged in :)');
    } else {
      console.log('Logged out :(');
    }
  }
}
