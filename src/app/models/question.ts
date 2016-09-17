export type Category = 'Angular' | 'React' | 'Backbone' | 'General';

export class Question {
    author: string;
    title: string;
    content: string;
    upvotes: number;
    category: Category;

    constructor() {
        this.author = "";
        this.title = "";
        this.content = "";
        this.upvotes = 0;
        this.category = 'General';
    }
}