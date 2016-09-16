import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Question } from '../../models/question'

@Component({
  selector: 'app-question-pose',
  templateUrl: './question-pose.component.html',
  styleUrls: ['./question-pose.component.css']
})
export class QuestionPoseComponent implements OnInit {
  question: Question;

  constructor(private af: AngularFire) { 
    this.question = new Question();
  }

  ngOnInit() { }

  onAskClick() {
    const itemObservable = this.af.database.list('questions');
    itemObservable.push(this.question);
    this.question.title = "";
    this.question.content = "";
   }
}
