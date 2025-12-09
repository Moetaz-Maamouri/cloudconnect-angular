import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';
  private readonly DARK_THEME = 'dark';
  private readonly LIGHT_THEME = 'light';

  // Signal to track theme state
  public isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    // Apply theme on initialization
    this.applyTheme(this.isDarkMode());

    // Effect to persist theme changes
    effect(() => {
      const isDark = this.isDarkMode();
      this.applyTheme(isDark);
      this.saveTheme(isDark);
    });
  }

  private getInitialTheme(): boolean {
    // Check localStorage first
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      return savedTheme === this.DARK_THEME;
    }

    // Check system preference
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    return false;
  }

  toggleTheme(): void {
    this.isDarkMode.set(!this.isDarkMode());
  }

  setTheme(isDark: boolean): void {
    this.isDarkMode.set(isDark);
  }

  private applyTheme(isDark: boolean): void {
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      if (isDark) {
        html.classList.add(this.DARK_THEME);
        html.setAttribute('data-bs-theme', this.DARK_THEME);
      } else {
        html.classList.remove(this.DARK_THEME);
        html.setAttribute('data-bs-theme', this.LIGHT_THEME);
      }
    }
  }

  private saveTheme(isDark: boolean): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.THEME_KEY, isDark ? this.DARK_THEME : this.LIGHT_THEME);
    }
  }
}

