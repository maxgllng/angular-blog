import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: false,

  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  imagePath: string = 'skyli3.jpg';
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    message: new FormControl(''),
    email: new FormControl(''),
  });
}
