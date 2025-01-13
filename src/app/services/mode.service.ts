import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModeService {
  private isAdmin = new BehaviorSubject<boolean>(false); // Default: user-mode
  isAdmin$ = this.isAdmin.asObservable();

  toggleMode(): void {
    this.isAdmin.next(!this.isAdmin.value); // Toggla mellan user/admin
  }

  setAdminMode(isAdmin: boolean): void {
    this.isAdmin.next(isAdmin);
  }
}
