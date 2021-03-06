import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isHamburgerCollapsed = true;

  constructor(
    private dsService: DataStorageService,
    public authService: AuthService) {
  }

  onToggleHamburger() {
    this.isHamburgerCollapsed = !this.isHamburgerCollapsed;
  }

  onLogout() {
    this.authService.logout();
  }

  onSaveData() {
    this.dsService.storeRecipes()
      .subscribe((response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dsService.fetchRecipes();
  }
}

