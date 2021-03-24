import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { League } from '../league-table-dialog/league';
import * as firebaseui from 'firebaseui';


const getObservable = (collection:AngularFirestoreCollection<League>)=>{
  const subject=new BehaviorSubject([]);
  collection.valueChanges({idField:'id'}).subscribe((val:League[])=>{
    subject.next(val);
  });
  return subject;
}
@Component({
  selector: 'app-league-table-frame',
  templateUrl: './league-table-frame.component.html',
  styleUrls: ['./league-table-frame.component.css']
})
export class LeagueTableFrameComponent implements OnInit {
  ui:firebaseui.auth.AuthUI;
  loggedIn(event){
    console.log(event);
  }


  leagues= this.store.collection('League').valueChanges({ifField:'id'});


  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
  }

}

