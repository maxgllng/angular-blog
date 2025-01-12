import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  imgPath: string = 'create.png';
  isAdminMode = false;

  constructor(private router: Router) {}

  toggleMode() {
    this.isAdminMode = !this.isAdminMode; //Växla mellan user och admin

    if (!this.isAdminMode && this.router.url === '/create-post') {
      this.router.navigate(['/']);
    }
  }
}
