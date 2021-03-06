import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdUniqueSelectionDispatcher } from '@angular2-material/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionPoseComponent } from './components/question-pose/question-pose.component';
import { UpvoteSortingPipe } from './pipes/upvote-sorting.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyAbxVFNtwI437ePK5NfPAazfD_oTuDqvmE",
  authDomain: "angular2-qa.firebaseapp.com",
  databaseURL: "https://angular2-qa.firebaseio.com",
  storageBucket: "angular2-qa.appspot.com",
  messagingSenderId: "227115473860"
};

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionPoseComponent,
    UpvoteSortingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    MdButtonToggleModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [MdUniqueSelectionDispatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
