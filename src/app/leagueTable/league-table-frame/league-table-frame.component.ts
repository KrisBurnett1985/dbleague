import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { League } from './league';

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

  leagues= this.store.collection('League').valueChanges({ifField:'id'});


  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {
  }

}

