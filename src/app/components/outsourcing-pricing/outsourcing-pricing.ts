import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface OutsourcingService {
  name: string;
  price: string;
  description: string;
  features: string[];
  best?: boolean;
}

@Component({
  selector: 'app-outsourcing-pricing',
  imports: [CommonModule, RouterLink],
  templateUrl: './outsourcing-pricing.html',
  styleUrl: './outsourcing-pricing.css',
  standalone: true
})
export class OutsourcingPricing {
  services: OutsourcingService[] = [
    {
      name: 'Basic IT Support',
      price: '$299/month',
      description: 'Essential IT support for small businesses.',
      features: [
        '8/5 Support Hours',
        'Remote Support',
        'Basic Monitoring',
        'Monthly Reports'
      ]
    },
    {
      name: 'Professional IT Management',
      price: '$799/month',
      description: 'Comprehensive IT management for growing businesses.',
      features: [
        '24/7 Support',
        'Proactive Monitoring',
        'Server Management',
        'Security Updates',
        'Weekly Reports',
        'Dedicated Technician'
      ],
      best: true
    },
    {
      name: 'Enterprise IT Solutions',
      price: 'Custom',
      description: 'Tailored IT solutions for enterprise needs.',
      features: [
        '24/7 Premium Support',
        'Advanced Monitoring',
        'Full Infrastructure Management',
        'Custom Solutions',
        'Dedicated Team',
        'SLA Guarantee'
      ]
    }
  ];
}

