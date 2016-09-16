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

  getUrl(question: Question) {
    switch(question.category) {
      case "General": return "https://pbs.twimg.com/profile_images/430480275475533824/9OLrZrfb.jpeg"
      case "Angular": return "https://s3.amazonaws.com/urgeio-versus/angularjs/front/front-1382438701570.flat.jpg"
      case "React": return "https://upload.wikimedia.org/wikipedia/commons/5/57/React.js_logo.svg"
      case "Backbone": return "https://s3.amazonaws.com/urgeio-versus/backbone-js/front/front-1382439123416.flat.jpg"
    }
    return "";
  }

  ngOnInit() { }

  ngOnDestroy() { }

}
