import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostService } from '../../services/blog-post.service';
import { BlogPost } from '../../models/blog-post';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-single-post',
  standalone: false,

  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css',
})
export class SinglePostComponent implements OnInit {
  post: BlogPost | undefined;

  // Bilder för ikoner
  commentsImg: string = '/comments.png';
  dislikeImg: string = '/dislike.png';
  likeImg: string = '/like.png';
  deleteImg: string = '/delete.png';

  // Kommentar-formulär
  newComment = new FormGroup({
    addComment: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private blogPostService: BlogPostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Hämta titeln från URL-parametern
    const title = this.route.snapshot.paramMap.get('title');
    if (title) {
      this.post = this.blogPostService
        .getBlogPosts()
        .find((p) => p.title === title);
    }
  }

  // Metod för att dela upp text i rader
  splitBodyText(postBody: string): string[] {
    return postBody.split('\n').filter((line) => line.trim().length > 0);
  }

  // Metod för att lägga till en like
  addLike(post: BlogPost): void {
    if (post) {
      post.addLike();
      this.blogPostService.updateBlogPost(post); // Uppdatera i tjänsten
    }
  }

  // Metod för att lägga till en dislike
  addDislike(post: BlogPost): void {
    if (post) {
      post.addDislike();
      this.blogPostService.updateBlogPost(post);
    }
  }

  // Metod för att lägga till en kommentar
  addComment(post: BlogPost): void {
    const newComment = this.newComment.get('addComment')?.value?.trim();
    if (newComment && post) {
      post.comments.push(newComment);
      this.blogPostService.updateBlogPost(post);
      this.newComment.reset(); // Töm input-fältet
    }
  }

  // Navigera tillbaka till blog-sidan
  goToBlogPage(): void {
    this.router.navigate(['/blog']);
  }
}
