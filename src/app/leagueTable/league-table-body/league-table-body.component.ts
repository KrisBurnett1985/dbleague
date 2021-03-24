import { Component, OnInit,Input } from '@angular/core';
import { League } from '../league-table-dialog/league';

@Component({
  selector: 'app-league-table-body',
  templateUrl: './league-table-body.component.html',
  styleUrls: ['./league-table-body.component.css']
})
export class LeagueTableBodyComponent implements OnInit {
  @Input()leagues:League[];


  constructor() { }

  ngOnInit(): void {
  }

}
