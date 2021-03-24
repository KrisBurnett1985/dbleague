import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { FixtureFrameComponent } from './../app/fixtures/fixture-frame/fixture-frame.component';
import { LeagueTableFrameComponent } from './../app/leagueTable/league-table-frame/league-table-frame.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'fixtures',
    component: FixtureFrameComponent,
  },
  {
    path: 'leaguetable',
    component: LeagueTableFrameComponent,
  },
 
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule { }
