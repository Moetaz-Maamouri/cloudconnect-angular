import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  stats = [
    { value: '99.9%', label: 'Uptime' },
    { value: '50K+', label: 'Customers' },
    { value: '24/7', label: 'Support' },
    { value: '150+', label: 'Countries' }
  ];

  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      const stats = document.querySelectorAll('.hero-stat-item');
      const cta = document.querySelector('.hero-cta-group');
      stats.forEach((el) => el.classList.add('visible'));
      cta?.classList.add('visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    setTimeout(() => {
      const stats = document.querySelectorAll('.hero-stat-item');
      const cta = document.querySelector('.hero-cta-group');
      stats.forEach((el) => this.observer?.observe(el));
      if (cta && this.observer) {
        this.observer.observe(cta);
      }
    }, 100);
  }
}
