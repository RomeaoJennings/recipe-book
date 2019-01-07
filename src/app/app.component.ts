import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // loadedFeature = 'recipe';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyARoxJEeuxD6ndeiipPxj_CiHFjZEH6Voo',
      authDomain: 'ng-recipe-book-bdeb9.firebaseapp.com'
    });
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
