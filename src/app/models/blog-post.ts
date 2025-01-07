export class BlogPost {
  title: string;
  thumbnailUrl: string;
  body: string;
  creationDate: Date;
  likes: number;
  dislikes: number;
  comments: string[];

  constructor(
    title: string,
    thumbnailUrl: string,
    body: string,
    creationDate: Date = new Date(),
    likes: number = 0,
    dislikes: number = 0,
    comments: string[] = []
  ) {
    this.title = title;
    this.thumbnailUrl = thumbnailUrl;
    this.body = body;
    this.creationDate = creationDate;
    this.likes = likes;
    this.dislikes = dislikes;
    this.comments = comments;
  }

  addLike(): void {
    this.likes++;
  }

  addDislike(): void {
    this.dislikes++;
  }

  addComment(comment: string): void {
    this.comments.push(comment);
  }
}
