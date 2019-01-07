import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  isHamburgerCollapsed = true;

  constructor(private dsService: DataStorageService) {}

  onToggleHamburger() {
    this.isHamburgerCollapsed = !this.isHamburgerCollapsed;
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

