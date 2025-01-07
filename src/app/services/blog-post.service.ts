import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  // Förstrukturerade inlägg
  private blogPosts: BlogPost[] = [
    new BlogPost(
      'bittersweet',
      'skyli4.jpg',
      'This is my first blog post! Stay tuned for more updates.',
      new Date('2023-12-01'),
      10,
      2,
      ['Great start!', 'Looking forward to more posts.']
    ),
    new BlogPost(
      'her',
      'skyli1.png',
      'Here are some useful tips to improve your Angular development.',
      new Date('2023-12-15'),
      20,
      5,
      ['Very helpful!', 'Thanks for sharing.']
    ),
    new BlogPost(
      'satellites',
      'skyli2.png',
      'Sharing my amazing travel experiences with you all.',
      new Date('2024-01-01'),
      30,
      1,
      ['Wow, beautiful pictures!', 'Where is this?']
    ),
  ];

  // Hämta alla blogg-inlägg
  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  // Lägg till ett nytt inlägg
  addBlogPost(post: BlogPost): void {
    this.blogPosts.push(post);
  }
}
