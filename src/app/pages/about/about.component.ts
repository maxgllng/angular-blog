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

  onSubmit(): void {
    const firstName = this.applyForm.get('firstName')?.value;
    const email = this.applyForm.get('email')?.value;

    console.log(
      `Hi ${firstName}, thanks for contacting me! I will get back to you on ${email} as soon as possible. x /sky li`
    );
  }
}
