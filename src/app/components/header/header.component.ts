import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  imgPath: string = 'create.png';
  isAdminMode = false;

  toggleMode() {
    this.isAdminMode = !this.isAdminMode; //Växla mellan user och admin
  }
}
