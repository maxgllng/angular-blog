import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
}
