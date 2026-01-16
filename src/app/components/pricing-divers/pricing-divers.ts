import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface DiversService {
  name: string;
  price: string;
  description: string;
  features: string[];
  best?: boolean;
}

@Component({
  selector: 'app-pricing-divers',
  imports: [CommonModule, RouterLink],
  templateUrl: './pricing-divers.html',
  styleUrl: './pricing-divers.css',
  standalone: true
})
export class PricingDivers {
  services: DiversService[] = [
    {
      name: 'Domain Registration',
      price: '$9.99/year',
      description: 'Register and manage your domain names with ease.',
      features: [
        'Free DNS Management',
        'Domain Privacy Protection',
        'Email Forwarding',
        'Easy Transfer'
      ]
    },
    {
      name: 'SSL Certificate',
      price: '$29.99/year',
      description: 'Secure your website with industry-standard SSL encryption.',
      features: [
        '256-bit Encryption',
        'Trust Seal Included',
        'Unlimited Re-issuance',
        '24/7 Support'
      ],
      best: true
    },
    {
      name: 'Email Hosting',
      price: '$4.99/month',
      description: 'Professional email hosting for your business.',
      features: [
        '10 GB Storage',
        'Unlimited Email Accounts',
        'Webmail Access',
        'Spam Protection'
      ]
    },
    {
      name: 'Website Builder',
      price: '$14.99/month',
      description: 'Build your website with our drag-and-drop builder.',
      features: [
        'Drag & Drop Editor',
        'Mobile Responsive',
        'SEO Tools',
        'Free Templates'
      ]
    },
    {
      name: 'CDN Service',
      price: '$19.99/month',
      description: 'Accelerate your website with global content delivery.',
      features: [
        'Global Network',
        'DDoS Protection',
        'Image Optimization',
        'Analytics Dashboard'
      ]
    },
    {
      name: 'Backup Service',
      price: '$7.99/month',
      description: 'Automated daily backups for your peace of mind.',
      features: [
        'Daily Automated Backups',
        '30 Days Retention',
        'One-Click Restore',
        'Cloud Storage'
      ]
    }
  ];
}

