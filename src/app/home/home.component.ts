import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Users } from '../Users';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 showComp= true;
 user = {} as Users;
 email;
 password;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showRegister(){
    this.showComp = !this.showComp
  }
  sign()
  {

    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then( res =>{
      console.log(res);
      this.router.navigateByUrl("/list") ;

    })
  }
}
