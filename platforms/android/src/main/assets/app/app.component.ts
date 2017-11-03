import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCMns2aSZEKhtDlqInhAXTuhuY7LN_kLPc",
      authDomain: "smart-pantry-7cd8a.firebaseapp.com"
    })
  }
}
