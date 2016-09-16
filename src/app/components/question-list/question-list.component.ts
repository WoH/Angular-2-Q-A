import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Question } from '../../models/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: FirebaseListObservable<any>;

  constructor(af: AngularFire) { 
    this.questions = af.database.list('/questions');
  }

  ngOnInit() { }

  ngOnDestroy() {
    
  }

}
