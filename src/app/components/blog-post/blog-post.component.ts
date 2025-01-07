import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';
import { BlogPost } from '../../models/blog-post';

@Component({
  selector: 'app-blog-post',
  standalone: false,

  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css',
})
export class BlogPostComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    // Hämta förstrukturerade inlägg vid laddning
    this.blogPosts = this.blogPostService.getBlogPosts();
  }

  addNewPost(): void {
    const newPost = new BlogPost(
      'New Blog Post',
      'https://example.com/new.jpg',
      'This is a dynamically created blog post.',
      new Date(),
      0,
      0,
      []
    );
    this.blogPostService.addBlogPost(newPost);
    // Uppdatera listan för att visa nya inlägget
    this.blogPosts = this.blogPostService.getBlogPosts();
  }
}
