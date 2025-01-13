import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModeService } from '../../services/mode.service';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  imgPath: string = 'create.png';
  isAdmin: boolean = false;

  constructor(private modeService: ModeService) {
    // Lyssna på förändringar av admin-status
    this.modeService.isAdmin$.subscribe((adminMode) => {
      this.isAdmin = adminMode;
    });
  }

  toggleMode(): void {
    this.modeService.toggleMode();
  }
}
