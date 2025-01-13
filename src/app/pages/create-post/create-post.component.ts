import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BlogPostService } from '../../services/blog-post.service';
import { BlogPost } from '../../models/blog-post';

@Component({
  selector: 'app-create-post',
  standalone: false,

  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {
  newPost = new FormGroup({
    title: new FormControl(''),
    imgUrl: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private blogPostService: BlogPostService) {}

  onSubmit(): void {
    if (this.newPost.valid) {
      const newBlogPost = new BlogPost(
        this.newPost.value.title || '',
        this.newPost.value.imgUrl || '',
        this.newPost.value.body || '',
        new Date() 
      );

      //Lägger till inlägg via service

      this.blogPostService.addBlogPost(newBlogPost);

      // //Sparar till local storage
      // const storedPosts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
      // storedPosts.push(newBlogPost);
      // localStorage.setItem('blogPosts', JSON.stringify(storedPosts));

      //Nolställ formuläret

      this.newPost.reset();
      alert('Your blogpost was created successfully!');
    } else {
      alert('Please fill out all fields before submitting!');
    }
  }
}
