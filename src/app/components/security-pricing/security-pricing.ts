import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SecurityPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  best?: boolean;
}

@Component({
  selector: 'app-security-pricing',
  imports: [CommonModule, RouterLink],
  templateUrl: './security-pricing.html',
  styleUrl: './security-pricing.css',
  standalone: true
})
export class SecurityPricing {
  plans: SecurityPlan[] = [
    {
      name: 'Basic Security',
      price: '$9.99/month',
      description: 'Essential security features for small websites.',
      features: [
        'SSL Certificate',
        'Basic Firewall',
        'Malware Scanning',
        'Weekly Security Reports'
      ]
    },
    {
      name: 'Advanced Security',
      price: '$24.99/month',
      description: 'Comprehensive security solution for growing businesses.',
      features: [
        'Advanced Firewall',
        'DDoS Protection',
        'Daily Malware Scanning',
        'Real-time Threat Detection',
        'Security Monitoring'
      ],
      best: true
    },
    {
      name: 'Enterprise Security',
      price: '$49.99/month',
      description: 'Enterprise-grade security for high-traffic websites.',
      features: [
        'Enterprise Firewall',
        'Advanced DDoS Protection',
        '24/7 Security Monitoring',
        'Custom Security Rules',
        'Priority Support',
        'Security Audit Reports'
      ]
    }
  ];
}

