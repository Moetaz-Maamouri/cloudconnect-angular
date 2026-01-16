import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface DomainExtension {
  extension: string;
  price: string;
  renewalPrice: string;
  popular?: boolean;
}

@Component({
  selector: 'app-domains',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './domains.html',
  styleUrl: './domains.css',
  standalone: true
})
export class Domains {
  domainName: string = '';
  searchResult: string = '';

  extensions: DomainExtension[] = [
    { extension: '.com', price: '$9.99/year', renewalPrice: '$14.99/year', popular: true },
    { extension: '.net', price: '$12.99/year', renewalPrice: '$16.99/year' },
    { extension: '.org', price: '$10.99/year', renewalPrice: '$15.99/year' },
    { extension: '.io', price: '$39.99/year', renewalPrice: '$49.99/year', popular: true },
    { extension: '.co', price: '$24.99/year', renewalPrice: '$29.99/year' },
    { extension: '.info', price: '$11.99/year', renewalPrice: '$16.99/year' },
    { extension: '.biz', price: '$13.99/year', renewalPrice: '$18.99/year' },
    { extension: '.xyz', price: '$1.99/year', renewalPrice: '$14.99/year' },
    { extension: '.online', price: '$9.99/year', renewalPrice: '$34.99/year' },
    { extension: '.store', price: '$49.99/year', renewalPrice: '$59.99/year' },
    { extension: '.tech', price: '$34.99/year', renewalPrice: '$44.99/year' },
    { extension: '.app', price: '$19.99/year', renewalPrice: '$24.99/year' },
    { extension: '.dev', price: '$19.99/year', renewalPrice: '$24.99/year' },
    { extension: '.cloud', price: '$29.99/year', renewalPrice: '$39.99/year' },
    { extension: '.ai', price: '$79.99/year', renewalPrice: '$89.99/year', popular: true }
  ];

  searchDomain() {
    if (this.domainName.trim()) {
      this.searchResult = this.domainName.trim();
      // Here you would normally make an API call to check domain availability
    }
  }
}

