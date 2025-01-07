import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';
import { BlogPost } from '../../models/blog-post';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  blogPosts: BlogPost[] = [];

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit(): void {
    // Hämta alla blogg-inlägg från tjänsten
    this.blogPosts = this.blogPostService.getBlogPosts();
  }
}
