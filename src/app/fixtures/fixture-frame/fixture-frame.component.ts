import { Component, OnInit } from '@angular/core';
import * as firebaseui from 'firebaseui';


@Component({
  selector: 'app-fixture-frame',
  templateUrl: './fixture-frame.component.html',
  styleUrls: ['./fixture-frame.component.css']
})
export class FixtureFrameComponent implements OnInit {
  ui:firebaseui.auth.AuthUI;
  loggedin(event){
    console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
