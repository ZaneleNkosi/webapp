import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { fetchRooms } from '../firebase_apiKey';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  rooms : any;
 
  Ref = firebase.storage().ref();
  userID = firebase.auth().currentUser.uid;
  ref = firebase.database().ref('rooms/' + this.userID);
  constructor(private router: ActivatedRoute, private rout: Router) {
    
    this.ref.on('value', resp => {
      this.rooms = fetchRooms(resp);
        console.log(this.rooms);
      })
   }

  ngOnInit() {
  }
  bookedby(){
    this.rout.navigateByUrl('details');
  }

  logout(){
    firebase.auth().signOut().then(() => {
      console.log('logged Out');
       this.rout.navigateByUrl('/');
    }).catch(function(error) {
      // An error happened.
    });

  }

}
