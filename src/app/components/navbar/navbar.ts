import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Insecription } from "../insecription/insecription";
import { ModalService } from '../../services/modal.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, Insecription],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
    constructor(
      private modalService: ModalService,
      public themeService: ThemeService
    ) {}

    openAuthModal(type: 'signin' | 'signup') {
      this.modalService.open(type);
    }

    toggleDarkMode() {
      this.themeService.toggleTheme();
    }

}
