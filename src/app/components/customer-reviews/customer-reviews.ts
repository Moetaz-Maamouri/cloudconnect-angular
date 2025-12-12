import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

interface Review {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

@Component({
  selector: 'app-customer-reviews',
  imports: [],
  templateUrl: './customer-reviews.html',
  styleUrl: './customer-reviews.css'
})
export class CustomerReviewsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('reviewsSection', { static: false }) reviewsSection!: ElementRef;

  reviews: Review[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechStart Inc.',
      rating: 5,
      text: 'Exceptional service and support. Our website performance improved dramatically after switching to this hosting platform.',
      avatar: 'https://img.icons8.com/?size=100&id=23241&format=png'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Digital Solutions',
      rating: 5,
      text: 'The reliability and speed are unmatched. Our team loves the intuitive dashboard and excellent customer support.',
      avatar: 'https://img.icons8.com/?size=100&id=23241&format=png'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder',
      company: 'Creative Agency',
      rating: 5,
      text: 'Best hosting decision we\'ve made. The uptime is incredible and the pricing is transparent. Highly recommended!',
      avatar: 'https://img.icons8.com/?size=100&id=23241&format=png'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Product Manager',
      company: 'Innovate Labs',
      rating: 5,
      text: 'Outstanding performance and security features. The migration was seamless and support was available 24/7.',
      avatar: 'https://img.icons8.com/?size=100&id=23241&format=png'
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Marketing Director',
      company: 'Growth Co.',
      rating: 5,
      text: 'Fast, secure, and reliable. Our site loads instantly and we\'ve had zero downtime since switching.',
      avatar: 'https://img.icons8.com/?size=100&id=23241&format=png'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Developer',
      company: 'CodeCraft',
      rating: 5,
      text: 'Developer-friendly platform with excellent documentation. The API integration was smooth and straightforward.',
      avatar: 'https://img.icons8.com/?size=100&id=23241&format=png'
    }
  ];

  private observer?: IntersectionObserver;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 0);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      const cards = document.querySelectorAll('.review-card');
      cards.forEach((card) => card.classList.add('visible'));
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

    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach((card) => {
      this.observer?.observe(card);
    });
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}

