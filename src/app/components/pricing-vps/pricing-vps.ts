import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface VpsPlan {
  name: string;
  price: string;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  best?: boolean;
}

@Component({
  selector: 'app-pricing-vps',
  imports: [CommonModule, RouterLink],
  templateUrl: './pricing-vps.html',
  styleUrl: './pricing-vps.css',
  standalone: true
})
export class PricingVps {
  plans: VpsPlan[] = [
    {
      name: 'VPS Starter',
      price: '$6.99/mo',
      cpu: '1 vCPU',
      ram: '2 GB RAM',
      storage: '40 GB SSD',
      bandwidth: '1 TB Bandwidth'
    },
    {
      name: 'VPS Business',
      price: '$12.99/mo',
      cpu: '2 vCPU',
      ram: '4 GB RAM',
      storage: '80 GB SSD',
      bandwidth: '2 TB Bandwidth',
      best: true
    },
    {
      name: 'VPS Pro',
      price: '$24.99/mo',
      cpu: '4 vCPU',
      ram: '8 GB RAM',
      storage: '160 GB SSD',
      bandwidth: '4 TB Bandwidth'
    }
  ];
}

