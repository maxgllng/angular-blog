import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';
import { BlogPost } from '../../models/blog-post';

@Component({
  selector: 'app-blog',
  standalone: false,

  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  commentsImg: string = '/comments.png';
  dislikeImg: string = '/dislike.png';
  likeImg: string = '/like.png';
  blogPosts: BlogPost[] = [];

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    // Hämta alla blogg-inlägg från tjänsten
    this.blogPosts = this.blogPostService.getBlogPosts();
  }

  splitBodyText(postBody: string): string[] {
    return postBody.split('\n').filter((line) => line.trim().length > 0);
  }
}
