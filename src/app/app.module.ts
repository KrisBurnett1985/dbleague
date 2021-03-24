//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from '@angular/material/list'
import  {MatExpansionModule }  from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';


//fire
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirebaseUIModule,firebase } from 'firebaseui-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { AppRoutingModule } from './../app-routing/app-routing.module';
import { FixtureFrameComponent } from './fixtures/fixture-frame/fixture-frame.component';
import { FixtureDialogComponent } from './fixtures/fixture-dialog/fixture-dialog.component';
import { LeagueTableFrameComponent } from './leagueTable/league-table-frame/league-table-frame.component';
import { LeagueTableDialogComponent } from './leagueTable/league-table-dialog/league-table-dialog.component';
import { LeagueTableBodyComponent } from './leagueTable/league-table-body/league-table-body.component';
import { MatTableModule } from '@angular/material/table';

const firebaseUIConfig= {
  signInFlow:'popup',
  singInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  privacyPolicyUrl: 'https://www.iubenda.com/privacy-policy/64696699'
};


@NgModule({
  declarations: [
    AppComponent,
    FixtureFrameComponent,
    FixtureDialogComponent,
    LeagueTableFrameComponent,
    LeagueTableDialogComponent,
    LeagueTableBodyComponent
  ],
  imports: [
  
//fire
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FirebaseUIModule.forRoot(firebaseUIConfig),
    AngularFireAuthModule,
    AngularFireModule,
    //standard
    BrowserModule,
    BrowserAnimationsModule,
    //material
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTableModule,
    //componants
    AppRoutingModule









  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
