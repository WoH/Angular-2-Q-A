export class Question {
    author: string;
    title: string;
    content: string;
    upvotes: number;

    constructor() {
        this.author = "";
        this.title = "";
        this.content = "";
        this.upvotes = 0;
    }
}