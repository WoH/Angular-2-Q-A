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
  upvoted: any[];

  constructor(private af: AngularFire) { 
    this.questions = af.database.list('/questions');
    this.upvoted = JSON.parse(localStorage.getItem('upvoted')) || [];
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

  upvote(key, question) {
    this.upvoted.push(question.$key);
    localStorage.setItem('upvoted', JSON.stringify(this.upvoted));
    this.af.database.list('/questions').update(key, {upvotes: ++question.upvotes});
  }

  isUpvoted(question): boolean {
    return this.upvoted.indexOf(question.$key) > -1;
  }

  ngOnInit() { }

  ngOnDestroy() { }

}
