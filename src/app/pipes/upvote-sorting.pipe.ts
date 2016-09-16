import { Pipe, PipeTransform } from '@angular/core';
import { Question } from '../models/question'

@Pipe({
  name: 'upvoteSorting'
})
export class UpvoteSortingPipe implements PipeTransform {

  transform(questions: Question[], args?: any): Question[] {
    return questions ? questions.sort((q1, q2) => q2.upvotes - q1.upvotes) : null;
  }

}
