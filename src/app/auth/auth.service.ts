import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { tokenKey } from '@angular/core/src/view';

@Injectable()
export class AuthService {
  token: string;

  constructor() { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => console.log(err));
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.auth().currentUser.getIdToken()
          .then((token: string) => this.token = token
          );
      })
      .catch(err => console.log(err));
  }

  getToken(): string {
    firebase.auth().currentUser.getIdToken()
      .then((token: string) => this.token = token);
    return this.token;
  }
}
