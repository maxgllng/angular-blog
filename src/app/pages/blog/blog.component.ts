import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';
import { BlogPost } from '../../models/blog-post';
import { ModeService } from '../../services/mode.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: false,

  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  newComment = new FormGroup({
    addComment: new FormControl(''),
  });

  commentsImg: string = '/comments.png';
  dislikeImg: string = '/dislike.png';
  likeImg: string = '/like.png';
  deleteImg: string = '/delete.png';
  blogPosts: BlogPost[] = [];
  adminMode: boolean = false; // Initialt i användarläge

  constructor(
    private blogPostService: BlogPostService,
    private modeService: ModeService
  ) {}

  ngOnInit(): void {
    // Hämta alla blogg-inlägg från tjänsten
    this.blogPosts = this.blogPostService.getBlogPosts();

    // Sortera inläggen efter datum

    this.blogPosts.sort(
      (a, b) =>
        new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
    );

    // Lyssna på förändringar av admin-läget
    this.modeService.isAdmin$.subscribe((isAdmin) => {
      this.adminMode = isAdmin;
    });
  }

  splitBodyText(postBody: string): string[] {
    return postBody.split('\n').filter((line) => line.trim().length > 0);
  }

  addLike(post: BlogPost): void {
    post.addLike(); // Anropa addLike-metoden på det specifika inlägget
    this.blogPostService.updateBlogPost(post); // Uppdatera inlägget i localStorage eller tjänsten
  }

  addDislike(post: BlogPost): void {
    post.addDislike(); //Anropa addDislike-metoden på det specifika inlägget
    this.blogPostService.updateBlogPost(post); // Uppdatera inlägget i localStorage eller tjänsten
  }

  deletePost(post: BlogPost): void {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the post titled "${post.title}"?`
    );

    if (confirmDelete) {
      // Ta bort inlägg från tjänsten och localStorage
      this.blogPostService.removeBlogPost(post.title);

      // Uppdatera listan med inlägg
      this.blogPosts = this.blogPostService.getBlogPosts();
    }
  }

  addComment(post: BlogPost): void {
    const newComment = this.newComment.get('addComment')?.value?.trim();
    if (newComment) {
      post.comments.push(newComment); // Lägg till kommentaren till inlägget
      this.blogPostService.updateBlogPost(post); // Uppdatera inlägget i localStorage
      this.blogPosts = this.blogPostService.getBlogPosts(); // Uppdatera komponentens array
      this.newComment.reset(); // Rensa input-fältet
    }
  }
}
