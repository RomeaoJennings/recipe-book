import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FirebaseConfig } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // loadedFeature = 'recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: FirebaseConfig.apiKey,
      authDomain: FirebaseConfig.authDomain
    });
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
