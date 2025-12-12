import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { ThemeService } from './services/theme.service';
import { AuthModalComponent } from './auth-modal/auth-modal';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer, AuthModalComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <app-auth-modal></app-auth-modal>
  `,
})
export class App {
  constructor(private themeService: ThemeService) {
    // Initialize theme service on app startup
  }
}
