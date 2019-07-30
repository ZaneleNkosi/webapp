import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Users } from '../Users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 showComp= true;
 user = {} as Users;

  constructor(
  ) { }

  ngOnInit() {
  }

  showRegister(){
    this.showComp = !this.showComp
  }
  login(user: Users) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((result) => {
    location.pathname = 'list/'
  });

  }
}
