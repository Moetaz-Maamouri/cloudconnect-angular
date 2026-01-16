import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type FaqCategory = 'all' | 'hosting' | 'technical' | 'billing' | 'support';

@Component({
  selector: 'app-faq',
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
  standalone: true
})
export class Faq {
  activeCategory: FaqCategory = 'all';

  setCategory(category: FaqCategory) {
    this.activeCategory = category;
  }
}
